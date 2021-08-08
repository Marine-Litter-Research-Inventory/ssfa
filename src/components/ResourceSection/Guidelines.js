import React from 'react';
import { IconButton, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { styled } from '@material-ui/system';

import LinkRoundedIcon from '@material-ui/icons/LinkRounded';

const links = [
  { title: 'CSIRO: Survey Methodology Handbook (2020) and other resources and factsheets', href: 'https://research.csiro.au/marinedebris/resources/' },
  { title: 'GESAMP:  Guidelines for the Monitoring and Assessment of Plastic Litter in the Ocean (2019)', href: 'http://www.gesamp.org/publications/guidelines-for-the-monitoring-and-assessment-of-plastic-litter-in-the-ocean' },
  { title: 'Japan’s Guidelines for Harmonizing Ocean Surface Microplastic (2020)', href: 'https://www.env.go.jp/en/water/marine_litter/method.html' },
  { title: 'NOAA: Guidelines and Recommendations', href: 'https://marinedebris.noaa.gov/reports-and-technical-memos' },
  { title: 'UNEP-IOC Guidelines on Survey and Monitoring of Marine Litter (2009)', href: 'https://wedocs.unep.org/xmlui/handle/20.500.11822/13604' },
]

const useStyles = makeStyles({
  link: {
    color: 'antiqueWhite',
  },
})

const Header = styled(Typography)({
  color: 'ghostWhite',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '2rem',
})

const SubHeader = styled(Typography)({
  color: 'ghostWhite',
  fontWeight: 'bold',
  padding: '1rem',
})

const Body = styled(Typography)({
  color: 'ghostWhite',
  textAlign: 'justify',
  padding: '1rem',
})

export default function Guidelines() {
  const classes = useStyles();

  return (
    <div>
      <Header variant='h4'>
        Sampling & Processing Guidelines
      </Header>
      <Body variant='body1'>
        A number of different guidelines have been developed around the world for the sampling of plastic debris found in the marine environment to improve the comparability of the data and the establishment of pollution baselines and management targets. These have been developed by marine scientists but in different context; some at the request of intergovernmental bodies and others by the research community. They also have different substantive scope, such as a particular focus on the sampling of microplastics or of surface waters.
        <br />
      </Body>
      <SubHeader variant='h5'>
        Links to the guidelines that are the most frequently used in the region
      </SubHeader>
      <List>
        {links.map((link, idx) => (
          <ListItem key={idx}>
            <ListItemText
              className={classes.link}
              primary={link.title}
            />
            <IconButton
              href={link.href}
            >
              <LinkRoundedIcon className={classes.link} />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  )
}