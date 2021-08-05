import React, { useState } from "react"
import { Container, Grid, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/styles';

import AnimatedSVG from 'components/AnimatedSVG';
import Guidelines from 'components/ResourceSection/Guidelines';

const icons = [
  { src: 'bottle.svg', alt: 'Plastic Bottle', screen: 1 },
  { src: 'bag.svg', alt: 'Plastic Bag', screen: 2 },
  { src: 'can.svg', alt: 'Beverage Can', screen: 3 },
  { src: 'cup.svg', alt: 'Plastic Cup', screen: 4 },
]

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
    maxWidth: 900,
    margin: 'auto',
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
  gridContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: '2rem',
    overflow: 'hidden',
  }
}))

export default function ResourceSection() {
  const classes = useStyles()
  const [screen, setScreen] = useState(1)

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
          Click on the icons below to find all the resources you need about marine litter research in East Asian Sea.
          <br /><br />
        </Typography>
        <Grid container columns={10} justifyContent="space-evenly">
          {icons.map((icon, idx) => (
            <Grid item xs={2} key={idx} className={classes.gridContainer}>
              <AnimatedSVG
                src={icon.src}
                alt={icon.alt}
                onClick={() => setScreen(icon.screen)}
              />
            </Grid>
          ))}
        </Grid>
        {screen === 1 ? <Guidelines /> : null}
      </Container>
      <br /><br />
    </div>
  )
}