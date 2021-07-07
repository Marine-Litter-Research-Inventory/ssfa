import React from 'react';
import { Typography, Container, Link, Hidden } from '@material-ui/core';
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
    // padding: `${theme.mixins.toolbar.minHeight}px 20px`,
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
    width: 115,
    margin: 'auto',
    display: 'block'
  },
  linkLarge: {
    width: 800,
    margin: 'auto',
    display: 'block'
  },
}))

export default function Regional() {
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
          Other Data Repositories & Infographics
        </Typography>
      </div>
      <Container maxWidth='md'>
        <Typography
          variant='h4'
          component='h2'
          className={classes.subTitle}
        >
          Global data repositories of marine plastic surveys and monitoring
        </Typography>
        <Hidden mdUp>
          <Link
            href='https://cil.nus.edu.sg/research/special-projects/#polllution-from-marine-plastics-in-the-seas-of-asean-plus-three '
            className={classes.linkSmall}
          >
            Link to research
          </Link>
        </Hidden>
        <Hidden smDown>
          <Link
            href='https://cil.nus.edu.sg/research/special-projects/#polllution-from-marine-plastics-in-the-seas-of-asean-plus-three '
            className={classes.linkLarge}
          >
            https://cil.nus.edu.sg/research/special-projects/#polllution-from-marine-plastics-in-the-seas-of-asean-plus-three
          </Link>
        </Hidden>
        <br /><br />
      </Container>
    </>
  )
}