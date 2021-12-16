import React from 'react';
import { Container } from '@mui/material';
import Header from 'components/StyledComponents/Header';
import Body from 'components/StyledComponents/Body';
import Dial from 'components/Dial';
import HeaderRibbon from 'components/StyledComponents/HeaderRibbon';
import DataTable from "components/Table/DataTable";
import { getFromStorage } from 'components/utils/utils';

function formatter(title, charts) {
  return { title, charts }
}

function graphFormatter(link, width, height) {
  return { width, height, link }
}

function columnFormatter(field, headerName, width) {
  return { field, headerName, width }
}

function getDataRows() {
  const data = getFromStorage('data');
  const position = getFromStorage('position');
  const rows = data.data.table.rows
  let res = []

  rows.forEach(item => {
    let row = item.c
    let temp = {}
    columnOrderLong.forEach(col => {
      temp[col.field] = row[position[col.headerName]]?.v
    })
    res.push(temp)
  })

  return res
}

const columnOrderLong = [
  columnFormatter(
    "authors",
    "Author(s)",
    300
  ),
  columnFormatter(
    "first_author",
    "First Author",
    200
  ),
  columnFormatter(
    "corrensponding_author",
    "Corresponding Author",
    200
  ),
  columnFormatter(
    "research_topics",
    "Research Topics",
    200
  ),
  columnFormatter(
    "funding_information",
    "Funding Information",
    500
  ),
  columnFormatter(
    "id",
    "ID",
    80
  ),
  columnFormatter(
    "link",
    "Link to source",
    80
  ),
]

const RL1 = formatter(
  ["RL1. Research profile of the region", "RL1"],
  [
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=1477279943&format=interactive",
      540,
      360,
    ),
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=828770804&format=interactive",
      "100%",
      500,
    ),
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=1393391593&format=interactive",
      "100%",
      500
    ),
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=1484867152&format=interactive",
      "100%",
      500
    ),
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=12600553&format=interactive",
      "100%",
      500
    ),
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=977131816&format=interactive",
      "100%",
      500
    ),
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=58537761&format=interactive",
      "100%",
      700
    ),
  ]
)

const RL2 = formatter(
  ["RL2. On language of publications", "RL2"],
  [
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=1749235858&format=interactive",
      "70%",
      420
    ),
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=1576854168&format=interactive",
      "70%",
      420
    ),
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=613781400&format=interactive",
      "80%",
      500
    ),
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=169444871&format=interactive",
      "80%",
      500
    ),
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=1048511901&format=interactive",
      "80%",
      450
    ),
  ]
)

const RL3 = formatter(
  ["RL3. Overview of plastic polymers & plastic shapes found", "RL3"],
  [
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=2132834271&format=interactive",
      "100%",
      600
    ),
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=1444725583&format=interactive",
      "100%",
      600
    )
  ]
)

const RL4 = formatter(
  ["RL4. Authors & Institutions", "RL4"],
  []
)

const Charts = (props) => {

  return (
    <div>
      {props.charts.map((chart, idx) => (
        <div key={idx} style={{ margin: 20, justifyContent: 'center', display: 'flex' }}>
          <iframe
            title={`${props?.text} chart ${idx}`}
            src={chart.link}
            width={chart.width}
            height={chart.height}
            seamless
            scrolling="no"
            style={{
              border: '2px solid #9c4a55',
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default function Humanities() {
  const [dataRows] = React.useState(getDataRows())

  const sections = [
    "RL3. Overview of plastic polymers & plastic shapes found",
    "RL2. On language of publicaitons",
    "RL1. Research profile of the region",
  ]

  return (
    <div>
      <Dial sections={sections} />
      <Container>
        <Header variant="h2" align="center">
          Research Landscape
        </Header>
        <Body sx={{ backgroundColor: theme => theme.palette.primary.main }}>
          Explore charts and graphs on the profile of research conducted on marine plastics in the seas of Southeast and East Asia, including research institutions, researchers and their respective areas of research.
        </Body>

        <HeaderRibbon
          id={RL1.title[1]}
          text={RL1.title[0]}
          variant="h6"
          color="secondary"
        />
        <Charts charts={RL1.charts} />

        <HeaderRibbon
          id={RL2.title[1]}
          text={RL2.title[0]}
          variant="h6"
          color="secondary"
        />
        <Charts charts={RL2.charts} />

        <HeaderRibbon
          id={RL3.title[1]}
          text={RL3.title[0]}
          variant="h6"
          color="secondary"
        />
        <Charts charts={RL3.charts} />

        <HeaderRibbon
          id={RL4.title[1]}
          text={RL4.title[0]}
          variant="h6"
          color="secondary"
        />
        <br /><br />
        <DataTable
          dataRows={dataRows}
          columnOrderLong={columnOrderLong}
        />
      </Container>
    </div>
  )
}