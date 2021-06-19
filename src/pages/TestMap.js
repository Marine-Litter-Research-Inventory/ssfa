import React, { useEffect, useState } from "react";
import { geoPath, geoMercator } from 'd3-geo';
import { Typography, Container, makeStyles } from '@material-ui/core';
import { select, zoom } from 'd3';
import data from 'data/geo.json';

const width = 360;
const height = 500;

const projection = geoMercator()
  .fitSize([width, height], data)
const pathGenerator = geoPath().projection(projection)

export default function Map() {
  const svg = select('svg')
  const g = svg.append('g')

  svg.call(zoom().on('zoom', (event) => {
    g.attr("transform", event.transform)
  }))

  g.selectAll('path').data(data.features)
    .enter().append('path')
    .attr('d', pathGenerator)

  return (
    <>
      <Container>
        <Typography
          variant='h4'
          component='h2'
          style={{
            margin: 'auto',
            maxwidth: 900,
            boxSizing: 'border-box',
            padding: 24,
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          Map Prototype
        </Typography>
        <div style={{ border: '1px solid blue', overflow: 'auto', boxSizing: 'border-box', height: { height } }}>
          <svg
            height={height}
            width={width}
            viewBox="0 0 400 450"
          >

          </svg>
        </div>
      </Container>
    </>
  )
}