// import "components/Navbar.css";
import React from "react";
import { AppBar, Toolbar, Hidden } from '@material-ui/core';

import NavBarMobile from "./NavBarMobile";
import NavBarNormal from "./NavBarNormal";

export default function Navbar() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Hidden smUp>
            <NavBarMobile />
          </Hidden>
          <Hidden only='xs'>
            <NavBarNormal />
          </Hidden>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}