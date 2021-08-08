// import React, { useEffect, useState } from "react";
import React from 'react';
import { Typography, Container } from '@material-ui/core';
import { styled } from '@material-ui/system';

import MapGenerator from 'components/MapGenerator';

const Header = styled(Typography)({
  margin: 'auto',
  boxSizing: 'border-box',
  padding: 24,
  fontWeight: 'bold',
  textAlign: 'center'
})

export default function Map({ isDataChanged = false }) {
  return (
    <>
      <Container>
        <Header variant='h2'>
          Map Prototype
        </Header>
      </Container>
      <MapGenerator isDataChanged={isDataChanged} />
    </>
  )
}