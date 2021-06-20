import React, { useEffect } from "react";
import { geoPath, geoMercator } from 'd3-geo';
import { Typography, Container } from '@material-ui/core';
import { select, zoom } from 'd3';
import data from 'data/geo.json';

const width = 360;
const height = 500;

const projection = geoMercator()
  .fitSize([2 * width, 2 * height], data)
  .center([10, -30])
const path = geoPath(projection)

export default function Map() {

  // will be called initially and on every data change
  useEffect(() => {

    const zoomBehavior = zoom()
      .scaleExtent([0.7, 20])
      .translateExtent([
        [-100, -100],
        [width + 300, height + 50]
      ])
      .on("zoom", (event) => {
        select("g").attr('transform', event.transform)
        console.log(event.transform)
      });

    select('svg').call(zoomBehavior)
  }, [])

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
            <g fill='gray'>
              {data.features.map((feature, idx) => (
                <path key={idx} id={feature.properties.sov_a3} d={path(feature)} />
              ))}
            </g>
          </svg>
        </div>
      </Container>
    </>
  )
}