// import "components/Navbar.css";
import React from "react";
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import NavBarMobile from "./NavBarMobile";
import NavBarNormal from "./NavBarNormal";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    overflow: 'hidden',
  }
}));

export default function Navbar() {
  const classes = useStyles()

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <NavBarMobile />
          <NavBarNormal />
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}