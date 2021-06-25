import React, { useEffect, useState } from "react";
import { geoPath, geoMercator } from 'd3-geo';
import { Typography, Container } from '@material-ui/core';
import { select, zoom } from 'd3';
import data from 'data/geo.json';
import { countryNameFormatter } from "components/utils/utils";
import useWindowDimensions from "components/utils/useWindowDimensions";

// Declared variables
const SHEET_ID = process.env.REACT_APP_SHEET_ID //Google sheet id
const countries = ["Brunei Darussalam", "Indonesia", "Cambodia", "Laos", "Myanmar", "Malaysia", "Philippines", "Singapore", "Thailand", "Vietnam", "China", "Japan", "Republic of Korea", "Democratic People's Republic of Korea", "Taiwan"] //List of country name

// Functions


// Component start
export default function Map() {
  // States
  const [quantityList, setQuantityList] = useState({})
  const [windowWidth, windowHeight] = useWindowDimensions()
  const width = windowWidth
  const height = windowHeight * 0.7

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
    let q = {}
    countries.forEach(async (country) => {
      const res = await fetch('https://gsx2json.com/api?id=' + SHEET_ID + '&sheet=2&columns=false&countrystudied=' + country)
      const data = await res.json()
      q[country] = data.rows.length
    })
    setQuantityList(q)
  }, [])

  // Projection generation
  const path = geoPath(
    geoMercator()
      // .fitSize([width, height], data)
      .fitHeight(height, data)
      .center([0, 0])
  )

  // Zoom behaviour
  const zoomBehavior = zoom()
    .scaleExtent([1, 20])
    .translateExtent([
      [-50, -10],
      [width, height]
    ])
    .on("zoom", (event) => {
      select("g").attr('transform', event.transform)
    });

  select('svg').call(zoomBehavior)

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
          viewBox="0 0 400 450"
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