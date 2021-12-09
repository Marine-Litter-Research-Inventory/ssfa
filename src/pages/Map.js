// import React, { useEffect, useState } from "react";
import React from 'react';
import { Container } from '@mui/material';

import Header from "components/StyledComponents/Header";
import Body from "components/StyledComponents/Body";

import MapGenerator from 'components/MapGenerator';
import { CSVLink } from 'react-csv';
import { getFromStorage } from 'components/utils/utils';

const exportedData = getFromStorage('exportedData')

export default function Map({ isDataChanged = false }) {
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
            <li>Number of research publications on marine plastics</li>
            <li>Breakdown of research publications in science, humanities or both</li>
            <li>Further breakdown of humanities publications into</li>
            <ul style={{ listStyleType: "lower-alpha", marginLeft: "2rem" }}>
              <li>social or cultural</li>
              <li>legal or regulatory</li>
              <li>economic</li>
              <li>policy studies</li>
            </ul>
            <li>Top 5 research topics (later on, after data cleaning);</li>
            <li>Number of studies that are:</li>
            <ol style={{ listStyleType: "lower-alpha", marginLeft: "2rem" }}>
              <li>laboratory-based, desktop-based</li>
              <li>relied on field sampling</li>
            </ol>
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