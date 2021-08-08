// @ts-nocheck
import React from 'react';
import { Typography, Grid, Button, Container } from "@material-ui/core";
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@material-ui/system';

const logos = [
  {
    src: 'https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/CIL-logo-new200px.png',
    alt: 'CIL logo',
    style: { width: '100%' },
  },
  {
    src: 'https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/NUS.png',
    alt: 'NUS logo',
    style: { width: '100%' },
  },
  {
    src: 'https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/TMSI.png',
    alt: 'TMSI logo',
    style: { width: '100%' },
  },
  {
    src: 'https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/cobsea-logo-coloured-270.png',
    alt: 'COBSEA logo',
    style: { width: '100%' },
  },
  {
    src: 'https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/download.png',
    alt: 'UNEP logo',
    style: { width: '100%' },
  },
  {
    src: 'https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/SEA-circular_RGB_badge-color-min1.png',
    alt: 'SeaCircular logo',
    style: { width: 'auto', height: 80 },
  },
  {
    src: 'https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/SJINML_Logo.png',
    alt: 'StJohn logo',
    grid: [11, 6, 6],
    style: { width: '100%' },
  },
]

const SubHeader = styled(Typography)({
  fontWeight: 'bold',
  margin: 'auto',
  padding: `40px 20px`,
  boxSizing: 'border-box',
  textAlign: 'center',
})

const Body = styled(Typography)({
  margin: 'auto',
  boxSizing: 'border-box',
  padding: '0 20px',
  marginBottom: 20,
})


export default function AboutSection() {

  return (
    <div>
      <Container maxWidth='md'>
        <SubHeader variant='h2'>
          About
        </SubHeader>
        <Body variant='body1' align='justify'>
          Welcome to the (temporary) resource page for marine plastic researchers in Southeast and East Asia.
          <br /><br />
          This temporary resource site is designed to provide resources on research on marine plastic pollution to researchers in Southeast and East Asia (SE-EA), pending the development of an research inventory and resource platform to that effect. The development of this  on-line tool, which  will further support the regional node of the Global Partnership for Marine Litter (GMPL), is being led by the Coordinating Body for the Seas of East Asia (COBSEA).
          <br /><br />
        </Body>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <Button
            variant="outlined"
            color="primary"
            component={RouterLink}
            to='/about'
          >
            Learn more about us
          </Button>
        </div>
        <Grid
          container
          gap={5}
          justifyContent="center"
          alignItems='center'
          align='center'
        >
          {logos.map((logo, idx) => (
            <React.Fragment key={idx}>
              <Grid item xs={logo.grid ? logo.grid[0] : 5} sm={logo.grid ? logo.grid[1] : 3} md={logo.grid ? logo.grid[2] : 3} >
                <img src={logo.src + '?raw=true'} alt={logo.alt} style={logo.style} />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Container>
      <br /><br />
    </div>
  )
}