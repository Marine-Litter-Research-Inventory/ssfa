// import for d3 tools
import React, { useEffect, useState } from "react";
import { geoPath, geoMercator } from 'd3-geo';
import * as d3 from 'd3';
import data from 'data/geo.json';
import { countryNameFormatter, getQuantity } from "components/utils/utils";
import useWindowDimensions from "components/utils/useWindowDimensions";

//import for Material UI
import { IconButton, Box } from '@material-ui/core';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';

export default function MapGenerator({ isDataChanged = false }) {
  // States
  const [quantityList, setQuantityList] = useState({})
  const [windowWidth, windowHeight] = useWindowDimensions()
  const width = windowWidth
  const height = windowHeight * 0.75

  // Generating data if there is no prior values
  // Log from local storage if there is
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

  // Function for tooltip beahviours
  useEffect(() => {
    d3.select("#map").selectChildren().remove()

    const Tooltip = d3.select("#map")
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

    const mouseleave = () => {
      Tooltip
        .style("opacity", 0)
        .style("display", "none")
    }

    const mousemove = (event, countryName) => (Tooltip
      .html(
        quantityList[countryName] !== undefined ?
          `There are ${quantityList[countryName]} papers about ${countryName}` :
          'Loading'
      )
      .style("left", (parseInt(window.innerWidth - 140) > parseInt(event.clientX + 40)) ? ((event.clientX + 40) + "px") : ((event.clientX - 160) + "px"))
      .style("top", (event.clientY) + "px"))

    // Projection generation
    const projection = geoMercator()
      .fitExtent([[10, 10], [width, height]], data)
    const path = geoPath().projection(projection)

    // Zoom behaviour
    const zoomBehavior = d3.zoom()
      .scaleExtent([1, 20])
      .translateExtent([[0, 0], [width, height]])
      .on("zoom", (event) => {
        d3.select("g")
          .attr('transform', event.transform)
      })

    const svg = d3.select('#map').append("svg")
      .attr('viewBox', [0, 0, width, height])
      .attr('width', width)
      .attr('height', height)
      .call(zoomBehavior)

    const g = svg.append("g")
      .attr("fill", 'lightskyblue')

    g.selectAll("path")
      .data(data.features, feature => { return feature })
      .enter()
      .append("path")
      .attr("id", feature => feature.properties.sovereignt)
      .attr("d", path)
      .attr("stroke", "white")
      .attr("stroke-width", 0.1)

    d3.select('g')
      .on("mouseover", mouseover)
      .on("mousemove", event => {
        let countryName = countryNameFormatter(event.srcElement.id)
        mousemove(event, countryName)
      })
      .on("mouseleave", mouseleave)

    function reset() {
      svg.transition().duration(750).call(
        zoomBehavior.transform,
        d3.zoomIdentity,
        d3.zoomTransform(svg.node()).invert([width / 2, height / 2])
      );
    }

    d3.select("#re-center")
      .on("click", reset)
  }, [width, height, quantityList])

  return (
    <>
      <div style={{ border: '1px solid blue', overflow: 'auto', boxSizing: 'border-box', height: { height } }}>
        <div id="map">
        </div>
        <Box style={{ textAlign: 'center' }}>
          <IconButton
            size='small'
            color="inherit"
            id="re-center"
            style={{ margin: '0 auto', display: "flex" }}>
            <ZoomOutMapIcon />
          </IconButton>
        </Box>
      </div>
    </>
  )
}