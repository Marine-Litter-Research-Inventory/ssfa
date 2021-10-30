import React, { useState } from "react";
import { IconButton, Drawer, List, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';
import { ListItemButton } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';


const lists = [
  {
    text: 'Home',
    route: '/',
  },
  {
    text: 'About',
    route: '/about',
  },
  {
    text: 'Fact Sheets',
    route: '/fact',
  },
  {
    text: 'Map',
    route: '/map',
  },
  {
    text: 'Data & Analytics',
    route: '/data',
  },
]

const StyledList = styled(List)({
  width: '100%',
  backgroundColor: '#2196f3',
  color: 'white',
})

const CustomizedItem = ({ route, text }) => {
  return (
    <ListItemButton
      component={RouterLink}
      alignItems="center"
      to={route}
      sx={{ justifyContent: 'center' }}
    >
      {text}
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
            />
          ))}
        </StyledList>
      </Drawer>
    </>
  )
}