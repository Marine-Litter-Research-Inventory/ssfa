// @ts-nocheck
import React from 'react';
import { Typography, Container, Grid, Divider } from '@mui/material';
import { styled } from '@mui/system';
import HeaderRibbon from 'components/StyledComponents/HeaderRibbon';

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

const partners = [
  {
    country: "Malaysia",
    contributors: [
      {
        name: "Changi Wong",
        link: "/",
      },
      {
        name: "Japareng Lalung and his team",
        link: "/",
      },
      {
        name: "Moritz Mueller",
        link: "/",
      },
    ]
  },
  {
    country: "Vietnam",
    contributors: [
      {
        name: "Tri Van",
        link: "/",
      },
    ]
  },
  {
    country: "Philippines",
    contributors: [
      {
        name: "Neil Angelo S.Abreo",
        link: "/",
      },
    ]
  },
  {
    country: "Thailand",
    contributors: [
      {
        name: "Chawalit",
        link: "/",
      },
    ]
  },
  {
    country: "Indonesia",
    contributors: [
      {
        name: "Sulistiowati",
        link: "/",
      },
    ]
  },
  {
    country: "Myanmar",
    contributors: [
      {
        name: "Thanda Ko Gyi",
        link: "/",
      },
    ]
  },
  {
    country: "China",
    contributors: [
      {
        name: "Zhu Lixin and his team",
        link: "/",
      },
    ]
  },

]

const Header = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  padding: `60px 20px`,
  boxSizing: 'border-box',
  textAlign: 'center',
}))

const Body = styled(Typography)({
  margin: 'auto',
  marginBottom: 30,
  boxSizing: 'border-box',
  padding: 20,
})


const Tile = ({ header, body }) => {

  const TileHeader = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.quaternary.main,
    color: "white",
    padding: "0.5rem",
    borderRadius: "1rem 1rem 0 0",
    fontWeight: "bold",
  }))

  const TileBody = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: "1rem",
    borderRadius: "0 0 1rem 1rem",
  }))

  return (
    <div>
      <TileHeader>{header}</TileHeader>
      <TileBody>
        <ul style={{ listStyleType: "none" }}>
          {body.map((contributor, idx) => (
            <React.Fragment key={idx}>
              <li style={{ margin: "0.5rem 0" }}>{contributor.name}</li>
              {body.length - 1 !== idx ? <Divider /> : null}
            </React.Fragment>
          ))}
        </ul>
      </TileBody>
    </div>
  )
}

export default function About() {

  return (
    <>
      <Header variant='h2' align='center'>
        About
      </Header>
      <Container maxWidth='md' sx={{ marginBottom: 5 }}>
        <HeaderRibbon
          text='Organisations and partners'
          color="secondary"
          variant="h6"
        />
        <Body variant='body1' align='justify'>
          This temporary resource site is designed to provide resources on research on marine plastic pollution to researchers in Southeast and East Asia (SE-EA), pending the development of an research inventory and resource platform to that effect. The development of this  on-line tool, which  will further support the regional node of the Global Partnership for Marine Litter (GMPL), is being led by the Coordinating Body for the Seas of East Asia (COBSEA).
          <br /><br />
          This initiative takes place in the wider context of a series of research projects undertaken by the Policy-Science Research Team of the National University of Singapore (NUS) with a view to strengthen the overall understanding of marine plastic research in SE-EA, the state of knowledge, as well as practices and issues faced. In this context, NUS and COBSEA/UNEP have undertaken two successive projects. The first one concluded with the online publication of an inventory of marine plastic research in SE-EA in Auguste 2020. The current project started on 1 January 2021.
          <br /><br />
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
        <br /><br /><br />
        <HeaderRibbon
          text='Contributors'
          color="secondary"
          variant="h6"
        />
        <Body variant="body1">
          With special thanks to our regional partners and contributors, without whom the work could not have been achieved:
        </Body>
        <Grid
          container
          gap={5}
          justifyContent="center"
          alignItems='center'
          align='center'
        >
          {partners.map((partner, idx) => (
            <React.Fragment key={idx}>
              <Grid item xs={5} md={3}>
                <Tile
                  header={partner.country}
                  body={partner.contributors}
                />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>

      </Container>
    </>
  )
}