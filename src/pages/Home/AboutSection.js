// @ts-nocheck
import React from 'react';
import { Typography, Button, Container } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';
import WaveUpper from 'components/StyledComponents/WaveUpper';
import WaveLower from 'components/StyledComponents/WaveLower';

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
    </Wrapper>
  )
}