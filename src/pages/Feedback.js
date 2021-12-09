import React from 'react';
import { styled } from '@mui/system';
import Header from 'components/StyledComponents/Header';
import Body from 'components/StyledComponents/Body';
import { Container } from '@mui/material';

const StyledIframe = styled("iframe")(({ theme }) => ({
  border: "4px solid" + theme.palette.secondary.main,
}))

export default function Feedback() {

  return (
    <Container maxWidth='md'>
      <Header variant="h2" align="center">
        Feedback
      </Header>
      <Body variant="body1" sx={{ backgroundColor: theme => theme.palette.primary.main }}>
        The research inventory is designed to keep evolving . Your participation is essential to make this resource more accurate and comprehensive.
      </Body>
      <StyledIframe
        title="Feedback form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSeWK8XPciCQtRTOp8K4fP7XJ4a3jPJ2o7DHmDwBtK4AEW4KTg/viewform?usp=sf_link"
        width="100%"
        height="500"
      >
        Loading...
      </StyledIframe>
    </Container>
  )
}