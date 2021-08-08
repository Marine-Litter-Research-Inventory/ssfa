import React from 'react';
import { IconButton, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { styled } from '@material-ui/system';

import LinkRoundedIcon from '@material-ui/icons/LinkRounded';
import { Divider } from '@material-ui/core';

const links1 = [
  { title: 'TIDES by Ocean Conservancy', href: 'https://www.coastalcleanupdata.org/' },
]

const links2 = [
  { title: 'Litter Intelligence by Sustainable Coastlines', href: 'https://litterintelligence.org/' },
  { title: 'Summary of Data Collection Methodology (v1.5)', href: 'https://litterintelligence.org/media/yjjdjjmo/5-sc_litter-intelligence-methodology-v1-5.pdf' },
  { title: 'Litter Audit Data Sheet (v3.1)', href: 'https://litterintelligence.org/media/meifrai0/1-sc_litter-intelligence-data-sheet-v3-1.pdf' },
  { title: 'Survey Area & Large Items Data Sheet (v1.4)', href: ' https://litterintelligence.org/media/3x2bdhyb/clean-up-_-transect-_-audit-event-health-and-safety-plan-v3.pdf' },
  { title: 'Visual Assessment Photo Reference Guide (v1.3)', href: ' https://litterintelligence.org/media/rvrn4pmf/6-sc_litter-intelligence-visual-assessments-v1-3.pdf' },
  { title: 'Beach Surface Photo Reference Guide (v1.0)', href: 'https://litterintelligence.org/media/tooll23z/sc_litter-intelligence_beach-surface-guide.pdf' },
  { title: 'Litter Photo-Taking Reference Guide (v1.1)', href: 'https://litterintelligence.org/media/mtvb0p2u/11-sc_litter-intelligence-ai-photo-guidev1-1.pdf' },
]

const links3 = [
  { title: 'Global Partnership on Marine Litter Digital Platform by United Nations Environment Programme', href: 'https://digital.gpmarinelitter.org/' },
]

const links4 = [
  { title: 'International Marine Litter Database by one earth-one ocean', href: 'https://oneearth-oneocean.com/en/category/international-marine-litter-database/' },
  { title: 'Knowledge Bank by The Circular Initiative', href: 'https://www.thecirculateinitiative.org/knowledge-bank' },
  { title: 'Plastics Pollution Policy Inventory by Nicholas Institute for Environmental Policy Solutions, Duke University', href: 'https://nicholasinstitute.duke.edu/plastics-policy-inventory/search' },
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

const CustomizedList = ({ classes, links }) => (
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
)

const CustomizedDivider = () => (
  <Divider variant='middle' style={{ borderColor: 'white' }} />
)

export default function Other() {
  const classes = useStyles();

  return (
    <div>
      <Header variant='h4' >
        Other Data Repositories & Infographics
      </Header>

      <SubHeader variant='h5'>
        Global data repositories of marine plastic surveys and monitoring
      </SubHeader>
      <CustomizedList classes={classes} links={links1} />
      <CustomizedDivider />

      <SubHeader variant='h5'>
        Resources for NGOs and civil society initiatives with infographics
      </SubHeader>
      <CustomizedList classes={classes} links={links2} />
      <CustomizedDivider />

      <SubHeader variant='h5'>
        UN Resource Platform: GPML
      </SubHeader>
      <CustomizedList classes={classes} links={links3} />
      <CustomizedDivider />

      <SubHeader variant='h5'>
        Global literature repositories
      </SubHeader>
      <CustomizedList classes={classes} links={links4} />
      <CustomizedDivider />

    </div>
  )
}