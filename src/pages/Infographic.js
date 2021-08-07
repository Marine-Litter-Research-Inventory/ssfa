import React, { useState } from 'react';
import { SwipeableDrawer } from '@material-ui/core';
import { styled } from '@material-ui/system';

import CustomizedDrawer from 'components/CustomizedDrawer';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import BarChartIcon from '@material-ui/icons/BarChart';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';

const pullerHeight = 80
const pullerWidth = 30


export default function Infographic() {
  const [isOpen, setIsOpen] = useState(false)
  const [graph, setGraph] = useState(0)

  const lists = [
    {
      icon: <BarChartIcon fontSize='large' sx={{ color: 'ghostwhite' }} />, text: 'Number of paper overtime',
      secondaryText: 'per country',
      onClick: () => setGraph(0)
    },
    {
      icon: <BubbleChartIcon fontSize='large' sx={{ color: 'ghostwhite' }} />, text: 'Something',
      secondaryText: 'per something else',
      onClick: () => setGraph(1)
    },
    {
      icon: <DonutLargeIcon fontSize='large' sx={{ color: 'ghostwhite' }} />, text: 'Something',
      secondaryText: 'per something else',
      onClick: () => setGraph(2)
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
        <CustomizedDrawer lists={lists} />
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
    </div >
  )
}