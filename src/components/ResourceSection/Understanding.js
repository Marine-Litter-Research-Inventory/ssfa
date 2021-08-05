import React from 'react';
import { //List, ListItem, ListItemText, 
  Typography, Button, Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    color: 'ghostWhite',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '2rem',
  },
  body: {
    color: 'ghostWhite',
    textAlign: 'justify',
    padding: '1rem',
  },
  subtitle: {
    color: 'ghostWhite',
    fontWeight: 'bold',
    padding: '1rem',
  },
  link: {
    color: 'antiqueWhite',

  },
  button: {
    backgroundColor: 'ghostWhite',
  }
}))

export default function Understanding() {
  const classes = useStyles();

  return (
    <div>
      <Typography
        variant='h4'
        className={classes.title}
      >
        Understanding Marine Plastic Research in SE-EA
      </Typography>
      <Typography
        variant='h5'
        align='center'
        className={classes.subtitle}
      >
        Inventory of scientific research on marine plastics in the region
      </Typography>
      <br />
      <Box style={{ textAlign: 'center' }}>
        <Button
          variant='outlined'
          href='https://docs.google.com/spreadsheets/d/1r4aCVQeCS1cj_Rhip82yVTNNnxkWDgFwbEIHCR_oASk/edit#gid=0'
          style={{
            color: 'ghostWhite',
            borderColor: 'ghostWhite'
          }}
        >
          Click here to learn more!
        </Button>
      </Box>
      <br /><br />
      <Typography
        variant='h5'
        className={classes.subtitle}
      >
        Anatomy of research on marine plastics in Southeast and East Asia - Towards a regional approach (Webinar Series Summary)
      </Typography>
      <Typography
        variant='h6'
        className={classes.subtitle}
      >
        Session 1: Field sampling for marine plastics - good practices and current constraints
      </Typography>
      <Typography
        variant='body1'
        className={classes.body}
      >
        Participants shared practices and constraints faced in field sampling operations for marine plastic debris through the following approaches:
        <br /><br />
        - Questionnaires sent to participants before and during the meeting,
        <br />
        - Group discussions about the responses to the Questionnaires.
        <br /><br />
        The main points made by the participants can be summarised as follows:
        <br /><br />
        - There is a strong eagerness to develop regional practices and harmonise approaches in Southeast Asia (of note, invited participants in China, Japan, and RO Korea did not respond);
        <br />
        - There is a need for specific sampling guidance for sensitive habitats (e.g. seagrass, coral reefs, mangrove)
        <br />
        - Several participants shared their confusion with the sampling guidelines due to their number, length and differences in framing. With respect to sampling guidelines for macro and microplastics on the shoreline, submerged sediments, water column etc, participants would appreciate a compendium of existing relevant guidelines to determine which to use and how;
        <br />
        - NGOs highlighted a need for infographics on the guidelines to facilitate their adoption of scientific methodology, so that citizen science data can complement scientific research
        <br />
        - Sampling processes are limited by lack of availability of appropriate field sampling equipment and tools (e.g., adequate mesh sizes, manta nets)
        <br />
        - Sampling processes are also limited by the lack of funding, equipment and machinery for analysis, which in turn, restricts the samples that can be collected and analysed;
        <br />
        - Lack of online resources that meet their needs and would be easily accessible;
        <br />
        - General disconnect between government knowledge/understanding at local and national levels, and on-going research;
        <br />
        - Many expressed their enthusiasm to participate in the upcoming webinars and continue the regional discussion.
      </Typography>
      {/* 
      <List>
        {links.map((link, idx) => (
          <ListItem key={idx}>
            <ListItemText
              className={classes.link}
              primary={link.title}
            />
          </ListItem>
        ))}
      </List> */}
    </div >
  )
}