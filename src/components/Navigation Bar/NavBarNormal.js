import React from "react";
import { Hidden, Button, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

export default function NavBarNormal() {
  return (
    <>
      <Hidden only='xs'>
        <Typography
          variant='body1'
          component='h1'
          color='inherit'
          style={{ flexGrow: 1 }}
        >
          Marine Litter Research Inventory <br />in East Asian Seas
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
    </>
  )
}