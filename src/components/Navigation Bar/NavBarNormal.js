import React from "react";
import {
  Button, Typography,
  Popover,
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

function formatter(text, route) {
  return { text, route }
}

const lists = [
  formatter("Home", "/"),
  formatter("Map", "/map"),
  formatter("Data and Analytics", "/data"),
  formatter("Fact Sheets", "/factsheets"),
  formatter("Feedback", "/feedback"),
  formatter("About", "/about"),
]

const dataOptions = [
  formatter(
    "Custom Data-Subset",
    "/data/custom-data-subset"
  ),
  formatter(
    "Research Landscape",
    "/data/research-landscape"
  ),
  formatter(
    "Methodology and Ontology",
    "/data/methodology-and-ontology"
  ),
  formatter(
    "Scientific Research",
    "/data/scientific-research"
  ),
  formatter(
    "Policy, legal, socio-economic and cultural research",
    "/data/policy-legal-socio-economic-and-cultural-research"
  ),
  formatter(
    "Information for policy-making",
    "/data/information-for-policy-making"
  ),
]

const DataExtends = ({ anchorEl, open, onClose }) => {
  const location = useLocation()

  return (
    <Popover
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      {dataOptions.map((list, idx) => (
        <Button
          key={idx}
          color="quaternary"
          component={RouterLink}
          to={list.route}
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            display: "block",
            color: list.route === location.pathname ? "white" : "black",
          }}
          variant={list.route === location.pathname ? "contained" : "text"}
        >
          {list.text}
        </Button>
      ))}
    </Popover>
  )
}

export default function NavBarNormal() {
  const location = useLocation()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  return (
    <>
      <img
        src="https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/Dugong%203.png?raw=true"
        alt="Site logo"
        width={50}
        style={{
          borderRadius: '30%',
          marginRight: '1rem',
        }}
      />
      <Typography
        variant='body1'
        component='h1'
        color='inherit'
        style={{
          flexGrow: 1,
          fontWeight: 'bold',
        }}
      >
        Marine Plastic
        <br />
        Research Inventory
      </Typography>
      {lists.map((list, idx) => (
        list.route === "/data" ?
          <React.Fragment key={idx}>
            <Button
              key={idx}
              color="quaternary"
              component={RouterLink}
              to={list.route}
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: list.route === location.pathname ? "white" : "black",
              }}
              variant={list.route === location.pathname ? "contained" : "text"}
              onClick={list.route === "/data" ? handleClick : null}
            >
              {list.text}
            </Button>
            <DataExtends anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)} />
          </React.Fragment>
          :
          <Button
            key={idx}
            color="quaternary"
            component={RouterLink}
            to={list.route}
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: list.route === location.pathname ? "white" : "black",
            }}
            variant={list.route === location.pathname ? "contained" : "text"}
            onClick={list.route === "/data" ? handleClick : null}
          >
            {list.text}
          </Button>
      ))
      }
    </>
  )
}