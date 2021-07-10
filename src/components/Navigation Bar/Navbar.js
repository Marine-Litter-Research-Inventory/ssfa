// import "components/Navbar.css";
import React, { useState } from "react";
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import NavBarMobile from "./NavBarMobile";
import NavBarNormal from "./NavBarNormal";

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

export default function Navbar() {
  const classes = useStyles()
  const [state, setState] = useState(false)

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <NavBarMobile classes={classes} state={state} setState={setState} />
          <NavBarNormal />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}