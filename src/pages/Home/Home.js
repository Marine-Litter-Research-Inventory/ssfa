import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

import AboutSection from 'pages/Home/AboutSection';
// import MapSection from 'pages/Home/MapSection';
// import ContributeSection from 'pages/Home/ContributeSection';

const Header = styled(Typography)(({ theme }) => ({
  maxWidth: 900,
  margin: 'auto',
  fontWeight: 'bold',
  padding: `40px 20px`,
  boxSizing: 'border-box',
  display: 'block',
  textAlign: 'center',
}))

const Body = styled(Typography)(({ theme }) => ({
  margin: 'auto',
  maxWidth: 900,
}))

export default function Home() {

  return (
    <div>
      <Header variant='h2'>
        Home
      </Header>
      <AboutSection />
      <Body>
        include overall aim of the graphs and warning that there are based/represented on data captured from publications, ie they are based on the findings of studies that led to these publications. Studies which did not lead to publications that are available on the internet could not be included. They may therefore not be seen as a confirmed statement of the status of pollution by plastic in the marine environment
      </Body>
    </div>
  )
}