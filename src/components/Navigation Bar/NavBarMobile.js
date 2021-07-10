import React from "react";
import { IconButton, Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText, Box } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import MapIcon from '@material-ui/icons/Map';

export default function NavBarMobile(props) {
  const { classes, state, setState } = props

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