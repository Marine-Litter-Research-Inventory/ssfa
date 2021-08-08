import React, { useState } from 'react';
import { SwipeableDrawer } from '@material-ui/core';
import { styled } from '@material-ui/system';

import BarChart from 'components/Chart/BarChart';

import CustomizedDrawer from 'components/CustomizedDrawer';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const pullerHeight = 80
const pullerWidth = 30

export default function Infographic() {
  const [isOpen, setIsOpen] = useState(false)
  const [graph, setGraph] = useState(0)

  const lists = [
    {
      icon: 0,
      text: 'Number of paper overtime',
      secondaryText: 'per country'
    },
    {
      icon: 1,
      text: 'Something',
      secondaryText: 'per something else'
    },
    {
      icon: 2,
      text: 'Something',
      secondaryText: 'per something else'
    },
  ]


  const Puller = styled('div')({
    top: `calc(${window.innerHeight}px / 2 - ${pullerHeight}px)`,
    height: pullerHeight,
    width: pullerWidth,
    right: -pullerWidth,
    backgroundColor: 'royalblue',
    position: 'absolute',
    visibility: 'visible',
    borderTopRightRadius: '1rem',
    borderBottomRightRadius: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  })

  const DrawerComponent = () => {
    return (
      <SwipeableDrawer
        anchor="left"
        variant='persistent'
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        disableSwipeToOpen
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            overflow: 'visible',
          }
        }}
      >
        <Puller
          onClick={() => setIsOpen(false)}
        >
          <ArrowLeftIcon fontSize='large' sx={{ color: 'ghostwhite' }} />
        </Puller>
        <CustomizedDrawer lists={lists} onClick={setGraph} pos={graph} />
      </SwipeableDrawer>
    )
  }

  return (
    <div>
      <Puller
        onClick={() => setIsOpen(true)}
        sx={{
          left: 0,
          zIndex: 9999,
          visibility: isOpen ? 'hidden' : 'visible'
        }}
      >
        <ArrowRightIcon fontSize='large' sx={{ color: 'ghostwhite' }} />
      </Puller>
      <DrawerComponent />
      {[0, 1, 2, 3, 4, 5].map((idx) => <BarChart key={idx} index={idx} pos={graph} />)}
    </div >
  )
}