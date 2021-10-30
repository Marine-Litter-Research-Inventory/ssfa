import React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableSortLabel from "@mui/material/TableSortLabel";
import { Container, Link, Typography } from "@mui/material";
import { styled } from '@mui/system';
import { SortableContainer, SortableElement } from "react-sortable-hoc";

import { getFromStorage, textToJson } from 'components/utils/utils';


const columns = [
  { text: 'Citation', id: 'citation', align: 'left' },
  { text: 'Title', id: 'title', align: 'left' },
  { text: 'Link', id: 'link', align: 'left' },
  { text: 'Authors', id: 'authors', align: 'left' },
  { text: 'Translated titles', id: 'translated', align: 'left' },
  { text: 'Research Group', id: 'research_group', align: 'left', width: 250 },
  { text: 'Methodologies Used', id: 'methodologies', align: 'left' },
  { text: 'Water Body_General', id: 'water_body_general', align: 'left' },
  { text: 'Compartments', id: 'compartments', align: 'left' },
  { text: 'Key Findings', id: 'key_findings', align: 'left', width: 450 },
  { text: 'Research Topics', id: 'research_topics', align: 'left', width: 350 },
  { text: 'Plastic characterisation/polymer', id: 'polymer', align: 'left' },
  { text: 'Year Published', id: 'year_published', align: 'left' },
  { text: 'Geographic scale', id: 'geographic_scale', align: 'left' },
  { text: 'Location/Territory studied', id: 'location_studied', align: 'left' },
]

function dataFormatting() {
  let data = textToJson(getFromStorage('data'))
  let position = textToJson(getFromStorage('position'))
  let rows = data.data.table.rows
  let res = []

  rows.forEach(item => {
    let row = item.c
    res.push({
      citation: row[position["Citation"]]?.v,
      title: row[position['Title']]?.v,
      link: <Link href={row[position['Link to source']]?.v}>Link</Link>,
      authors: row[position['Author(s)']]?.v,
      translated: row[position['Translated Title']]?.v,
      research_group: row[position['Research Group(s)']]?.v,
      methodologies: row[33]?.v,
      water_body_general: row[position['Water Body_General']]?.v,
      compartments: row[position['Field Sampling_Compartment']]?.v,
      key_findings: row[49]?.v,
      research_topics: row[position['Research Topics']]?.v,
      polymer: row[position['Plastic Characterisation_Polymer']]?.v,
      year_published: row[position['Year Published']]?.v,
      geographic_scale: row[position['Geographical Scale']]?.v,
      location_studied: row[position['Location/Territory studied']]?.v,
    })
  })
  // console.log('res:', res)
  return res
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
  // @ts-ignore
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

export default function Inventory() {
  const [displayRows, setDisplayRows] = React.useState(dataFormatting());

  //So I always have an initial reference point, we'll just hang onto the order
  const [order, setOrder] = React.useState(
    new Array(columns.length).fill(null).map((n, i) => i)
  );

  const onReorderEnd = React.useCallback(
    ({ oldIndex, newIndex, collection, isKeySorting }, e) => {
      const newOrder = [...order];
      const moved = newOrder.splice(oldIndex, 1);
      newOrder.splice(newIndex, 0, moved[0]);
      setOrder(newOrder);
    },
    [order, setOrder]
  );

  const [sort, setSort] = React.useState({ column: {}, dir: 1 });

  const onHeaderClick = (column) => () => {
    const dir = column.id === sort.column.id ? sort.dir * -1 : 1;
    setSort({ column, dir });
    setDisplayRows(handleSort(displayRows, sort.column, sort.dir));
  };

  return (
    <div>
      <Header variant='h2' align='center'>
        Data & Analytics
      </Header>
      <Wave />
      <div style={{ marginTop: 80 }} />
      <Container>
        <Body variant='body1' align='center'>
          Here is a smaller version of the data table that provide you with crucial information. To access the full table, click this link below. <br />
          <Link href="https://docs.google.com/spreadsheets/d/1yRLGaQk3-9UlopftPr5e8F-X3pKkjwLlZWcTwai6_Ds/edit#gid=177125452">Link</Link> <br />
          You can drag and drop the header of the table to arrange the data the way you like.
        </Body>
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
                        style={{ minWidth: columns[colIdx].width, backgroundColor: '#6fbff5' }}
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
                {displayRows.map((row, idx) => (
                  <TableRow key={idx} hover style={{ height: 40 }}>
                    {order.map((colIdx, i) => (
                      <TableCell
                        key={columns[colIdx].id}
                        component="th"
                        scope="row"
                        style={{ height: 40, overflow: "hidden" }}
                      >
                        {row[columns[colIdx].id]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </div>
  );
}
