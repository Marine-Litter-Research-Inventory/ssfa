import React from 'react';
import { Typography, Grid, ButtonBase, Skeleton, Container } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from "react-router-dom";
import Header from "components/StyledComponents/Header";
import Body from "components/StyledComponents/Body";
import StyledLink from 'components/StyledComponents/StyledLink';

function formatter(title, route, description, link) {
  return { title, route, description, link }
}

const Tiles = [
  formatter(
    "Custom Data-Subset",
    "/data/custom-data-subset",
    "Search and filter through a sub-section of the data contained in RRI 2.0 which best respond to your interest",
    "https://github.com/Marine-Litter-Research-Inventory/image/blob/main/resources/Slide1.png?raw=true"
  ),
  formatter(
    "Research Landscape",
    "/data/research-landscape",
    "Explore charts and graphs on the profile of research conducted on marine plastics in the seas of Southeast and East Asia, including research areas and capability",
    "https://github.com/Marine-Litter-Research-Inventory/image/blob/main/resources/Slide2.png?raw=true"
  ),
  formatter(
    "Methodology and Ontology",
    "/data/methodology-and-ontology",
    "Consult the methodology and database ontology adopted to develop RRI 2.0",
    "https://github.com/Marine-Litter-Research-Inventory/image/blob/main/resources/Slide3.png?raw=true"
  ),
  formatter(
    "Scientific Research",
    "/data/scientific-research",
    "Explore charts and graphs on the characteristics of scientific research publications",
    "https://github.com/Marine-Litter-Research-Inventory/image/blob/main/resources/Slide4.png?raw=true"
  ),
  formatter(
    "Research in Humanities",
    "/data/research-in-humanities",
    "Explore charts and graphs on the characteristics of research publications in the legal, policy, socio-economic and cultural fields of research",
    "https://github.com/Marine-Litter-Research-Inventory/image/blob/main/resources/Slide5.png?raw=true"
  ),
  formatter(
    "Information for Policy-Making",
    "/data/information-for-policy-making",
    "Explore charts and graphs on insight that may be gained from RRI 2.0 for policy- making purposes",
    "https://github.com/Marine-Litter-Research-Inventory/image/blob/main/resources/Slide6.png?raw=true"
  )
]

const Tile = ({ title, description, LinkComponent, to, link, idx }) => {

  const [isLoading, setIsLoading] = React.useState(true)

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
        {
          isLoading ?
            <Skeleton variant="rectangular">
              <img
                src={link}
                alt={"Thumbnail" + idx}
                width="100%"
                onLoad={() => setIsLoading(false)}
              />
            </Skeleton>
            :
            <img
              src={link}
              alt={"Thumbnail" + idx}
              width="100%"
            />
        }
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
            idx={idx}
            title={tile.title}
            LinkComponent={Link}
            to={tile.route}
            description={tile.description}
            link={tile.link}
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
          Click on the tiles below to explore the RRI 2.0, featuring charts and graphs that were generated to visualise the data.
          <br /><br />
          The data included in RRI 2.0 are constantly evolving. Your participation is essential to making this resource more accurate, comprehensive and useful. You can do that by providing
          <StyledLink to="/feedback"> feedback </StyledLink>
          on existing data, or sending any other queries or suggestions.
        </Body>
        <Navigation />
      </Container>
    </div>
  )
}