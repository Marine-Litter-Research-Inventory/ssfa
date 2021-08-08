import React from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import { styled } from '@material-ui/system';

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

export default function Understanding() {

  return (
    <div>
      <Header variant='h4'>
        Understanding Marine Plastic Research in SE-EA
      </Header>
      <SubHeader variant='h5' align='center'>
        Inventory of scientific research on marine plastics in the region
      </SubHeader>
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
      <SubHeader variant='h5' align='center'>
        Anatomy of research on marine plastics in Southeast and East Asia - Towards a regional approach (Webinar Series Summary)
      </SubHeader>
      <SubHeader variant='h6'>
        Session 1: Field sampling for marine plastics - good practices and current constraints
      </SubHeader>
      <Body variant='body1'>
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
      </Body>
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