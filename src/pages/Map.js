// import React, { useEffect, useState } from "react";
import React from 'react';
import { Typography, Container } from '@material-ui/core';
import MapGenerator from 'components/MapGenerator';

export default function Map({ isDataChanged = false }) {
  return (
    <>
      <Container>
        <Typography
          variant='h4'
          component='h2'
          style={{
            margin: 'auto',
            boxSizing: 'border-box',
            padding: 24,
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          Map Prototype
        </Typography>
      </Container>
      <MapGenerator isDataChanged={isDataChanged} />
    </>
  )
}