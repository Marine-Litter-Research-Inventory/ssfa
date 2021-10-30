import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

const Header = styled(Typography)({
  color: 'ghostWhite',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '2rem',
})

const SubHeader = styled(Typography)({
  color: 'ghostWhite',
  fontWeight: 'bold',
  padding: '1rem',
})

// const Body = styled(Typography)({
//   color: 'ghostWhite',
//   textAlign: 'justify',
//   padding: '1rem',
// })

export default function Understanding() {

  return (
    <div>
      <Header variant='h4'>
        Understanding Marine Plastic Research in SE-EA
      </Header>
      <SubHeader variant='h5' align='center'>
        Inventory of scientific research on marine plastics in the region
      </SubHeader>
      <br />
      <Box style={{ textAlign: 'center' }}>
        <Button
          variant='outlined'
          href='https://docs.google.com/spreadsheets/d/1r4aCVQeCS1cj_Rhip82yVTNNnxkWDgFwbEIHCR_oASk/edit#gid=0'
          style={{
            color: 'ghostWhite',
            borderColor: 'ghostWhite'
          }}
        >
          Click here to learn more!
        </Button>
      </Box>
      <br /><br />
    </div >
  )
}