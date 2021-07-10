import React from 'react';
import { Typography, Button, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    maxWidth: 900,
    margin: 'auto',
    // padding: `${theme.mixins.toolbar.minHeight}px 20px`,
    padding: `40px 20px`,
    boxSizing: 'border-box'
  },
  body: {
    maxwidth: 900,
    margin: 'auto',
    boxSizing: 'border-box',
    padding: '0 24px',
  },
}))

export default function ContributeSection() {
  const classes = useStyles()

  return (
    <>
      <Container maxWidth='md'>
        <Typography
          variant='h2'
          component='h1'
          align='center'
          className={classes.title}
        >
          Contribute
        </Typography>
        <Typography
          variant='body1'
          align='justify'
          className={classes.body}
        >
          Contribute to this regional page of shared resources for marine plastic researchers in Southeast and East Asia.
          <br /><br />
          Are we missing resources in the region? Drop us a message and let us know here.
          <br /><br />
        </Typography>
        <div style={{ textAlign: 'center' }}>
          <Button
            variant="outlined"
            color="primary"
            component={RouterLink}
            to='/about'
          // style={{  }}
          >
            Contribute
          </Button>
        </div>
        <br /><br />
      </Container>
    </>
  )
}