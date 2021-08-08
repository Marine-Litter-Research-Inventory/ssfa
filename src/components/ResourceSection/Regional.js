import React from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { styled } from '@material-ui/system';

const url = 'https://cil.nus.edu.sg/research/special-projects/#polllution-from-marine-plastics-in-the-seas-of-asean-plus-three'

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

export default function Regional() {

  return (
    <div>
      <Header variant='h4'>
        Regional Report of Legal and Policy Efforts
      </Header>
      <SubHeader variant='h5' align='center'>
        Status of Research, Legal and Policy Efforts on Marine Plastics in ASEAN+3:
        A Gap Analysis at the Interface of Science, Law and Policy
      </SubHeader>
      <br />
      <Box style={{ textAlign: 'center' }}>
        <Button
          variant='outlined'
          href={url}
          style={{
            color: 'ghostWhite',
            borderColor: 'ghostWhite'
          }}
        >
          Click here to learn more!
        </Button>
      </Box>
    </div >
  )
}