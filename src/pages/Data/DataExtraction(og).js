import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Highlighter from "react-highlight-words";
import {
  Container, Link, Typography,
  Box, Chip, Paper,
  InputBase, IconButton
} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { styled, alpha } from '@mui/system';
import { CSVLink } from "react-csv";
import { getFromStorage } from 'components/utils/utils';
import {
  setSearchDisplay,
  setSearchKeywords,
  setDataRows,
  setActiveColumns,
  setColumnOrder,
  setData,
  setExportedData
} from 'app/slice/dataExtraction';

import SearchIcon from '@mui/icons-material/Search';


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

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.primary.main, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.primary.main, 0.25),
//   },
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(1),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     // transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '40ch',
//       '&:focus': {
//         width: '60ch',
//       },
//     },
//   },
// }));

// const handleSort = (rows, column, dir) => {
//   return rows.sort((aRow, bRow) => {
//     const a = aRow[column.id];
//     const b = bRow[column.id];
//     const f = typeof (a) === 'string' ? (a, b) => a.localeCompare(b) : false;
//     return (f ? f(a, b) : a - b) * dir;
//   });
// };

// const DataChoice = ({ varNames, label }) => {
//   let dispatch = useDispatch()

//   let arr = []
//   for (let i = 0; i < varNames.length; i++)
//     arr.push(true)
//   let [state, setState] = React.useState(arr)

//   const handleClick = (idx) => {
//     let temp = []
//     state.forEach((e, i) => {
//       if (i === idx)
//         temp.push(!e)
//       else
//         temp.push(e)
//     })
//     setState(temp)
//   }

//   React.useEffect(() => {
//     let temp = varNames.filter((val, idx) => { return state[idx] })
//     dispatch(setActiveColumns(temp))
//   }, [state, dispatch, varNames])

//   return (
//     <Box
//       sx={{
//         border: "1px solid #6FBFF5",
//         borderRadius: "1rem",
//         backgroundColor: "rgba(33, 150, 243, 0.15)",
//         marginBottom: "1rem",
//         padding: "1rem",
//       }}
//     >
//       <Typography
//         variant="h6"
//         sx={{ marginBottom: "1rem" }}
//       >
//         {label}
//       </Typography>
//       {varNames.map((value, idx) => (
//         <Chip
//           id={idx}
//           key={value}
//           label={value}
//           sx={{
//             backgroundColor: state[idx] ? "#6FBFF5" : "lightgray",
//             m: '2px'
//           }}
//           onClick={() => handleClick(idx)}
//         />
//       ))}
//     </Box>
//   )
// }

export default function Inventory() {
  const dispatch = useDispatch()
  const {
    activeColumns,
    columnHeaders,
    columnOrder,
    columnTitles,
    data,
    databaseLink,
    dataRows,
    exportedData,
    searchDisplay,
    searchKeywords,
  } = useSelector(state => state.dataExtraction)

  // const [columnOrder, setColumns] = React.useState(columnHeaders)

  const [order, setOrder] = React.useState(
    new Array(columnOrder.length).fill(null).map((n, i) => i)
  );

  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sort, setSort] = React.useState({ column: {}, dir: 1 });
  const [page, setPage] = React.useState(0)

  // React.useEffect(() => {
  //   let newColumns = columnHeaders.filter(col => activeColumns.includes(col.text))
  //   dispatch(setColumnOrder(newColumns))
  //   setOrder(new Array(newColumns.length).fill(null).map((n, i) => i))
  // }, [activeColumns, columnHeaders, dispatch])

  React.useEffect(() => {
    const [res, exp] = dataFormatting()
    dispatch(setData(res))
    dispatch(setExportedData(exp))
  }, [dispatch])

  React.useEffect(() => {
    dispatch(setDataRows(data.filter(row => {
      let check = false;
      for (const key in row) {
        if (row[key] ?? false)
          for (let i = 0; i < searchKeywords.length; i++)
            if (row[key].toString().toLowerCase().includes(searchKeywords[i].toLowerCase()))
              check = true;
        if (check) break
      }
      return check
    })))
  }, [searchKeywords, data, dispatch])

  // const onHeaderClick = (column) => () => {
  //   const dir = column.id === sort.column.id ? sort.dir * -1 : 1;
  //   setSort({ column, dir })
  //   dispatch(setDataRows(handleSort(dataRows, sort.column, sort.dir)))
  // };

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  function CustomCell(props) {
    console.log(props)

    return (
      <Highlighter
        searchWords={["and"]}
        autoEscape={true}
        textToHighlight={props.value}
        style={{
          width: props.width,

        }}
      />
    )
  }

  return (
    <div>
      <Header variant='h2' align='center'>
        Data Extraction
      </Header>
      <div style={{ marginTop: 80 }} />
      <Container sx={{ textAlign: 'center' }}>
        <Body variant='body1' align='center'>
          Here is a smaller version of the data table that provide you with crucial information.To access the full table, click this link below.<br />
          <Link href={databaseLink}>Link</Link>
          <br />
          or click the button below to download the full table in csv.
          <br />
          You can drag and drop the header of the table to arrange the data the way you like.
          <CSVLink
            data={exportedData}
            filename={"Filtered_Masterlist of Literature Articles.csv"}
          >
            Link
          </CSVLink>
        </Body>
        <Paper
          style={{
            height: 800,
          }}
        >
          <DataGrid
            rows={dataRows}
            columns={columnHeaders}
            pageSize={20}
            rowsPerPageOptions={[10, 20, 50]}
            density="comfortable"
            rowHeight={120}
            components={{
              Cell: CustomCell
            }}
            componentsProps={{
              cell: { columnHeaders }
            }}
            sx={{
              "& .MuiDataGrid-cell": {
                whiteSpace: "normal",
                lineHeight: "normal !important",
                overflow: "auto",
                padding: "1rem",
                textOverflow: "unset"
              }
            }}
          />
        </Paper>
      </Container>
    </div >
  );
}
