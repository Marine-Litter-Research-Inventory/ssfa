import React, { useEffect, useState } from "react";
import { geoPath, geoMercator } from 'd3-geo';
import { Typography, Container, makeStyles } from '@material-ui/core';
import { select, zoom } from 'd3';
import data from 'data/geo.json';

const width = 360;
const height = 500;

const projection = geoMercator()
  .fitSize([width, height], data)
const path = geoPath(projection)

export default function Map() {
  const [currentZoomState, setCurrentZoomState] = useState();

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select('svg')
    const g = select('g')
    // zoom
    const zoomBehavior = zoom()
      .scaleExtent([2, 20])
      .translateExtent([
        [-10, -10],
        [width, height]
      ])
      .on("zoom", (event) => {
        g.attr('transform', event.transform)
        setCurrentZoomState(event.transform)
        console.log(event.transform)
      });

    svg.call(zoomBehavior)

  }, [currentZoomState])

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