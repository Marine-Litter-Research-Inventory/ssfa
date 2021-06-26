import React, { useEffect, useState } from "react";
import { geoPath, geoMercator } from 'd3-geo';
import { Typography, Container } from '@material-ui/core';
import { select, zoom } from 'd3';
import data from 'data/geo.json';
import { countryNameFormatter, getQuantity } from "components/utils/utils";
import useWindowDimensions from "components/utils/useWindowDimensions";

// Declared variables


// Functions


// Component start
export default function Map({ isDataChanged = false }) {
  // States
  const [quantityList, setQuantityList] = useState({})
  const [windowWidth, windowHeight] = useWindowDimensions()
  const width = windowWidth
  const height = windowHeight * 0.75

  // Function for tooltip beahviours
  const Tooltip = select("#map")
    .append("div")
    .style("opacity", 0)
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px")
    .style("position", "absolute")
    .style("width", "120px")

  const mouseover = () => {
    Tooltip
      .style("display", "block")
      .style("opacity", 1)
  }

  const mousemove = (event, countryName) => (Tooltip
    .html(
      quantityList[countryName] !== undefined ?
        `There are ${quantityList[countryName]} papers about ${countryName}` :
        'Loading'
    )
    .style("left", (parseInt(window.innerWidth - 140) > parseInt(event.clientX + 40)) ? ((event.clientX + 40) + "px") : ((event.clientX - 160) + "px"))
    .style("top", (event.clientY) + "px"))

  const mouseleave = () => {
    Tooltip
      .style("opacity", 0)
      .style("display", "none")
  }

  // Fetching data
  useEffect(() => {
    let list = {}
    if (isDataChanged) {
      list = getQuantity(JSON.parse(localStorage.getItem('data')))
      localStorage.setItem('quantityOfPapers', JSON.stringify(list))
      console.log('New quantity generation')
      // console.log(JSON.parse(localStorage.getItem('quantityOfPapers')))
    } else {
      list = JSON.parse(localStorage.getItem('quantityOfPapers'))
      console.log('Quanity from local storage')
      // console.log(JSON.parse(localStorage.getItem('quantityOfPapers')))
    }
    setQuantityList(list)
  }, [isDataChanged])

  // Projection generation
  const projection = geoMercator()
    .fitExtent([[10, 10], [width, height]], data)
  const path = geoPath().projection(projection)


  // Zoom behaviour
  const zoomBehavior = zoom()
    .scaleExtent([1, 20])
    .translateExtent([
      [0, 0],
      [width, height]
    ])
    .on("zoom", (event) => {
      select("g")
        .attr('transform', event.transform)
    })

  select('svg')
    .call(zoomBehavior)

  // Tooltip behaviour
  select('g')
    .on("mouseover", mouseover)
    .on("mousemove", event => {
      let countryName = countryNameFormatter(event.srcElement.id)
      mousemove(event, countryName)
    })
    .on("mouseleave", mouseleave)

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
      </Container>
      <div id="map" style={{ border: '1px solid blue', overflow: 'auto', boxSizing: 'border-box', height: { height } }}>
        <svg
          height={height}
          width={width}
          viewBox={`0 0 ${width} ${height}`}
        >
          <g fill='lightskyblue'>
            {data.features.map((feature, idx) => (
              <path
                key={idx}
                id={feature.properties.sovereignt}
                d={path(feature)}
                stroke="white"
                strokeWidth={0.1}
              />
            ))}
          </g>
        </svg>
      </div>
    </>
  )
}