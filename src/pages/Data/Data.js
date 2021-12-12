import React from 'react';
import { Typography, Grid, ButtonBase, Skeleton, Container } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from "react-router-dom";
import Header from "components/StyledComponents/Header";
import Body from "components/StyledComponents/Body";

function formatter(title, route, description) {
  return { title, route, description }
}

const Tiles = [
  formatter(
    "Custom Data-Subset",
    "/data/custom-data-subset",
    "Search and filter through a sub-section of the data contained in the inventory that best responds to your interest"
  ),
  formatter(
    "Research Landscape",
    "/data/research-landscape",
    "Explore charts and graphs on the profile of research conducted on marine plastics in the seas of Southeast and East Asia"
  ),
  formatter(
    "Methodology and Ontology",
    "/data/methodology-and-ontology",
    "Consult the methodology and database ontology adopted to develop the research inventory"
  ),
  formatter(
    "Scientific Research",
    "/data/scientific-research",
    "Explore charts and graphs on the characteristics of scientific research publications"
  ),
  formatter(
    "Research in Humanities",
    "/data/research-in-humanities",
    "Explore charts and graphs on the characteristics of research publications in the legal, policy, socio-economic and cultural fields of research"
  ),
  formatter(
    "Information for Policy-Making",
    "/data/information-for-policy-making",
    "Explore charts and graphs on insight that may be gained from the Research Inventory for  policy- making purposes"
  )
]

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
        <Body variant='body1' align="justify" sx={{ backgroundColor: theme => theme.palette.primary.main }}>
          Explore the inventory of research that have been conducted on pollution from marine plastics in the seas of Southeast and East Asia, and analytical data that were generated from the inventory. Use the tiles below to navigate to a section to start.
          <br /><br />
          The data represented in the research inventory is constantly evolving. Your participation is essential to make this resource more accurate and comprehensive. You can do that by providing feedback on existing data, or any other queries or suggestions.
        </Body>
        <Navigation />
      </Container>
    </div>
  )
}