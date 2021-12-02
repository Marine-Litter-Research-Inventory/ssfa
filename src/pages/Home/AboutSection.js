// @ts-nocheck
import React from 'react';
import { Typography, Button, Container } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';
import WaveUpper from 'components/WaveUpper';
import WaveLower from 'components/WaveLower';

// const logos = [
//   {
//     src: 'https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/CIL-logo-new200px.png',
//     alt: 'CIL logo',
//     style: { width: '100%' },
//   },
//   {
//     src: 'https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/NUS.png',
//     alt: 'NUS logo',
//     style: { width: '100%' },
//   },
//   {
//     src: 'https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/TMSI.png',
//     alt: 'TMSI logo',
//     style: { width: '100%' },
//   },
//   {
//     src: 'https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/cobsea-logo-coloured-270.png',
//     alt: 'COBSEA logo',
//     style: { width: '100%' },
//   },
//   {
//     src: 'https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/download.png',
//     alt: 'UNEP logo',
//     style: { width: '100%' },
//   },
//   {
//     src: 'https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/SEA-circular_RGB_badge-color-min1.png',
//     alt: 'SeaCircular logo',
//     style: { width: 'auto', height: 80 },
//   },
//   {
//     src: 'https://github.com/Marine-Litter-Research-Inventory/image/blob/main/logos/SJINML_Logo.png',
//     alt: 'StJohn logo',
//     grid: [11, 6, 6],
//     style: { width: '100%' },
//   },
// ]

// const SubHeader = styled(Typography)({
//   fontWeight: 'bold',
//   margin: 'auto',
//   padding: `40px 20px`,
//   boxSizing: 'border-box',
//   textAlign: 'center',
// })

const Wrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  marginBottom: '6rem',
}))

const Body = styled(Typography)({
  margin: 'auto',
  boxSizing: 'border-box',
  padding: '0 20px',
  marginBottom: 20,
})


export default function AboutSection() {

  return (
    <Wrapper>
      <WaveUpper />
      <Container maxWidth='md'>
        <div style={{ height: 100 }} />
        <Body variant='body1' align='justify'>
          This website provides access to a Research Inventory of marine plastics coordinated by the National University of Singapore and completed in November 2021 with a view of supporting the development of a regional node of the Global Partnership for Marine Litter (GMPL) under the leadership of the Coordinating Body for the Seas of East Asia (COBSEA).
          <br />
        </Body>
        <div style={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            color="secondary"
            component={RouterLink}
            to='/about'
          >
            Learn more about us
          </Button>
        </div>
      </Container>
      <br />
      <WaveLower />
      {/* <Grid
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
        </Grid> */}
    </Wrapper>
  )
}