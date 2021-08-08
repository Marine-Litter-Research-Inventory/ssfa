import React, { useState } from "react";
import { IconButton, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@material-ui/system';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import MapIcon from '@material-ui/icons/Map';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const lists = [
  {
    text: 'Home',
    route: '/',
    icon: <HomeIcon sx={{ color: 'white' }} />
  },
  {
    text: 'About',
    route: '/about',
    icon: <InfoIcon sx={{ color: 'white' }} />
  },
  {
    text: 'Map',
    route: '/map',
    icon: <MapIcon sx={{ color: 'white' }} />
  },
  {
    text: 'Infographic',
    route: '/infographic',
    icon: <EqualizerIcon sx={{ color: 'white' }} />
  },
]

const StyledList = styled(List)({
  width: '100%',
  backgroundColor: '#2196f3',
  color: 'white',
})

const CustomizedItem = ({ icon, route, text }) => {
  return (
    <ListItemButton
      component={RouterLink}
      alignItems="center"
      to={route}
    >
      <ListItemIcon sx={{ marginLeft: 95 / 8 }} >{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  )
}

export default function NavBarMobile() {
  const [state, setState] = useState(false)

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
      <Typography align="center" >
        Marine Litter Research Inventory
      </Typography>
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
              icon={list.icon}
            />
          ))}
        </StyledList>
      </Drawer>
    </>
  )
}