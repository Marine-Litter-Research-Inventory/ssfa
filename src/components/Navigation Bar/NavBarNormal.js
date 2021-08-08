import React from "react";
import { Button, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const lists = [
  { text: 'Home', route: '/' },
  { text: 'About', route: '/about' },
  { text: 'Map', route: '/map' },
  { text: 'Infographic', route: '/infographic' },
]

export default function NavBarNormal() {
  return (
    <>
      <Typography
        variant='body1'
        component='h1'
        color='inherit'
        style={{ flexGrow: 1 }}
      >
        Marine Litter Research Inventory <br />in East Asian Seas
      </Typography>
      {lists.map((list, idx) => (
        <Button
          key={idx}
          color="inherit"
          component={RouterLink}
          to={list.route}
        >
          {list.text}
        </Button>
      ))}
    </>
  )
}