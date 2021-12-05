// import React, { useEffect, useState } from "react";
import React from 'react';
import { Typography, Container } from '@mui/material';
import { styled } from '@mui/system';

import MapGenerator from 'components/MapGenerator';

const Header = styled(Typography)({
  fontWeight: 'bold',
  padding: `60px 20px`,
  boxSizing: 'border-box',
  textAlign: 'center',
})

const Body = styled(Typography)(({ theme }) => ({
  margin: 'auto',
  boxSizing: 'border-box',
  padding: 20,
  marginBottom: 30,
  backgroundColor: theme.palette.primary.main,
}))

export default function Map({ isDataChanged = false }) {
  return (
    <>
      <Container maxWidth='md'>
        <Header variant='h2' align="center">
          Map
        </Header>
        <Body variant='body1'>
          Discover more about the research on marine plastic conducted in Southeast and East Asia, through our interactive map.
          <br /><br />
          For more information about how we define marine plastic research and how the data is captured, analysed, and represented, please browse our Methodology and Ontology.
          <br /><br />
          The data represented in the research inventory is constantly evolving. Your participation is essential to make this resource more accurate and comprehensive. You can do that by providing feedback on existing data, or any other queries or suggestions.
        </Body>
        <MapGenerator isDataChanged={isDataChanged} />
      </Container>
    </>
  )
}