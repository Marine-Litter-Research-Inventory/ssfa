import React from 'react';
import { Container, Grid } from '@mui/material';
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

const filters1 = [
  "Survey and monitoring/pollution status",
  " ",
  "Contribution from rivers",
  "Contribution from fisheries/ALDFG",
  "Discharge from offshore infrastructures and shipping",
  "Port reception facilities",
  "Fibreglass-reinforced plastic vessels",
  "Hull scraping and marine coating",
  "Land-based/upstream research/waste management",
  "Differentiation between plastic sources",
  "Movement of plastics in water bodies",
  "Fragmentation and degradation",
  "Accumulation zones and hotspots",
  " ",
  "Ingestion of plastic in the wild",
  "Branchial uptake of plastic in the wild",
  "Entanglement by plastic in the wild",
  "Microbial assemblages",
  "Experimental studies of physicochemical impacts",
  "Impact on endangered species",
]

const filters2 = [
  "Trophic transfer of plastic",
  "Marine plastics as pathways for introduction of alien/non-native/invasive species",
  " ",
  "Organic and inorganic pollutants from marine plastic debris",
  "Adsorption-desorption of chemicals/pollutants",
  "Plastics as transport vector/medium",
  " ",
  "Guidelines, standards and manuals for survey, monitoring and assessment",
  "Data comparability and standardization",
  " ",
  "Methodologies and technologies for research on marine macroplastic",
  "Methodologies and technologies for research on marine microplastic",
  "New' or 'emerging' technologies for marine plastic",
  "Methodologies and technologies for marine plastic removal and clean-up",
  "Research framework and coordination",
  "Plastic data repositories",
  "Citizen science",
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
        <Body>
          This table displays information relating to authors, research institutions, funding information and research topics  of each publication. The table allows for exploration of the information using the filter and sort functions, at the top left corner. The webpage link and inventory ID of each article can be found in the last column, which can be used as a reference number to look for the article in the main inventory.
          <br /><br />
          Using the filter function, you can search for any of the following research topics:
        </Body>
        <Grid
          container
          spacing={2}
          alignItems="center"
        // justifyContent="center"
        >
          <Grid item xs={11} sm={6}>
            {filters1.map((filter, idx) => (
              filter !== " " ?
                <li style={{ margin: "0.5rem 0" }} key={idx}>{filter}</li>
                : <br />
            ))}
          </Grid>
          <Grid item xs={11} sm={6}>
            {filters2.map((filter, idx) => (
              filter !== " " ?
                <li style={{ margin: "0.5rem 0" }} key={idx}>{filter}</li>
                : <br />))}
          </Grid>
        </Grid>
        <br /><br />
        <DataTable
          dataRows={dataRows}
          columnOrderLong={columnOrderLong}
        />
      </Container>
    </div>
  )
}