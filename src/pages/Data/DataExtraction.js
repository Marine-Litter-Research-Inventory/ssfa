import React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableSortLabel from "@mui/material/TableSortLabel";
import TablePagination from '@mui/material/TablePagination';
import Highlighter from "react-highlight-words";
import {
  Container, Link, Typography,
  // FormControl, InputLabel, Select, MenuItem, OutlinedInput, Checkbox,
  Box, Chip,
  InputBase, IconButton,
} from "@mui/material";
import { styled, alpha } from '@mui/system';
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { CSVLink } from "react-csv";

import SearchIcon from '@mui/icons-material/Search';

import { getFromStorage, textToJson } from 'components/utils/utils';

const initColumns = [
  { text: 'Title', id: 'title', align: 'left' },
  { text: 'Translated titles', id: 'translated', align: 'left' },
  { text: 'Authors', id: 'authors', align: 'left' },
  { text: 'Research Topics', id: 'research_topics', align: 'left', width: 350 },
  { text: 'Aim of Research', id: 'aim', align: 'left', width: 350 },
  { text: 'Coastal or Offshore', id: 'coastal', align: 'left' },
  { text: 'Location/Territory studied', id: 'location_studied', align: 'left' },
  { text: 'Water Body_General', id: 'water_body_general', align: 'left' },
  { text: 'Key Findings', id: 'key_findings', align: 'left', width: 450 },
  { text: 'Methodologies Used', id: 'methodologies', align: 'left' },
  { text: 'Geographic scale', id: 'geographic_scale', align: 'left' },
  { text: 'Compartments', id: 'compartments', align: 'left' },
  { text: 'Plastic characterisation/polymer', id: 'polymer', align: 'left' },
  { text: 'Year Published', id: 'year_published', align: 'left' },
  { text: 'Research Group', id: 'research_group', align: 'left', width: 250 },
  { text: 'Citation', id: 'citation', align: 'left' },
  { text: 'Link', id: 'link', align: 'left' },
]

const repoLink = "https://docs.google.com/spreadsheets/d/1yRLGaQk3-9UlopftPr5e8F-X3pKkjwLlZWcTwai6_Ds/edit#gid=177125452"

function dataFormatting() {
  let data = textToJson(getFromStorage('data'))
  let position = textToJson(getFromStorage('position'))
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

  rows.forEach(item => {
    let row = item.c
    res.push({
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
      link: <Link href={row[position['Link to source']]?.v}>Link</Link>,
    })
  })
  return [res, exp]
}

const Wave = () => {
  return (
    <div style={{ position: 'relative', height: 60 }}>
      <div className="custom-shape-divider-top-1625571579">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  )
}

const Header = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  padding: '60px 20px',
  boxSizing: 'border-box',
  color: 'ghostwhite',
  textAlign: 'center',
  backgroundColor: '#6FBFF5',
}))

const Body = styled(Typography)({
  margin: '30px auto',
  boxSizing: 'border-box',
  padding: 20,
})

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    // transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
      '&:focus': {
        width: '60ch',
      },
    },
  },
}));

//Use the react-sortable-hoc wrappers around the matui elements
const SortableHead = SortableContainer(({ children }) => {
  return (
    <TableHead>
      <TableRow >{children}</TableRow>
    </TableHead>
  );
});

const SortableCell = SortableElement(({ value }) => {
  return <>{value}</>;
});

const handleSort = (rows, column, dir) => {
  return rows.sort((aRow, bRow) => {
    const a = aRow[column.id];
    const b = bRow[column.id];
    const f = typeof (a) === 'string' ? (a, b) => a.localeCompare(b) : false;
    return (f ? f(a, b) : a - b) * dir;
  });
};

// const DataSelector = ({ varX, setVarX, varNames, label }) => {

//   const handleChange = (event) => {
//     const { target: { value } } = event
//     setVarX(typeof value === 'string' ? value.split(",") : value)
//   }

//   return (
//     <FormControl sx={{ m: 1, minWidth: 300, maxWidth: 900, padding: "1rem" }}>
//       <InputLabel id="selector-label" sx={{ fontSize: 20 }}>{label}</InputLabel>
//       <Select
//         labelId="selector-label"
//         multiple
//         value={varX}
//         onChange={handleChange}
//         input={<OutlinedInput sx={{ fontSize: 20 }} label={label} />}
//         renderValue={(selected) => (
//           <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
//             {selected.map((value) => (
//               <Chip color="primary" key={value} label={value} sx={{ m: '2px' }} />
//             ))}
//           </Box>
//         )}
//         MenuProps={{
//           PaperProps: {
//             style: {
//               maxHeight: "35%",
//               width: "100%"
//             },
//           },
//         }}
//       >
//         {varNames.map((name) => (
//           <MenuItem
//             key={name}
//             value={name}
//           >
//             <Checkbox checked={varX.indexOf(name) > -1} />
//             {name}
//           </MenuItem>
//         ))}
//       </Select>
//     </FormControl>
//   )
// }

const DataChoice = ({ varNames, label, setHeader }) => {
  let arr = []
  for (let i = 0; i < varNames.length; i++)
    arr.push(true)
  let [state, setState] = React.useState(arr)

  const handleClick = (idx) => {
    let temp = []
    state.forEach((e, i) => {
      if (i === idx)
        temp.push(!e)
      else
        temp.push(e)
    })
    setState(temp)
  }

  React.useEffect(() => {
    let temp = varNames.filter((val, idx) => { return state[idx] })
    setHeader(temp)
  }, [state, setHeader, varNames])

  return (
    <Box
      sx={{
        border: "1px solid #6FBFF5",
        borderRadius: "1rem",
        backgroundColor: "rgba(33, 150, 243, 0.15)",
        marginBottom: "1rem",
        padding: "1rem",
      }}
    >
      <Typography
        variant="h6"
        sx={{ marginBottom: "1rem" }}
      >
        {label}
      </Typography>
      {varNames.map((value, idx) => (
        <Chip
          id={idx}
          key={value}
          label={value}
          sx={{
            backgroundColor: state[idx] ? "#6FBFF5" : "lightgray",
            m: '2px'
          }}
          onClick={() => handleClick(idx)}
        />
      ))}
    </Box>
  )
}


export default function Inventory() {
  const [res, exp] = dataFormatting()
  const [initRows] = React.useState(res)
  const [displayRows, setDisplayRows] = React.useState(res)
  const [header, setHeader] = React.useState(initColumns.map(col => col.text))
  const [columns, setColumns] = React.useState(initColumns)
  const [choices] = React.useState(initColumns.map(col => col.text))
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState({ column: {}, dir: 1 });
  const [order, setOrder] = React.useState(
    new Array(columns.length).fill(null).map((n, i) => i)
  );
  const [search, setSearch] = React.useState([""]);
  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {
    let newColumns = initColumns.filter(col => header.includes(col.text))
    setColumns(newColumns)
    setOrder(new Array(newColumns.length).fill(null).map((n, i) => i))
  }, [header])

  React.useEffect(() => {
    setDisplayRows(initRows.filter(row => {
      let check = false;
      for (const key in row) {
        if (row[key] ?? false)
          for (let i = 0; i < search.length; i++)
            if (row[key].toString().toLowerCase().includes(search[i].toLowerCase()))
              check = true;
        if (check) break
      }
      return check
    }))
  }, [search, initRows])

  const onReorderEnd = React.useCallback(
    ({ oldIndex, newIndex }, e) => {
      const newOrder = [...order];
      const moved = newOrder.splice(oldIndex, 1);
      newOrder.splice(newIndex, 0, moved[0]);
      setOrder(newOrder);
    },
    [order, setOrder]
  );

  const onHeaderClick = (column) => () => {
    const dir = column.id === sort.column.id ? sort.dir * -1 : 1;
    setSort({ column, dir });
    setDisplayRows(handleSort(displayRows, sort.column, sort.dir));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleRequest = () => {
    let arr = searchTerm.split(' ')
    setSearch(arr);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <Header variant='h2' align='center'>
        Data Extraction
      </Header>
      <Wave />
      <div style={{ marginTop: 80 }} />
      <Container sx={{ textAlign: 'center' }}>
        <Body variant='body1' align='center'>
          Here is a smaller version of the data table that provide you with crucial information. To access the full table, click this link below. <br />
          <Link href={repoLink}>Link</Link>
          <br />
          or click the button below to download the full table in csv.
          <br />
          <CSVLink
            data={exp}
            filename={"Masterlist of Literature Articles.csv"}
          >
            Link
          </CSVLink>
          <br />
          You can drag and drop the header of the table to arrange the data the way you like.
        </Body>
        <div style={{ display: 'inline-block', marginBottom: '1rem' }}>
          <DataChoice
            label="Display Columns"
            varNames={choices}
            setHeader={setHeader}
          />
          <Search>
            <IconButton
              onClick={handleRequest}
            >
              <SearchIcon />
            </IconButton>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={handleSearch}
            />
          </Search>
        </div>
        <Paper>
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table size="small" stickyHeader aria-label="simple table">
              <SortableHead axis="x" onSortEnd={onReorderEnd} distance={5}>
                {order.map((colIdx, i) => (
                  //index needs to be CURRENT
                  //key needs to be STATIC
                  <SortableCell
                    index={i}
                    key={colIdx}
                    value={
                      <TableCell
                        onClick={onHeaderClick(columns[colIdx])}
                        style={{
                          minWidth: columns[colIdx].width,
                          backgroundColor: '#6fbff5',
                          border: '0.01rem solid white',
                        }}
                      >
                        <TableSortLabel
                          active={columns[colIdx].id === sort.column.id}
                          direction={sort.dir === 1 ? "asc" : "desc"}
                        >
                          {columns[colIdx].text}
                        </TableSortLabel>
                      </TableCell>
                    }
                  />
                ))}
              </SortableHead>
              <TableBody>
                {displayRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, idx) => (
                    <TableRow key={idx} hover style={{ height: 40 }}>
                      {order.map((colIdx, i) => (
                        <TableCell
                          key={columns[colIdx].id}
                          component="th"
                          scope="row"
                          style={{ height: 40, overflow: "hidden" }}
                        >
                          <Highlighter
                            searchWords={search}
                            autoEscape={true}
                            textToHighlight={row[columns[colIdx].id]}
                          />,
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25]}
            count={displayRows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        <Body variant='body1' align='center'>
          You can download your filtered table here <br />
          <CSVLink
            data={displayRows}
            filename={"Filtered_Masterlist of Literature Articles.csv"}
          >
            Link
          </CSVLink>
        </Body>
        <br />
        <br />
      </Container>
    </div >
  );
}
