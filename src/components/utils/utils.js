

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

  console.log("🚀 ~ file: utils.js ~ line 21 ~ countryNameFormatter ~ countryName", countryName)
  return countryName
}

/**
 * Return an object of {country: quantity of research, ...} paper
 * @param {Object} data 
 * @returns {Object}
 */
export function getQuantity(data) {
  let list = {}
  data.data.columns.countrystudied.forEach(country => {
    list[country] = list[country] + 1 || 1
  })
  console.log("🚀 ~ file: utils.js ~ line 35 ~ getQuantity ~ list", list)
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
