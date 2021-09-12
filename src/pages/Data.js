import React, { useState } from 'react';
import { SwipeableDrawer, Typography } from '@material-ui/core';
import { styled } from '@material-ui/system';

import BarChart from 'components/Chart/BarChart';
import WordCloudChart from 'components/Chart/WordCloud';

import CustomizedDrawer from 'components/CustomizedDrawer';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const pullerHeight = 80
const pullerWidth = 30

const lists = [
  {
    icon: 0,
    text: 'Number of paper overtime',
    secondaryText: 'per Territories/Location studied'
  },
  {
    icon: 1,
    text: 'Prominent Authors',
    secondaryText: 'per Territories/Location studied'
  },
  {
    icon: 2,
    text: 'Something',
    secondaryText: 'per something else'
  },
]
const Wave = () => {
  return (
    <div style={{ position: 'relative', height: 60 }}>
      <div className="custom-shape-divider-top-1625571579">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  )
}

const Header = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  // @ts-ignore
  padding: `${theme.mixins.toolbar.minHeight}px 20px`,
  boxSizing: 'border-box',
  color: 'ghostwhite',
  textAlign: 'center',
  backgroundColor: '#6FBFF5',
  // marginBottom: -pullerHeight / 2
}))

const Body = styled(Typography)({
  margin: 'auto',
  marginBottom: 30,
  boxSizing: 'border-box',
  padding: 20,
})

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


export default function Data() {
  const [isOpen, setIsOpen] = useState(false)
  const [graph, setGraph] = useState(0)
  const charts = [
    <BarChart selectorLabel="Location/Territory studied" />,
    <WordCloudChart />,

  ]

  const DrawerComponent = () => {
    return (
      <SwipeableDrawer
        anchor="left"
        // variant='persistent'
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
          sx={{
            visibility: isOpen ? 'visible' : 'hidden',
          }}
        >
          <ArrowLeftIcon fontSize='large' sx={{ color: 'ghostwhite' }} />
        </Puller>
        <CustomizedDrawer lists={lists} onClick={setGraph} pos={graph} />
      </SwipeableDrawer>
    )
  }

  return (
    <div>
      <Header variant='h2' align='center'>
        Data & Analytics
      </Header>
      <Wave />

      <Puller
        onClick={() => setIsOpen(true)}
        sx={{
          left: 0,
          zIndex: 9999,
          visibility: isOpen ? 'hidden' : 'visible',
          position: 'sticky',
        }}
      >
        <ArrowRightIcon fontSize='large' sx={{ color: 'ghostwhite' }} />
      </Puller>
      <DrawerComponent />

      <Body variant='body1' align='center'>
        Here you can find the data and analytics for Marine Litter Reserach effort in South East and East Asian seas. You can select the data you want to visualize on the left.
      </Body>

      {charts[graph]}
    </div >
  )
}