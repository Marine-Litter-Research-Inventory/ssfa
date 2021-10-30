// @ts-nocheck
import React from 'react';
import { Typography, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';

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
  padding: `60px 20px`,
  boxSizing: 'border-box',
  color: 'ghostwhite',
  textAlign: 'center',
  backgroundColor: '#6FBFF5'
}))

const Subheader = styled(Typography)({
  fontWeight: 'bold',
})

const Body = styled(Typography)({
  margin: 'auto',
  marginBottom: 30,
  boxSizing: 'border-box',
  padding: 20,
})

export default function About() {

  return (
    <>
      <Header variant='h2' align='center'>
        About this Resource Site
      </Header>
      <Wave />

      <Container maxWidth='md' sx={{ marginBottom: 5 }}>
        <Body variant='body1' align='justify'>
          This temporary resource site is designed to provide resources on research on marine plastic pollution to researchers in Southeast and East Asia (SE-EA), pending the development of an research inventory and resource platform to that effect. The development of this  on-line tool, which  will further support the regional node of the Global Partnership for Marine Litter (GMPL), is being led by the Coordinating Body for the Seas of East Asia (COBSEA).
          <br /><br />
          This initiative takes place in the wider context of a series of research projects undertaken by the Policy-Science Research Team of the National University of Singapore (NUS) with a view to strengthen the overall understanding of marine plastic research in SE-EA, the state of knowledge, as well as practices and issues faced. In this context, NUS and COBSEA/UNEP have undertaken two successive projects. The first one concluded with the online publication of an inventory of marine plastic research in SE-EA in Auguste 2020. The current project started on 1 January 2021.
          <br /><br />
          In order to gain a more practical understanding of the practices and constraints faced by marine plastic researchers in the region, NUS Marine Plastic Science-Policy Team organised a four-part webinar series to consult with them (more information on the webinars in "Understanding Marine Plastic Research in SE-EA"). One of the key outcome of the first webinar was the need for a central location where ‘regionally relevant’ resources could be accessed from. This is the purpose of this webpage.
        </Body>
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
        <br /><br />
        <br /><br />
        <Subheader variant='h3' align='center'>
          Methodology
        </Subheader>
        <Body variant='body1' align='justify'>
          (To be continued)
        </Body>
      </Container>
    </>
  )
}