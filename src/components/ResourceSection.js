import { Container, Grid, Link, Typography } from "@material-ui/core"
import React from "react"
import NavCard from "./NavCard"
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

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

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    maxWidth: 900,
    margin: 'auto',
    // padding: `${theme.mixins.toolbar.minHeight}px 20px`,
    padding: `40px 20px`,
    boxSizing: 'border-box',
    color: 'ghostWhite'
  },
  body: {
    maxwidth: 900,
    margin: 'auto',
    boxSizing: 'border-box',
    padding: '0 24px',
    color: 'ghostWhite'
  },
}))

export default function ResourceSection() {
  const classes = useStyles()

  return (
    <div style={{ backgroundColor: '#6fbff5' }}>
      <div style={{ position: 'relative' }} >
        <div className="custom-shape-divider-top-1625586722">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
      <div style={{ height: 70 }} />
      <Container maxWidth='md'>
        <Typography
          variant='h2'
          component='h1'
          align='center'
          className={classes.title}
        >
          Resources
        </Typography>
        <Typography
          variant='body1'
          align='justify'
          className={classes.body}
        >
          Here you can find all the resources you need about marine plastic research in Southeast and East Asia
          <br /><br />
        </Typography>
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
    </div>
  )
}