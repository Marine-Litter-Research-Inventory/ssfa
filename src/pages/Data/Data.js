import React from 'react';
import { Typography, Grid, ButtonBase, Skeleton, Container } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from "react-router-dom";

function formatter(title, route, description) {
  return { title, route, description }
}

const Tiles = [
  formatter(
    "Custom Data-Subset",
    "/data/custom-data-subset",
    "Search and filter through a sub-section of the data contained in the inventory, for your customised exploration"
  ),
  formatter(
    "Research Landscape",
    "/data/research-landscape",
    "Charts and graphs on the profile of research conducted on marine plastics in the seas of Southeast and East Asia"
  ),
  formatter(
    "Methodology and Ontology",
    "/data/methodology-and-ontology",
    "Description of the methodology and database ontology adopted to develop the inventory"
  ),
  formatter(
    "Scientific Research",
    "/data/scientific-research",
    "Charts and graphs on the characteristics of scientific research"
  ),
  formatter(
    "Policy, legal, socio-economic and cultural research",
    "/data/policy-legal-socio-economic-and-cultural-research",
    "Charts and graphs on aspects of policy, legal, socio-economic and cultural research"
  ),
  formatter(
    "Information for policy-making",
    "/data/information-for-policy-making",
    "Charts and graphs on insight that may be gained from the Inventory for  that policy- making purposes"
  ),
]

const Header = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  padding: `60px 20px`,
  boxSizing: 'border-box',
  textAlign: 'center',
}))

const Body = styled(Typography)(({ theme }) => ({
  margin: 'auto',
  boxSizing: 'border-box',
  padding: 20,
  marginBottom: 30,
  backgroundColor: theme.palette.primary.main,
}))

const Tile = ({ title, description, LinkComponent, to }) => {

  const Title = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    color: theme.palette.tertiary.main,
  }))

  const Description = styled(Typography)(({ theme }) => ({
    color: theme.palette.tertiary.main,
    margin: "1rem 0",
  }))

  return (
    <div>
      <ButtonBase
        LinkComponent={LinkComponent}
        to={to}
        style={{ margin: "auto", display: "block" }}
      >
        <Skeleton variant="rectangular">
          <img
            src="https://dummyimage.com/600x400/000/fff"
            alt="Thumbnail"
            width="100%"
          />
        </Skeleton>
      </ButtonBase>
      <Title
        variant="h6"
        align="center"
        style={{ fontWeight: 'bold' }}
      >
        {title}
      </Title>
      <Description
        variant="body2"
        align="center"
      >
        {description}
      </Description>
    </div>
  )
}

const Navigation = () => {

  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      // alignItems="center"
      style={{ marginBottom: 60 }}
    >
      {Tiles.map((tile, idx) => (
        <Grid item xs={5} sm={4} key={idx}>
          <Tile
            title={tile.title}
            LinkComponent={Link}
            to={tile.route}
            description={tile.description}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default function Data() {

  return (
    <div>
      <Container maxWidth='md'>
        <Header variant='h2' align='center'>
          Data & Analytics
        </Header>
        <Body variant='body1' align="justify">
          Explore the inventory of research that have been conducted on pollution from marine plastics in the seas of Southeast and East Asia, and analytical data that were generated from the inventory. Use the tiles below to navigate to a section to start.
          <br /><br />
          The data represented in the research inventory is constantly evolving. Your participation is essential to make this resource more accurate and comprehensive. You can do that by providing feedback on existing data, or any other queries or suggestions.        </Body>
        <Navigation />
      </Container>
    </div>
  )
}