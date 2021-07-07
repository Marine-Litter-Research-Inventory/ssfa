import React from 'react';
import { Typography, Container, Link, Hidden, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  background: {
    maxHeight: 300,
    backgroundImage: "url('/images/background.png')",
    backgroundSize: '200%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  title: {
    fontWeight: 'bold',
    maxWidth: 900,
    margin: 'auto',
    padding: `${theme.mixins.toolbar.minHeight}px 20px`,
    boxSizing: 'border-box',
  },
  body: {
    maxwidth: 900,
    margin: 'auto',
    boxSizing: 'border-box',
    padding: 24,
  },
  subTitle: {
    margin: 'auto',
    maxwidth: 900,
    boxSizing: 'border-box',
    padding: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  linkSmall: {
    width: 148,
    margin: 'auto',
    display: 'block'
  },
  linkLarge: {
    width: 780,
    margin: 'auto',
    display: 'block'
  },
}))

export default function Understanding() {
  const classes = useStyles()

  return (
    <>
      <div className={classes.background}>
        <Typography
          variant='h2'
          component='h1'
          align='center'
          className={classes.title}
        >
          Understanding Marine Plastic Research in SE-EA
        </Typography>
      </div>
      <Container maxWidth='md'>
        <Typography
          variant='h4'
          component='h2'
          className={classes.subTitle}
        >
          Inventory of scientific research on marine plastics in the region
        </Typography>
        <Hidden mdUp>
          <Link
            href='https://docs.google.com/spreadsheets/d/1r4aCVQeCS1cj_Rhip82yVTNNnxkWDgFwbEIHCR_oASk/edit#gid=0'
            className={classes.linkSmall}
          >
            Link to spreadsheets
          </Link>
        </Hidden>
        <Hidden smDown>
          <Link
            href='https://docs.google.com/spreadsheets/d/1r4aCVQeCS1cj_Rhip82yVTNNnxkWDgFwbEIHCR_oASk/edit#gid=0'
            className={classes.linkLarge}
          >
            https://docs.google.com/spreadsheets/d/1r4aCVQeCS1cj_Rhip82yVTNNnxkWDgFwbEIHCR_oASk/edit#gid=0
          </Link>
        </Hidden>
        <br /><br />
        <Divider />
        <Typography
          variant='h4'
          component='h2'
          className={classes.subTitle}
        >
          Webinar Series (March - June 2021)
        </Typography>
        <Typography
          variant='body1'
          className={classes.body}
        >
          To be continued
        </Typography>
        <br />
      </Container>
    </>
  )
}