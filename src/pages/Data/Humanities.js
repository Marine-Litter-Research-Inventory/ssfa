import React from 'react';
import { Container, Grid } from '@mui/material';
import Header from 'components/StyledComponents/Header';
import Body from 'components/StyledComponents/Body';
import HeaderRibbon from 'components/StyledComponents/HeaderRibbon';
import Dial from 'components/Dial';
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
    const type = row[position["Sci/Humanities"]]?.v.trim() ?? ""
    if (!type.includes("Science"))
      res.push({
        id: row[position["ID"]]?.v,
        research_topics: row[position['Research Topics']]?.v,
        aim: row[position["Aim of Research"]]?.v,
        link: row[position['Link to source']]?.v,
      })
  })

  return res
}

const sections = [
  "H3. Explore different research topics through the aims of research",
  "H2. Dive into research topics per country",
  "H1. Profile of humanities research",
]

const columnOrderLong = [
  columnFormatter(
    "research_topics",
    "Research topics",
    300
  ),
  columnFormatter(
    "aim",
    "Aim of Research",
    700
  ),
  columnFormatter(
    "id",
    "ID",
    100
  ),
  columnFormatter(
    "link",
    "Link",
    80
  ),
]

const H1 = formatter(
  ["H1. Profile of humanities research", "H1"],
  [
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=495677648&format=interactive",
      "100%",
      360,
    ),
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=1597143242&format=interactive",
      "100%",
      360,
    ),
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=918480549&format=interactive",
      "100%",
      360,
    ),
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=564401057&format=interactive",
      "100%",
      360,
    ),
  ]
)

const H2 = formatter(
  ["H2. Dive into research topics per country", "H2"],
  [
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=1662269792&format=interactive",
      "100%",
      400
    ),
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=560123524&format=interactive",
      "100%",
      400
    ),
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=1862835104&format=interactive",
      "100%",
      400
    ),
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=1060677156&format=interactive",
      "100%",
      400
    ),
  ]
)

const filters = [
  "Laws, administrative measures",
  "Legal or regulatory analysis",
  "Action Plans",
  "Compliance and implementation",
  "Human health/food safety",
  "Communication and coverage of marine plastic",
  "Citizen science",
  "Re-use, recycle and other mitigation measures",
  "Other market-based measures (EPR)",
  "Policy",
  "Social perceptions/Social behavioural studies",
  "Survey and monitoring/pollution status",
  "Research framework and coordination",
  "Economic loss and cost",
]

const Charts = (props) => {

  return (
    <div id={props.id}>
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

  return (
    <div>
      <Dial sections={sections} />
      <Container>
        <Header variant="h2" align="center">
          Research Humanities
        </Header>
        <Body sx={{ backgroundColor: theme => theme.palette.primary.main }}>
          Explore charts and graphs on the profile of research conducted on marine plastics in the seas of Southeast and East Asia, including research institutions, researchers and their respective areas of research.
        </Body>

        <HeaderRibbon
          id={H1.title[1]}
          text={H1.title[0]}
          variant="h6"
          color="secondary"
        />
        <Body>
          This section analyses research topics examined in humanities publication. Refer to [LINK] for a list of the research topics and further details on the metadata fields and methodology.
        </Body>
        <Charts charts={H1.charts} />

        <HeaderRibbon
          id={H2.title[1]}
          text={H2.title[0]}
          variant="h6"
          color="secondary"
        />
        <Charts charts={H2.charts} />

        <HeaderRibbon
          id="H3"
          text="H3. Explore different research topics through the aims of research"
          variant="h6"
          color="secondary"
        />
        <Body>
          This table displays the aims of research and research findings of each humanities publication (ID). It has the same functions as the main table in "CUSTOM DATA-SUBSET".
          <br /><br />
          You can search for the following relevant research topics in these humanities publications, using the "FILTERS" function:
        </Body>
        <Grid
          container
          spacing={2}
          alignItems="center"
        >
          {filters.map((filter, idx) => (
            <Grid key={idx} item xs={11} sm={6} md={4}>
              <li>{filter}</li>
            </Grid>
          ))}
        </Grid>
        <br /><br />
        <DataTable
          dataRows={dataRows}
          columnOrderLong={columnOrderLong}
        />
      </Container>
    </div >
  )
}