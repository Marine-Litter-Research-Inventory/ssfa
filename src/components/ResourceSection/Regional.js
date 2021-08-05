import React from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    color: 'ghostWhite',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '2rem',
  },
  subtitle: {
    color: 'ghostWhite',
    fontWeight: 'bold',
    padding: '1rem',
  },
}))

export default function Regional() {
  const classes = useStyles();

  return (
    <div>
      <Typography
        variant='h4'
        className={classes.title}
      >
        Regional Report of Legal and Policy Efforts
      </Typography>
      <Typography
        variant='h5'
        align='center'
        className={classes.subtitle}
      >
        Status of Research, Legal and Policy Efforts on Marine Plastics in ASEAN+3:
        A Gap Analysis at the Interface of Science, Law and Policy
      </Typography>
      <br />
      <Box style={{ textAlign: 'center' }}>
        <Button
          variant='outlined'
          href='https://cil.nus.edu.sg/research/special-projects/#polllution-from-marine-plastics-in-the-seas-of-asean-plus-three'
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