import React from 'react';
import Masonry from 'react-masonry-css'
import { Typography, Container, Divider, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import NavCard from 'components/Navigation Bar/NavCard';

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
  }
}))

const cards = [
  {
    title: 'CSIRO: Survey Methodology Handbook (2020) and other resources and factsheets',
    src: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.inclusiveemployers.com.au%2Fwp-content%2Fuploads%2F2016%2F12%2FCSIRO-Logo.png&f=1&nofb=1',
    path: 'https://research.csiro.au/marinedebris/resources/'
  },
  {
    title: 'GESAMP:  Guidelines for the Monitoring and Assessment of Plastic Litter in the Ocean (2019)',
    src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jep8mv76T_bvJNbuKFKY4gAAAA%26pid%3DApi&f=1',
    path: 'http://www.gesamp.org/publications/guidelines-for-the-monitoring-and-assessment-of-plastic-litter-in-the-ocean '
  },
  {
    title: 'UNEP-IOC Guidelines on Survey and Monitoring of Marine Litter (2009)',
    src: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.deccanchronicle.com%2Fdc-Cover-h05edmoc1abv29uesh8d2688u7-20161126031220.Medi.jpeg&f=1&nofb=1',
    path: 'https://wedocs.unep.org/xmlui/handle/20.500.11822/13604 ',
    style: { padding: 10, boxSizing: 'border-box' }
  },
  {
    title: 'Japan’s Guidelines for Harmonizing Ocean Surface Microplastic (2020)',
    src: 'https://www.env.go.jp/en/common/img/logo_en.png',
    path: 'https://www.env.go.jp/en/water/marine_litter/method.html',
    style: { padding: 10, boxSizing: 'border-box', minHeight: 50, }
  },
  {
    title: 'NOAA: Guidelines and Recommendations',
    src: 'https://marinedebris.noaa.gov/sites/default/files/banner_background/MDP_web_banner_750_12.05.16.jpg',
    path: 'https://marinedebris.noaa.gov/reports-and-technical-memos',
    style: { minHeight: 35, boxSizing: 'border-box' }
  },
]

const breakpoints = {
  default: 4,
  960: 3,
  600: 1,
};

export default function Guidelines() {
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
          Sampling & Processing Guidelines
        </Typography>
      </div>
      <Container maxWidth='md'>
        <Typography
          variant='body1'
          className={classes.body}
        >
          [This page was last updated on 7th May 2021.]
          <br /><br />
          A number of different guidelines have been developed around the world for the sampling of plastic debris found in the marine environment to improve the comparability of the data and the establishment of pollution baselines and management targets. These have been developed by marine scientists but in different context; some at the request of intergovernmental bodies and others by the research community. They also have different substantive scope, such as a particular focus on the sampling of microplastics or of surface waters.
          <br /><br />
          Links to the guidelines that are the most frequently used in the region can be found below.
        </Typography>
        <br />
        <Divider />
        <br />
        <Typography
          variant='h4'
          component='h2'
          className={classes.subTitle}
        >
          Comparative table of scope of different guidelines
        </Typography>
        <Typography
          variant='h4'
          component='h2'
          className={classes.subTitle}
        >
          Links to the guidelines that are the most frequently used in the region
        </Typography>
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {cards.map((card, idx) => (
            <div key={idx}>
              <Link underline='none' href={card.path}>
                <NavCard title={card.title} src={card.src} style={card.style} />
              </Link>
            </div>
          ))}
        </Masonry>
      </Container>
    </>
  )
}