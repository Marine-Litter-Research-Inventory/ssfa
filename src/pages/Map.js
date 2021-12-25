// import React, { useEffect, useState } from "react";
import React from 'react';
import { Container, Link } from '@mui/material';

import Header from "components/StyledComponents/Header";
import Body from "components/StyledComponents/Body";

import MapGenerator from 'components/Map/MapGenerator';

export default function Map({ isDataChanged = false }) {

  return (
    <>
      <Container maxWidth='md'>
        <Header variant='h2' align="center">
          Map
        </Header>
        <Body component="div" variant='body1' sx={{ backgroundColor: theme => theme.palette.primary.main }}>
          This interactive map provides a visual representation of the geographic extent of the research inventory as well as an extract of data analysis. When clicking on a country/territory, the following information is provided in relation to that country/territory:
          <br /><br />
          First, the total number of publications in RRI 2.0; Second, the number of publications on sub-topics is included: Science-only, Humanities-only, Both (i.e. Science and Humanities), Laboratory-based, Desktop-based, Field sampling, Microplastic, Macroplastic, Fishing gear, Legal/Regulatory, Social/Cultural, Economic/Management, Policy Study.
          <br /><br />
          The inventory RRI 2.0 can be accessed&nbsp;
          <Link
            color="secondary"
            href="https://docs.google.com/spreadsheets/d/1yRLGaQk3-9UlopftPr5e8F-X3pKkjwLlZWcTwai6_Ds/edit?usp=sharing"
            target="_blank"
            rel="noreferrer noopener">
            here
          </Link>.
        </Body>
        <MapGenerator />
      </Container>
    </>
  )
}