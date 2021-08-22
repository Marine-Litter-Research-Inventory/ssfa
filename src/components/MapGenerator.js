// import for d3 tools
import React, { useEffect, useState } from "react";
import { geoPath, geoConicEqualArea } from 'd3-geo';
import * as d3 from 'd3';
// @ts-ignore
import data from 'data/geo.json';
import {
  countryNameFormatter,
  getQuantity,
  getCountryOfInstitutions
} from "components/utils/utils";
import useWindowDimensions from "components/utils/useWindowDimensions";

//import for Material UI
import { IconButton, Box } from '@material-ui/core';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';

export default function MapGenerator({ isDataChanged = false }) {
  // States
  const [paperQuantityList, setPaperQuantityList] = useState({})
  const [institutionOriginList, setInstitutionOriginList] = useState({})
  const [windowWidth, windowHeight] = useWindowDimensions()
  const width = windowWidth
  const height = windowHeight * 0.75

  // Testing

  // Generating data if there is no prior values
  // Log from local storage if there is
  useEffect(() => {
    let paperQuantity = {}
    let institutionOrigin = {}
    if (isDataChanged) {
      paperQuantity = getQuantity(JSON.parse(localStorage.getItem('data')))
      institutionOrigin = getCountryOfInstitutions(JSON.parse(localStorage.getItem('data')))
      localStorage.setItem('quantityOfPapers', JSON.stringify(paperQuantity))
      localStorage.setItem('quantityOfInstitutions', JSON.stringify(institutionOrigin))
      console.log('New quantity generation')
    } else {
      paperQuantity = JSON.parse(localStorage.getItem('quantityOfPapers'))
      institutionOrigin = JSON.parse(localStorage.getItem('quantityOfInstitutions'))
      console.log('Quantity from local storage')
      // console.log(JSON.parse(localStorage.getItem('quantityOfPapers')))
    }
    setPaperQuantityList(paperQuantity)
    setInstitutionOriginList(institutionOrigin)
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
      .style("width", "200px")

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

    const infoBox = (countryName) => {

      let beautify = ''
      for (let i = 0; i < institutionOriginList[countryName].length; i++) {
        if (i < institutionOriginList[countryName].length - 1) {
          beautify += institutionOriginList[countryName][i] + ', '
        } else {
          beautify += institutionOriginList[countryName][i] + '.'
        }
      }

      const content = `There are ${paperQuantityList[countryName]} papers about ${countryName}`
        + `<br/> The papers come from Institutions in ${beautify}`
      return content
    }

    const mousemove = (event, countryName) => (Tooltip
      .html(
        paperQuantityList[countryName] !== undefined ?
          infoBox(countryName) :
          // `There are ${paperQuantityList[countryName]} papers about ${countryName}` :
          `There are no papers about ${countryName}`
      )
      .style("right", "0px")
    )

    // Projection generation
    const projection = geoConicEqualArea()
      .rotate([0, 50])
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

    const clicked = (event, d) => {
      const [[x0, y0], [x1, y1]] = path.bounds(d);
      event.stopPropagation();
      g.transition().style("fill", null);
      d3.select(this).transition().style("fill", "aquamarine");
      svg.transition().duration(750).call(
        zoomBehavior.transform,
        d3.zoomIdentity
          .translate(width / 2, height / 2)
          .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height)))
          .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
        d3.pointer(event, svg.node())
      );
    }

    const svg = d3.select('#map').append("svg")
      // .attr('viewBox', [0, 0, width, height])
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
      .on("click", clicked)

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
  }, [width, height, paperQuantityList, institutionOriginList])

  return (
    <>
      <div style={{
        border: '1px solid blue', overflow: 'auto', boxSizing: 'border-box',
        // height: { height } 
      }}>
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