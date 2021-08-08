import React from 'react';
import { Typography, Button, Container } from "@material-ui/core";
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@material-ui/system';


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
  padding: '0 20px'
})

export default function ContributeSection() {

  return (
    <>
      <Container maxWidth='md'>
        <SubHeader variant='h2'>
          Contribute
        </SubHeader>
        <Body variant='body1' align='center'>
          Contribute to this regional page of shared resources for marine plastic researchers in Southeast and East Asia.
          <br /><br />
          Are we missing resources in the region? Drop us a message and let us know here.
          <br /><br />
        </Body>
        <div style={{ textAlign: 'center' }}>
          <Button
            variant="outlined"
            color="primary"
            component={RouterLink}
            to='/about'
          >
            Contribute
          </Button>
        </div>
        <br /><br />
      </Container>
    </>
  )
}