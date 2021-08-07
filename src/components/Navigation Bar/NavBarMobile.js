import React, { useState } from "react";
import { IconButton, Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText, Box, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import EqualizerIcon from '@material-ui/icons/Equalizer';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import MapIcon from '@material-ui/icons/Map';

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
        <div style={{ width: 10 }} />
        <Typography
          align="center"
        >
          Marine Litter Research Inventory
        </Typography>
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
              <ListItem
                button
                component={RouterLink}
                to='/infographic'
              >
                <ListItemIcon><EqualizerIcon className={classes.logo} /></ListItemIcon>
                <ListItemText primary='Infographic' />
              </ListItem>
            </Box>
          </List>
        </Drawer>
      </Hidden>
    </>
  )
}