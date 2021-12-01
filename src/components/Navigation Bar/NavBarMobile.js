import React, { useState } from "react";
import { IconButton, Drawer, List, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';
import { ListItemButton } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { setRoute } from "app/slice/routeState";
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

const CustomizedItem = ({ link, text }) => {
  const dispatch = useDispatch()
  const { route } = useSelector(state => state.routeState)

  return (
    <ListItemButton
      component={RouterLink}
      alignItems="center"
      to={link}
      onClick={() => dispatch(setRoute(text))}
      style={{
        justifyContent: 'center',
        backgroundColor: route === text ? '#dceef8' : '#f8e6dc',
        fontWeight: 'bold',
      }}
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
      <Typography align="center" style={{ flexGrow: 1, fontWeight: 'bold' }}>
        Marine Plastic Research Inventory
      </Typography>
      <img
        src="https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/Dugong%201.png?raw=true"
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
              link={list.route}
            />
          ))}
        </StyledList>
      </Drawer>
    </>
  )
}