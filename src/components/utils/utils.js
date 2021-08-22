import _ from "lodash";

/**
 * Convert from string to json
 * @param {String} text Input string
 * @returns {Object} Json object
 */
export function textToJson(text) {
  return JSON.parse(text)
}

/**
 * Convert from string to json
 * @param {Object} json Input object
 * @returns {String} string
 */
export function jsonToText(json) {
  return JSON.stringify(json)
}

/**
 * Get an item from local storage
 * @param {String} name name of the local storage
 * @returns {any} value of the local storage 
 */
export function getFromStorage(name) {
  return localStorage.getItem(name)
}

/**
 * Get an item from local storage
 * @param {String} name name of the local storage
 * @param {any} data data to be store in the local storage
 * @returns {any} value of the local storage 
 */
export function setToStorage(name, data) {
  return localStorage.setItem(name, data)
}

/**
 * Compare two json object together using lodash
 * @param {Object} a json object 1
 * @param {Object} b json object 2
 * @returns {Boolean} true if the json object is equal
 */
export function compareObject(a, b) {
  return _.isEqual(a, b)
}


/**
 * Set the column name as key and the index as value
 * and then save to local storage under "position"
 * can be used to locate position of data in rows.
 */
export function setColumnValue() {
  const data = textToJson(getFromStorage('data'))
  let columns = {}
  data.data.table.cols.forEach((col, idx) => {
    columns[col.label] = idx
  })
  // console.log('columns:', columns)
  setToStorage('position', jsonToText(columns))
}

/**
 * Take in sovereignt name and retun official long name
 * @param {String} name Name of the sovereignt
 * @returns {String} The official name of the country 
 */
export function countryNameFormatter(name) {
  let countryName = ''
  if (name === "Brunei")
    countryName = "Brunei Darussalam"
  else if (name === "South Korea")
    countryName = "Republic of Korea"
  else if (name === "North Korea")
    countryName = "Democratic People's Republic of Korea"
  else
    countryName = name
  // console.log('countryName:', countryName)
  return countryName
}

/**
 * Return an object of {country: quantity of research, ...} paper
 * @param {Object} start the starting year
 * @param {Object} end the ending year 
 * @returns {Object} list of paper per country during the specified duration
 */
export function getQuantity(start, end) {
  const data = textToJson(getFromStorage('data'))
  const position = textToJson(getFromStorage('position'))
  let duration = []
  for (let i = start; i <= end; i++)
    duration.push(i)

  let list = {
    "Indonesia": 0,
    "Malaysia": 0,
    "Myanmar": 0,
    "Philippines": 0,
    "Republic of Korea": 0,
    "China": 0,
    "Brunei Darussalam": 0,
    "Cambodia": 0,
    "Japan": 0,
    "Laos": 0,
    "Singapore": 0,
    "Thailand": 0,
    "Vietnam": 0,
    "Taiwan": 0,
    "Vietnam and ASEAN": 0,
  }

  data.data.table.rows.forEach((row, idx) => {
    if (row.c[position["Year Published"]] !== null && row.c[position["Location/Territory studied"]] !== null) {
      if (duration.includes(row.c[position["Year Published"]].v)) {
        list[row.c[position["Location/Territory studied"]].v.trim()] += 1
      }
    }
  })

  console.log('list:', list)
  return list
}

/**
 * 
 *
*/
export function getCountryOfInstitutions(data) {
  console.log("🚀 ~ file: utils.js ~ line 38 ~ getCountryOfInstitutions ~ data", data)
  let res = {}

  let countryStudiedArr = data.data.columns.countrystudied
  console.log("🚀 ~ file: utils.js ~ line 41 ~ getCountryOfInstitutions ~ countryStudiedArr", countryStudiedArr)

  let countryOfInstitutionArr = data.data.columns.countryofinstitution
  console.log("🚀 ~ file: utils.js ~ line 43 ~ getCountryOfInstitutions ~ countryOfInstitutionArr", countryOfInstitutionArr)

  for (let i = 0; i < data.data.rows.length; i++) {
    res[countryStudiedArr[i]] = res[countryStudiedArr[i]] || []
    if (!(res[countryStudiedArr[i]].includes(countryOfInstitutionArr[i])))
      res[countryStudiedArr[i]].push(countryOfInstitutionArr[i])
  }

  console.log("🚀 ~ file: utils.js ~ line 55 ~ getCountryOfInstitutions ~ res", res)
  return res
}
