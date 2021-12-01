import React from "react";
import { Button, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setRoute } from "app/slice/routeState";

const lists = [
  { text: 'Home', route: '/' },
  { text: 'Map', route: '/map' },
  { text: 'Data & Analytics', route: '/data' },
  { text: 'Fact Sheets', route: '/factsheets' },
  { text: 'Feedback', route: '/feedback' },
  { text: 'About', route: '/about' },
]

export default function NavBarNormal() {
  const dispatch = useDispatch();
  const { route } = useSelector(state => state.routeState);

  return (
    <>
      <img
        src="https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/Dugong%201.png?raw=true"
        alt="Site logo"
        width={50}
        style={{
          borderRadius: '30%',
          marginRight: '1rem',
        }}
      />
      <Typography
        variant='body1'
        component='h1'
        color='inherit'
        style={{
          flexGrow: 1,
          fontWeight: 'bold',
        }}
      >
        Marine Plastic
        <br />
        Research Inventory
      </Typography>
      {lists.map((list, idx) => (
        <Button
          key={idx}
          color="inherit"
          component={RouterLink}
          to={list.route}
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
          }}
          onClick={() => dispatch(setRoute(list.text))}
          variant={list.text === route ? "contained" : "text"}
        >
          {list.text}
        </Button>
      ))}
    </>
  )
}