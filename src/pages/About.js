import React from 'react';
import { Typography, Container, Grid } from '@material-ui/core';
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
    alt: 'UNEP logo',
    style: { width: '100%' },
  },
  {
    src: 'https://scontent-xsp1-3.xx.fbcdn.net/v/t31.18172-8/10517932_943339989026844_5663893844953495730_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OpDCpQ5F1d8AX_GP6Dq&_nc_ht=scontent-xsp1-3.xx&oh=163fd0ee9ee797d35483238f93d3448d&oe=60E99E01',
    alt: 'StJohn logo',
    style: { maxHeight: 140, margin: 'auto', display: 'block' },
  },
]

export default function About() {
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
          About this Resource Site
        </Typography>
      </div>
      <Container maxWidth='md'>
        <Typography
          variant='body1'
          className={classes.body}
        >
          This temporary resource site is designed to provide resources on research on marine plastic pollution to researchers in Southeast and East Asia (SE-EA), pending the development of an research inventory and resource platform to that effect. The development of this  on-line tool, which  will further support the regional node of the Global Partnership for Marine Litter (GMPL), is being led by the Coordinating Body for the Seas of East Asia (COBSEA).
          <br /><br />
          This initiative takes place in the wider context of a series of research projects undertaken by the Policy-Science Research Team of the National University of Singapore (NUS) with a view to strengthen the overall understanding of marine plastic research in SE-EA, the state of knowledge, as well as practices and issues faced. In this context, NUS and COBSEA/UNEP have undertaken two successive projects. The first one concluded with the online publication of an inventory of marine plastic research in SE-EA in Auguste 2020. The current project started on 1 January 2021.
          <br /><br />
          In order to gain a more practical understanding of the practices and constraints faced by marine plastic researchers in the region, NUS Marine Plastic Science-Policy Team organised a four-part webinar series to consult with them (more information on the webinars in "Understanding Marine Plastic Research in SE-EA"). One of the key outcome of the first webinar was the need for a central location where ‘regionally relevant’ resources could be accessed from. This is the purpose of this webpage.
        </Typography>
        <br />
        <Grid
          container
          spacing={5}
          justify="center"
          alignItems='center'
        >
          {logos.map((logo, idx) => (
            <React.Fragment key={idx}>
              <Grid item xs={9} sm={3} md={3}>
                <img src={logo.src} alt={logo.alt} style={logo.style} />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </>
  )
}