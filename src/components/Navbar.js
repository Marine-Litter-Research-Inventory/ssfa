// import "components/Navbar.css";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Drawer, Hidden } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    margin: 'auto',
  },
  logo: {
    height: '56px',
  },
  toolbar: {
    backgroundImage: `url("https://lh4.googleusercontent.com/1q8tVMwteA_OFzZ850YWeRqJITxo3lVFk18Tf6_k9A_L0G7HI_dHQBjRTmr-Avhdd3q6vGCBmZXpCH-VS7HHnlw=w16383")`,
    backgroundPosition: '20px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  }
}));

export default function Navbar() {
  const classes = useStyles()
  const [state, setState] = useState(false)

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Hidden smUp implementation='js'>
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
              <h1>Some Item</h1>
            </Drawer>
          </Hidden>
          <Hidden only='xs'>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setState(true)}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}