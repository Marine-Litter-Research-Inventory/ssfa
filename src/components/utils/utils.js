

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
  return list
}