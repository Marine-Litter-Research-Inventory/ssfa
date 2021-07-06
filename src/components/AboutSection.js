import React from 'react';
import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
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

const logos = [
  {
    src: 'https://cil.nus.edu.sg/wp-content/uploads/2017/07/CIL-logo-new200px.png',
    alt: 'CIL logo',
    style: { width: '100%' },
  },
  {
    src: 'https://www.nus.edu.sg/images/default-source/base/logo.png',
    alt: 'NUS logo',
    style: { width: '100%' },
  },
  {
    src: 'https://www.tmsi.nus.edu.sg/wp-content/uploads/2019/07/logo.png',
    alt: 'TMSI logo',
    style: { width: '100%' },
  },
  {
    src: 'https://www.unep.org/themes/custom/cobsea/img/cobsea-logo-coloured-270.png',
    alt: 'COBSEA logo',
    style: { width: '100%' },
  },
  {
    src: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.deccanchronicle.com%2Fdc-Cover-h05edmoc1abv29uesh8d2688u7-20161126031220.Medi.jpeg&f=1&nofb=1',
    alt: 'COBSEA logo',
    style: { width: '100%' },
  },
  {
    src: 'https://scontent-xsp1-3.xx.fbcdn.net/v/t31.18172-8/10517932_943339989026844_5663893844953495730_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OpDCpQ5F1d8AX_GP6Dq&_nc_ht=scontent-xsp1-3.xx&oh=163fd0ee9ee797d35483238f93d3448d&oe=60E99E01',
    alt: 'COBSEA logo',
    style: { maxHeight: 80, margin: 'auto', display: 'block' },
  },
]

export default function AboutSection() {
  const classes = useStyles()

  return (
    <>
      <Typography
        variant='h2'
        component='h1'
        align='center'
        className={classes.title}
      >
        About
      </Typography>
      <Typography
        variant='body1'
        align='justify'
        className={classes.body}
      >
        Welcome to the (temporary) resource page for marine plastic researchers in Southeast and East Asia.
        <br /><br />
        This temporary resource site is designed to provide resources on research on marine plastic pollution to researchers in Southeast and East Asia (SE-EA), pending the development of an research inventory and resource platform to that effect. The development of this  on-line tool, which  will further support the regional node of the Global Partnership for Marine Litter (GMPL), is being led by the Coordinating Body for the Seas of East Asia (COBSEA).
        <br /><br />
      </Typography>
      <div style={{ textAlign: 'center' }}>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          component={RouterLink}
          to='/about'
        // style={{  }}
        >
          Learn more about us
        </Button>
      </div>
      <br /><br />
      <Grid
        container
        spacing={5}
        justify="center"
        alignItems='center'
      >
        {logos.map((logo, idx) => (
          <React.Fragment key={idx}>
            <Grid item xs={5} sm={3} md={3}>
              <img src={logo.src} alt={logo.alt} style={logo.style} />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
      <br /><br />
    </>
  )
}