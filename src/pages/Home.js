import React from 'react';
import { Typography, Container, Divider, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavCard from 'components/NavCard';
import { Link as RouterLink } from 'react-router-dom';

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
}))

const cards = [
  {
    id: 1,
    title: 'Sampling & Processing Guidelines',
    src: '/images/1.jpg',
    path: '/guidelines'
  },
  {
    id: 2,
    title: 'Regional Report of Legal and Policy Efforts',
    src: '/images/2.jpg',
    path: '/regional'
  },
  {
    id: 3,
    title: 'Understanding Marine Plastic Research in SE-EA',
    src: '/images/3.jpg',
    path: '/understanding'
  },
  {
    id: 4,
    title: 'Other Data Repositories & Infographics',
    src: '/images/4.jpg',
    path: '/other'
  },
]

export default function Home() {
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
          Marine Plastic Research in  Southeast and East Asia
        </Typography>
      </div>
      <Container maxWidth='md'>
        <Typography
          variant='body1'
          className={classes.body}
        >
          [Draft version under review]
          <br /><br />
          Welcome to the (temporary) resource page for marine plastic researchers in Southeast and East Asia.
          <br /><br />
          Click on the images below, or use the sidebar menu to navigate to resources.
          <br /><br />
        </Typography>
        <Divider />
        <br /><br />
        <Grid container spacing={2}>
          {cards.map(card => (
            <React.Fragment key={card.id}>
              <Grid item xs={12} sm={6} md={3}>
                <Link underline="none" component={RouterLink} to={card.path}>
                  <NavCard title={card.title} src={card.src} />
                </Link>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </>
  )
}