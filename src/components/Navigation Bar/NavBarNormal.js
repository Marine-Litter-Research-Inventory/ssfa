import React from "react";
import { Button, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const lists = [
  { text: 'Home', route: '/' },
  { text: 'About', route: '/about' },
  { text: 'Fact Sheets', route: '/fact' },
  { text: 'Map', route: '/map' },
  { text: 'Data & Analytics', route: '/data' },
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