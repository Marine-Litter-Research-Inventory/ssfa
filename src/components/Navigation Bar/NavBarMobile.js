import React, { useState } from "react";
import { IconButton, Drawer, List, Typography } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { styled } from '@mui/system';
import { ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


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

const StyledList = styled(List)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.primary.main,
}))

const CustomizedItem = ({ route, text, location }) => {
  return (
    <ListItemButton
      component={RouterLink}
      alignItems="center"
      to={route}
      style={{
        justifyContent: 'center',
        backgroundColor: route === location.pathname ? '#c8a464' : '#f8e6dc',
        fontWeight: 'bold',
      }}
    >
      {text}
    </ListItemButton>
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
            <CustomizedItem
              key={index}
              text={list.text}
              route={list.route}
              location={location}
            />
          ))}
        </StyledList>
      </Drawer>
    </>
  )
}