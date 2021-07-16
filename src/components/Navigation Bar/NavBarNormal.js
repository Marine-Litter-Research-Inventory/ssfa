import React from "react";
import { Hidden, Button, Typography, InputBase } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { styled, alpha } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';

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
          Marine Plastic Research <br />in Southeast and East Asia
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
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