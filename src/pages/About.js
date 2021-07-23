import React from 'react';
import { Typography, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  // background: {
  //   maxHeight: 300,
  //   backgroundImage: "url('/images/background.png')",
  //   backgroundSize: '200%',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center',
  // },
  title: {
    fontWeight: 'bold',
    maxWidth: 900,
    // @ts-ignore
    padding: `${theme.mixins.toolbar.minHeight}px 20px`,
    boxSizing: 'border-box',
    color: 'ghostwhite'
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
      <div style={{ backgroundColor: '#6FBFF5' }}>
        <Typography
          variant='h2'
          component='h1'
          align='center'
          className={classes.title}
          style={{ margin: '0 auto' }}
        >
          About this Resource Site
        </Typography>
      </div>
      <div style={{ position: 'relative', height: 60 }}>
        <div className="custom-shape-divider-top-1625571579">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
          </svg>
        </div>
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
          justifyContent="center"
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