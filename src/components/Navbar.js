// import "components/Navbar.css";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Drawer, Hidden, Button, Typography, List, ListItem, ListItemIcon, ListItemText, Box } from '@material-ui/core';
import React, { useState } from "react";
import { Link as RouterLink } from 'react-router-dom';

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
  // toolbar: {
  //   backgroundImage: ``,
  //   backgroundPosition: '20px',
  //   backgroundSize: 'contain',
  //   backgroundRepeat: 'no-repeat',
  // }
}));

export default function Navbar() {
  const classes = useStyles()
  const [state, setState] = useState(false)

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
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
          <Hidden only='xs'>
            <Typography
              variant='body1'
              component='h1'
              color='inherit'
              // align='center'
              style={{ flexGrow: 1 }}
            >
              Marine Plastic Research <br />in Sotheast and East Asia
            </Typography>
            <Button
              color="inherit"
              component={RouterLink}
              to='/'
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to='/about'
            >
              About
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to='/map'
            >
              Map
            </Button>
          </Hidden>

        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}