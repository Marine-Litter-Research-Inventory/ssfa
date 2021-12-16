import React from "react";
import {
  Button, Typography,
  Popover,
} from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const DataExtends = ({ anchorEl, open, onClose, dataOptions }) => {
  const location = useLocation()

  return (
    <Popover
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      {dataOptions.map((list, idx) => (
        <Button
          key={idx}
          color="quaternary"
          component={RouterLink}
          to={list.route}
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            display: "block",
            color: list.route === location.pathname ? "white" : "black",
          }}
          variant={list.route === location.pathname ? "contained" : "text"}
        >
          {list.text}
        </Button>
      ))}
    </Popover>
  )
}

export default function NavBarNormal({ lists, dataOptions }) {
  const location = useLocation()
  const dataRef = React.useRef()
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <img
        src="https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/Dugong%203.png?raw=true"
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
        Research Inventory (Beta)
      </Typography>
      {lists.map((list, idx) => (
        list.route === "/data" ?
          <React.Fragment key={idx}>
            <Button
              key={idx}
              ref={dataRef}
              color="quaternary"
              component={RouterLink}
              to={list.route}
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: list.route === location.pathname ? "white" : "black",
              }}
              variant={list.route === location.pathname ? "contained" : "text"}
              onMouseEnter={() => setOpen(!open)}
            >
              {list.text}
            </Button>
            <DataExtends
              anchorEl={dataRef.current}
              open={open}
              onClose={() => setOpen(false)}
              dataOptions={dataOptions}
            />
          </React.Fragment>
          :
          <Button
            key={idx}
            color="quaternary"
            component={RouterLink}
            to={list.route}
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: list.route === location.pathname ? "white" : "black",
            }}
            variant={list.route === location.pathname ? "contained" : "text"}
          >
            {list.text}
          </Button>
      ))
      }
    </>
  )
}