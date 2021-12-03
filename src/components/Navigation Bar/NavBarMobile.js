import React, { useState } from "react";
import {
  IconButton, Drawer, List, Typography,
  Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { styled } from '@mui/system';
import { ListItemButton } from '@mui/material';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function formatter(text, route) {
  return { text, route }
}

const lists = [
  {
    text: 'Home',
    route: '/',
  },
  {
    text: 'Map',
    route: '/map',
  },
  {
    text: 'Data & Analytics',
    route: '/data',
  },
  {
    text: 'Fact Sheets',
    route: '/factsheets',
  },
  {
    text: 'Feedback',
    route: '/feedback',
  },
  {
    text: 'About',
    route: '/about',
  },
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

const Collapsible = ({ title }) => {
  const location = useLocation()

  const StyledAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
  }))

  const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }))

  return (
    <StyledAccordion disableGutters>
      <StyledAccordionSummary
        expandIcon={<ExpandMoreOutlinedIcon />}
      >
        <Typography
          sx={{ width: "100%", fontWeight: 'bold' }}
        >
          {title}
        </Typography>
      </StyledAccordionSummary>
      <AccordionDetails>
        {dataOptions.map((list, idx) => (
          <CustomizedItem
            key={idx}
            text={list.text}
            route={list.route}
            location={location}
            activeColor={"quaternary"}
            neutralColor={"secondary"}
          >
            {list.text}
          </CustomizedItem>
        ))}
      </AccordionDetails>
    </StyledAccordion>
  )
}

const StyledList = styled(List)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.primary.main,
}))

const CustomizedItem = ({ route, text, location, activeColor, neutralColor }) => {

  const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
    backgroundColor: route === location.pathname ?
      theme.palette[activeColor].main : theme.palette[neutralColor].main,
    justifyContent: 'center',
    fontWeight: 'bold',
    textAlign: 'center'
  }))

  return (
    <StyledListItemButton
      component={RouterLink}
      alignItems="center"
      to={route}
    >
      {text}
    </StyledListItemButton>
  )
}

export default function NavBarMobile() {
  const [state, setState] = useState(false)
  const location = useLocation();

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => setState(true)}
      >
        <MenuIcon />
      </IconButton>
      <div id='spacer' style={{ width: 10 }} />
      <Typography align="center" style={{ flexGrow: 1, fontWeight: 'bold' }}>
        Marine Plastic Research Inventory
      </Typography>
      <img
        src="https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/Dugong%203.png?raw=true"
        alt="Site logo"
        width={40}
        style={{
          borderRadius: '30%',
          margin: '0 auto',
        }}
      />
      <Drawer
        anchor='top'
        open={state}
        onClose={() => setState(false)}
      >
        <StyledList>
          {lists.map((list, index) => (
            list.route !== "/data" ?
              <CustomizedItem
                key={index}
                text={list.text}
                route={list.route}
                location={location}
                activeColor={"quaternary"}
                neutralColor={"primary"}
              />
              :
              <Collapsible title={list.text} />
          ))}
        </StyledList>
      </Drawer>
    </>
  )
}