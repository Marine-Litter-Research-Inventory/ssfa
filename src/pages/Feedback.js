import React from 'react';
import { styled } from '@mui/system';

const StyledIframe = styled("iframe")(({ theme }) => ({
  border: "4px solid" + theme.palette.secondary.main,
}))

export default function Feedback() {

  return (
    <div
      style={{
        justifyContent: 'center',
        height: 600,
        alignItems: 'center',
        display: "flex",
      }}
    >
      <StyledIframe
        title="Feedback form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSeWK8XPciCQtRTOp8K4fP7XJ4a3jPJ2o7DHmDwBtK4AEW4KTg/viewform?usp=sf_link"
        width="80%"
        height="500"
      >
        Loading...
      </StyledIframe>
    </div>
  )
}