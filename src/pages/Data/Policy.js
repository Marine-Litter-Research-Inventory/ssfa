import React from 'react';
import { Container } from '@mui/material';
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
    if (!type.includes("Humanities")) {
      let temp = {}
      columnOrderLong.forEach(col => {
        temp[col.field] = row[position[col.headerName]]?.v
      })
      res.push(temp)
    }
  })

  return res
}

const sections = [
  "PM3. Sampling and units recording",
  "PM2. Adoption of GESAMP Guidelines",
  "PM1. Sources of marine plastics",
]

const columnOrderLong = [
  columnFormatter(
    "field_sampling_compartment",
    "Field Sampling_Compartment",
    300
  ),
  columnFormatter(
    "macro_mean_abundance_count",
    "Macro_Mean Abundance_Count",
    300
  ),
  columnFormatter(
    "macro_mean_abundance_weight",
    "Macro_Mean Abundance_Weight",
    300
  ),
  columnFormatter(
    "water_mean_abundance_count",
    "Water_Mean Abundance_Count",
    300
  ),
  columnFormatter(
    "water_mean_abundance_weight",
    "Water_Mean Abundance_Weight",
    300
  ),
  columnFormatter(
    "shoreline_sediment_mean_abundance_count",
    "Shoreline Sediment_Mean Abundance_Count",
    300
  ),
  columnFormatter(
    "shoreline_sediment_mean_abundance_weight",
    "Shoreline Sediment_Mean Abundance_Weight",
    300
  ),
  columnFormatter(
    "seabed_sediment_mean_abundance_count",
    "Seabed Sediment_Mean Abundance_Count",
    300
  ),
  columnFormatter(
    "seabed_sediment_mean_abundance_weight",
    "Seabed Sediment_Mean Abundance_Weight",
    300
  ),
  columnFormatter(
    "mangrove_mean_abundance_count",
    "Mangrove_Mean Abundance_Count",
    300
  ),
  columnFormatter(
    "mangrove_mean_abundance_weight",
    "Mangrove_Mean Abundance_Weight",
    300
  ),
  columnFormatter(
    "biiota_mean_abundance_count",
    "Biota_Mean Abundance_Count",
    300
  ),
  columnFormatter(
    "biota_mean_abundance_weight",
    "Biota_Mean Abundance_Weight",
    300
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

const PM1 = formatter(
  ["PM1. Sources of marine plastics", "PM1"],
  [
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=1748871634&format=interactive",
      "100%",
      400,
    ),
  ]
)

const PM2 = formatter(
  ["PM2. Adoption of GESAMP Guidelines", "PM2"],
  [
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=1228393788&format=interactive",
      "100%",
      400
    ),
  ]
)

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

export default function Policy() {

  const [dataRows] = React.useState(getDataRows())

  return (
    <div>
      <Dial sections={sections} />
      <Container>
        <Header variant="h2" align="center">
          Information for Policy-Making
        </Header>
        <Body sx={{ backgroundColor: theme => theme.palette.primary.main }}>
          Explore charts and graphs on insight that may be gained from the data captured in RRI 2.0 for policy-making purposes. This section brings together findings from publications in science and humanities, including from the graphs above. Refer to the Factsheet on Marine Plastic Research 101 for Policy-Makers for further guidance on the use of this data.
        </Body>

        <HeaderRibbon
          id={PM1.title[1]}
          text={PM1.title[0]}
          variant="h6"
          color="secondary"
        />
        <Charts charts={PM1.charts} />

        <HeaderRibbon
          id={PM2.title[1]}
          text={PM2.title[0]}
          variant="h6"
          color="secondary"
        />
        <Charts charts={PM2.charts} />

        <HeaderRibbon
          id="PM3"
          text="PM3. Sampling and units recording"
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