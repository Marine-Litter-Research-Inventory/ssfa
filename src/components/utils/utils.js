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