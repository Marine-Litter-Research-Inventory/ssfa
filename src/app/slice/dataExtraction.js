import { createSlice } from "@reduxjs/toolkit";
import { getFromStorage, textToJson } from 'components/utils/utils';

function dataFormatting() {
  let data = textToJson(getFromStorage('data'))
  let position = textToJson(getFromStorage('position'))
  let rows = data.data.table.rows
  let res = []
  let exp = []
  rows.forEach(item => {
    let row = item.c
    let temp = {}
    for (const key in position) {
      temp[key] = row[position[key]]?.v
    }
    exp.push(temp)
  })

  rows.forEach(item => {
    let row = item.c
    res.push({
      title: row[position['Title']]?.v,
      translated: row[position['Translated Title']]?.v,
      authors: row[position['Author(s)']]?.v,
      research_topics: row[position['Research Topics']]?.v,
      aim: row[position["Aim of Research"]]?.v,
      coastal: row[position["Coastal or Offshore"]]?.v,
      location_studied: row[position['Location/Territory studied']]?.v,
      water_body_general: row[position['Water Body_General']]?.v,
      key_findings: row[position["Key Findings"]]?.v,
      methodologies: row[position['Methodologies Used ']]?.v,
      geographic_scale: row[position['Geographical Scale']]?.v,
      compartments: row[position['Field Sampling_Compartment']]?.v,
      polymer: row[position['Plastic Characterisation_Polymer']]?.v,
      year_published: row[position['Year Published']]?.v,
      research_group: row[position['Research Group(s)']]?.v,
      citation: row[position["Citation"]]?.v,
      link: row[position['Link to source']]?.v,
    })
  })
  return [res, exp]
}

const initColumnsHeader = [
  { text: 'Title', id: 'title', align: 'left' },
  { text: 'Translated titles', id: 'translated', align: 'left' },
  { text: 'Authors', id: 'authors', align: 'left' },
  { text: 'Research Topics', id: 'research_topics', align: 'left', width: 350 },
  { text: 'Aim of Research', id: 'aim', align: 'left', width: 350 },
  { text: 'Coastal or Offshore', id: 'coastal', align: 'left' },
  { text: 'Location/Territory studied', id: 'location_studied', align: 'left' },
  { text: 'Water Body_General', id: 'water_body_general', align: 'left' },
  { text: 'Key Findings', id: 'key_findings', align: 'left', width: 450 },
  { text: 'Methodologies Used', id: 'methodologies', align: 'left' },
  { text: 'Geographic scale', id: 'geographic_scale', align: 'left' },
  { text: 'Compartments', id: 'compartments', align: 'left' },
  { text: 'Plastic characterisation/polymer', id: 'polymer', align: 'left' },
  { text: 'Year Published', id: 'year_published', align: 'left' },
  { text: 'Research Group', id: 'research_group', align: 'left', width: 250 },
  { text: 'Citation', id: 'citation', align: 'left' },
  { text: 'Link', id: 'link', align: 'left' },
]

const [res, exp] = dataFormatting()
const initColumnsText = initColumnsHeader.map(col => col.text)

const dataExtractionSlice = createSlice({
  name: "dataExtraction",
  initialState: {
    columnHeaders: initColumnsHeader,
    columnOrder: initColumnsHeader,
    columnTitles: initColumnsText,
    activeColumns: initColumnsText,
    data: res,
    databaseLink: "https://docs.google.com/spreadsheets/d/1yRLGaQk3-9UlopftPr5e8F-X3pKkjwLlZWcTwai6_Ds/edit#gid=177125452",
    dataRows: [],
    exportedData: exp,
    searchDisplay: "",
    searchKeywords: [""],

  },
  reducers: {
    setSearchDisplay: (state, action) => {
      state.searchDisplay = action.payload;
    },
    setSearchKeywords: (state, action) => {
      state.searchKeywords = action.payload.split(' ');
    },
    setDataRows: (state, action) => {
      state.dataRows = action.payload
    },
    setActiveColumns: (state, action) => {
      state.activeColumns = action.payload
    },
    setColumnOrder: (state, action) => {
      state.columnOrder = action.payload
    },
  }
})

export const {
  setSearchDisplay,
  setSearchKeywords,
  setDataRows,
  setActiveColumns,
  setColumnOrder,
} = dataExtractionSlice.actions
export default dataExtractionSlice.reducer;