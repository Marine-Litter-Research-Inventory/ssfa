// import React, { useEffect, useState } from "react";
import React from 'react';
import { Container } from '@mui/material';

import Header from "components/StyledComponents/Header";
import Body from "components/StyledComponents/Body";

import MapGenerator from 'components/Map/MapGenerator';

import { CSVLink } from 'react-csv';
import { getFromStorage } from 'components/utils/utils';

function dataFormatting() {
  let data = getFromStorage('data')
  let position = getFromStorage('position')
  let rows = data.data.table.rows
  let exp = []
  rows.forEach(item => {
    let row = item.c
    let temp = {}
    for (const key in position) {
      temp[key] = row[position[key]]?.v
    }
    exp.push(temp)
  })
  return exp
}

export default function Map({ isDataChanged = false }) {

  const [exportedData] = React.useState(dataFormatting())

  return (
    <>
      <Container maxWidth='md'>
        <Header variant='h2' align="center">
          Map
        </Header>
        <Body component="div" variant='body1' sx={{ backgroundColor: theme => theme.palette.primary.main }}>
          This interactive map provides a visual representation of the geographic extent of the research inventory as well as some data analysis. When hovering a country/territory, the following information is provided in relation to that country/territory:
          <br /><br />
          <ol style={{ marginLeft: "2rem" }}>
            <li>Number of research publications on marine plastics.</li>
            <li>Breakdown of research publications in science, humanities or both.</li>
            <li>Further breakdown of humanities publications into: social or cutlural, legal or regulatory, economic, and policy studies.</li>
            {/* <ul style={{ listStyleType: "lower-alpha", marginLeft: "2rem" }}>
              <li>social or cultural</li>
              <li>legal or regulatory</li>
              <li>economic</li>
              <li>policy studies</li>
            </ul> */}
            <li>Top 5 research topics (later on, after data cleaning).</li>
            <li>Number of studies that are: laboratory-based or desktop-based, and relied on field sampling.</li>
            {/* <ol style={{ listStyleType: "lower-alpha", marginLeft: "2rem" }}>
              <li>laboratory-based, desktop-based</li>
              <li>relied on field sampling</li>
            </ol> */}
            <li>Number of publications that focus on micro- or macro-plastic marine debris</li>
            <li>Number of studies that focus on marine plastics from fishing gear</li>
          </ol>
          <br />
          Click&nbsp;
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
        <MapGenerator isDataChanged={isDataChanged} />
      </Container>
    </>
  )
}