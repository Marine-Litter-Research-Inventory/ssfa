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
  const location = textToJson(getFromStorage('location'))
  let duration = []
  for (let i = start; i <= end; i++)
    duration.push(i)

  let list = {}
  location.forEach(loc => {
    list[loc] = 0
  })

  data.data.table.rows.forEach((row, idx) => {
    if (row.c[position["Year Published"]] !== null && row.c[position["Location/Territory studied"]] !== null) {
      if (duration.includes(row.c[position["Year Published"]].v)) {
        let string = row.c[position["Location/Territory studied"]].v.split(';')
        string.forEach(country => {
          list[country.trim()] += 1
        })
      }
    }
  })

  // console.log('list:', list)
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

export function getAuthorCount(country) {
  const data = textToJson(getFromStorage('data'))
  const position = textToJson(getFromStorage('position'))
  const result = {}

  data.data.table.rows.forEach(row => {
    if (row.c[position["Location/Territory studied"]] !== null && row.c[position["Author(s)"]] !== null)
      if (row.c[position["Location/Territory studied"]].v.trim() === country) {
        let list = row.c[position["Author(s)"]].v.trim().split(";")
        list.forEach(raw_author => {
          let author = raw_author.trim().substring(1, raw_author.length - 2)
          if (isNaN(result[author]))
            result[author] = 1
          else
            result[author] += 1
        })
      }
  })

  let out = []
  _.forEach(result, (value, key) => {
    out.push({ value: value, text: key })
  })
  out = _.sortBy(out, (item) => { return item.value }).reverse()

  return out
}

export function setLocationStudied() {
  const data = textToJson(getFromStorage('data'))
  const position = textToJson(getFromStorage('position'))
  let location = []
  data.data.table.rows.forEach(row => {
    if (row.c[position["Location/Territory studied"]] !== null) {
      let countries = row.c[position["Location/Territory studied"]].v.split(';')
      countries.forEach(country => {
        if (!location.includes(country.trim()))
          location.push(country.trim())
      })
    }
  })
  setToStorage('location', jsonToText(location))
}