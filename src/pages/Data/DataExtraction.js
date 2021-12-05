import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Highlighter from "react-highlight-words";
import {
  Container, Paper, Box,
  Link, Typography, Button,
  TextField, IconButton,
  Grid, Hidden
} from "@mui/material";
import {
  DataGrid,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarColumnsButton,
} from '@mui/x-data-grid';
import { styled } from '@mui/system';
import { CSVLink } from "react-csv";
import {
  getFromStorage,
} from 'components/utils/utils';
import {
  setDataRows,
  setData,
  setSearchDisplay,
  setSearchKeywords,
  setColumnOrder,
  setColumnOrderLong,
} from 'app/slice/dataExtraction';
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  MouseSensor,
  useSensor,
  useSensors,
  DragOverlay
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { Item, SortableItem } from "components/DnD/SortableItem";

import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import LinkIcon from '@mui/icons-material/Link';

function dataFormatting() {
  let data = getFromStorage('data')
  let position = getFromStorage('position')
  let rows = data.data.table.rows
  let res = []
  let exp = []
  rows.forEach(item => {
    let row = item.c
    let temp = {}
    for (const key in position) {
      temp[key] = row[position[key]]?.v
    }
    exp.push(temp)
  })

  rows.forEach((item, idx) => {
    let row = item.c
    res.push({
      id: idx,
      title: row[position['Title']]?.v,
      translated: row[position['Translated Title']]?.v,
      authors: row[position['Author(s)']]?.v,
      research_topics: row[position['Research Topics']]?.v,
      aim: row[position["Aim of Research"]]?.v,
      coastal: row[position["Coastal or Offshore"]]?.v,
      location_studied: row[position['Location/Territory studied']]?.v,
      water_body_general: row[position['Water Body_General']]?.v,
      key_findings: row[position["Key Findings"]]?.v,
      methodologies: row[position['Methodologies Used ']]?.v,
      geographic_scale: row[position['Geographical Scale']]?.v,
      compartments: row[position['Field Sampling_Compartment']]?.v,
      polymer: row[position['Plastic Characterisation_Polymer']]?.v,
      year_published: row[position['Year Published']]?.v,
      research_group: row[position['Research Group(s)']]?.v,
      citation: row[position["Citation"]]?.v,
      link: row[position['Link to source']]?.v,
    })
  })
  return [res, exp]
}

function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

const Header = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  padding: '60px 20px',
  boxSizing: 'border-box',
  textAlign: 'center',
}))

const Body = styled(Typography)(({ theme }) => ({
  boxSizing: 'border-box',
  padding: 20,
  marginBottom: 30,
  backgroundColor: theme.palette.primary.main,
}))

const QuickSearchToolbar = (props) => {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        backgroundColor: theme => theme.palette.tertiary.main,
      }}
    >
      <div>
        <GridToolbarColumnsButton color="quaternary" />
        <GridToolbarFilterButton sx={{ color: theme => theme.palette.quaternary.main }} />
        <GridToolbarExport color="quaternary" />
      </div>
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search…"
        color="quaternary"
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" color="quaternary" onClick={props.onClick} />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? 'visible' : 'hidden' }}
              onClick={props.clearSearch}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ),
        }}
        sx={{
          width: {
            xs: 1,
            sm: 'auto',
          },
          m: (theme) => theme.spacing(1, 0.5, 1.5),
          '& .MuiSvgIcon-root': {
            mr: 0.5,
          },
          '& .MuiInput-underline:hover': {
            color: theme => theme.palette.quaternary.main,
          },
        }}
      />
    </Box>
  );
}

const CustomCell = (props) => {
  // console.log(props)
  const Wrapper = ({ children }) => {
    return (
      <div
        style={{
          width: props.width - 20,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          alignText: "left",
          borderBottom: '1px solid',
        }}
      >
        {children}
      </div>
    )
  }

  const CustomLink = ({ href }) => {
    return (
      <Wrapper>
        <Link href={href} target="_blank" rel="noreferrer noopener">
          <LinkIcon color="secondary" />
        </Link>
      </Wrapper>
    )
  }

  const Default = ({ searchKeywords, textToHighlight }) => {
    return (
      <Wrapper>
        <Highlighter
          searchWords={searchKeywords}
          autoEscape={true}
          textToHighlight={textToHighlight}
          highlightStyle={{ backgroundColor: '#c8a464' }}
        />
      </Wrapper>
    )
  }

  switch (props.field) {
    case 'link':
      return (
        <CustomLink href={props.value} />
      )
    case "id":
      return (
        <Wrapper>{props.value + 1}</Wrapper>
      )
    default:
      return (
        <Default
          searchKeywords={props.searchKeywords}
          textToHighlight={props.value}
        />
      )
  }
}

const ColumnOrganizer = (props) => {
  const { columnOrder,
    columnOrderLong,
    columnHeaders } = useSelector(state => state.dataExtraction)
  const dispatch = useDispatch()

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor),
  );

  function handleDragEnd({ active, over }) {

    if (active.id !== over.id) {
      const oldIndex = columnOrder.indexOf(active.id)
      const newIndex = columnOrder.indexOf(over.id)
      dispatch(setColumnOrder(arrayMove(columnOrder, oldIndex, newIndex)))
      dispatch(setColumnOrderLong(arrayMove(columnOrderLong, oldIndex, newIndex)))
    }

  }

  function handleReset() {
    dispatch(setColumnOrder(columnHeaders.map(col => col.headerName)))
    dispatch(setColumnOrderLong(columnHeaders))
  }

  return (
    <Paper
      sx={{
        height: 1000,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme => theme.palette.secondary.main,
      }}
    >
      <Box
        sx={{
          backgroundColor: theme => theme.palette.tertiary.main,
          color: theme => theme.palette.quaternary.main,
          textAlign: 'center',
          padding: 2,
          marginBottom: 1,
        }}
      >
        <Typography
        >
          Drag and drop columns to reorder them.
        </Typography>
        <br />
        <Button
          variant="contained"
          size="small"
          color="secondary"
          onClick={handleReset}
        >
          Reset order
        </Button>
      </Box>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={columnOrder} strategy={verticalListSortingStrategy}>
          {columnOrder.map((title, idx) => (
            <SortableItem key={columnOrder[idx]} index={idx} data={columnOrder} />
          ))}
        </SortableContext>
        {/* <SortableContext items={test} strategy={verticalListSortingStrategy}>
          {test.map((title, idx) => (
            <SortableItem key={test[idx].headerName} index={idx} data={test} />
          ))}
        </SortableContext> */}
        <DragOverlay>
          <Item />
        </DragOverlay>
      </DndContext>
    </Paper>
  )
}

// Main program start here
export default function DataExtraction() {
  const dispatch = useDispatch()
  const {
    columnOrderLong,
    columnHeaders,
    data,
    databaseLink,
    dataRows,
    searchKeywords,
    searchDisplay,
  } = useSelector(state => state.dataExtraction)

  const [exportedData, setExportedData] = React.useState([])

  React.useEffect(() => {
    const [res, exp] = dataFormatting()
    dispatch(setData(res))
    setExportedData(exp)
    dispatch(setDataRows(res))
  }, [dispatch])

  const requestSearch = (searchValue) => {
    dispatch(setSearchKeywords(searchValue))
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = data.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field]);
      });
    });
    dispatch(setDataRows(filteredRows));
  };

  return (
    <div>
      <Header variant='h2' align='center'>
        Data Extraction
      </Header>
      <Container maxWidth="md">
        <Body variant='body1'>
          Explore the data compiled on research within, and about, marine plastic in Southeast and East Asia.
          <br /><br />
          <li>Select columns to show or hide, using the side bar.</li>
          <li>Drag and drop the columns to change the order.</li>
          <li>Sort the rows by clicking on the column headers.</li>
          <li>If you would like to access the complete inventory, click this&nbsp;
            <Link
              href={databaseLink}
              target="_blank"
              rel="noreferrer noopener"
              sx={{
                color: theme => theme.palette.secondary.main,
                fontWeight: 'bold',
              }}
            >
              link
            </Link>.
          </li>
          <br />
          Alternatively, click&nbsp;
          <CSVLink
            data={exportedData}
            filename={"Masterlist of Literature Articles.csv"}
            style={{
              color: "#9c4a55",
              fontWeight: 'bold',
            }}
          >
            here
          </CSVLink>
          &nbsp;to download the complete inventory in CSV.
        </Body>
      </Container>
      <Container>
        <Grid container spacing={2}>
          <Hidden smDown>
            <Grid item sm={2}>
              <ColumnOrganizer>
              </ColumnOrganizer>
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={10}>
            <Paper elevation={1} style={{ height: 1000, marginBottom: "4rem" }}>
              <DataGrid
                rows={dataRows}
                columns={columnOrderLong}
                density="comfortable"
                rowHeight={120}
                columnBuffer={20}
                components={{
                  Cell: CustomCell,
                  Toolbar: QuickSearchToolbar,
                }}
                componentsProps={{
                  cell: {
                    columnHeaders,
                    searchKeywords
                  },
                  toolbar: {
                    value: searchDisplay,
                    onClick: () => requestSearch(searchDisplay),
                    onChange: (event) => dispatch(setSearchDisplay(event.target.value)),
                    clearSearch: () => {
                      dispatch(setSearchDisplay(''))
                      requestSearch('')
                    },
                  }
                }}
                sx={{
                  "& .MuiDataGrid-row": {
                    maxHeight: "unset !important",
                  },
                  "& .MuiDataGrid-columnHeader": (theme) => ({
                    backgroundColor: theme.palette.primary.main,
                  }),
                  "& .MuiDataGrid-iconSeparator": (theme) => ({
                    color: "#9c4a55",
                  }),
                  "& .MuiDataGrid-columnHeaderTitle": {
                    margin: "auto",
                  },
                  "& MuiDataGrid-virtualScrollerContent": {
                    overflow: "unset",
                  }
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div >
  );
}
