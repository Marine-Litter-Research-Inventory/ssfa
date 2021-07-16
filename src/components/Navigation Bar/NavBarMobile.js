import React, { useState } from "react";
import { IconButton, Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText, Box, InputBase } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { styled, alpha } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import MapIcon from '@material-ui/icons/Map';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: '#2196f3',
    color: 'white'
  },
  menuButton: {
    margin: 'auto',
  },
  logo: {
    color: 'white',
  },
  toolbar: {
    overflow: 'hidden',
  }
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavBarMobile() {
  const classes = useStyles()
  const [state, setState] = useState(false)

  return (
    <>
      <Hidden smUp>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setState(true)}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <div style={{ flexGrow: 1 }} />
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Drawer
          anchor='top'
          open={state}
          onClose={() => setState(false)}
        >
          <List className={classes.root}>
            <Box style={{ width: '60%', marginLeft: '30%' }}>
              <ListItem
                button
                component={RouterLink}
                alignItems="center"
                to='/'
              >
                <ListItemIcon><HomeIcon className={classes.logo} /></ListItemIcon>
                <ListItemText primary='Home' />
              </ListItem>
              <ListItem
                button
                component={RouterLink}
                to='/about'
              >
                <ListItemIcon><InfoIcon className={classes.logo} /></ListItemIcon>
                <ListItemText primary='About' />
              </ListItem>
              <ListItem
                button
                component={RouterLink}
                to='/map'
              >
                <ListItemIcon><MapIcon className={classes.logo} /></ListItemIcon>
                <ListItemText primary='Map' />
              </ListItem>
            </Box>
          </List>
        </Drawer>
      </Hidden>
    </>
  )
}