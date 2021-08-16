import React from 'react';
import {
  Typography, Container, Chip, Divider, Collapse,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Card, CardContent,
  IconButton, List, ListItem, ListItemText,
} from '@material-ui/core';
import { styled } from '@material-ui/system';

import LinkRoundedIcon from '@material-ui/icons/LinkRounded';

// Content Formatter
const formatData = (date, session, description) => {
  return { date, session, description }
}
const formatContent = (session, focus, format, summary, outcome) => {
  return { session, focus, format, summary, outcome }
}

// Content declaration aka constants
const headers = ['Date (2021)', 'Session', 'Description']
const rows = [
  formatData('March 21', 1, 'Field sampling for marine plastics - good practices and current constraints'),
  formatData('May 7', 2, 'Sample processing techniques - practices and constraints'),
  formatData('June 2', 3, 'Data templates and comparability - developing benchmark units for conversion'),
  formatData('July 8', 4, 'Identifying plastic pollution hotspots - ecological and socio-economic perspectives')
]
const contents = [
  formatContent(
    1,
    'Exchange knowledge on sampling protocols of marine macro- and microplastics on beaches, marine sediments, water columns, etc. The challenges that are encountered were also discussed.',
    <>
      During the Zoom meeting, we provided a brief introduction to the webinar series and the first session and invited participants to introduce themselves before setting-up two breakout rooms. These break-out rooms were based on participant’s field sampling experience: (i) Boat group, which comprised researchers who have field sampling experience/knowledge on water bodies, including water surface and the seabed; and (ii) Intertidal group, which comprised researchers who have field sampling experiences/knowledge on coastal, intertidal and shallow coastal zones, such as mangroves and beaches (sampling by foot).
      <br /><br />
      Within each breakout room, participants were first given time to fill in a questionnaire on the specifics of their field sampling experiences, tools and techniques. Their responses provided the basis for our discussions. We started with an instant presentation of the outcome that we used to focus on their research needs and constraints. Lastly, participants gathered back into the main Zoom session and concluded the webinar session.
      <br /><br />
      The questionnaire responses from the webinar can also be accessed here: &nbsp;
      <a
        href='https://docs.google.com/forms/d/13PZ_xf-AcLy3yDaRk5LuNLikBVZbPqyWT7JgBiXc69Y/viewanalytics'
      >
        Link
      </a>
    </>,
    <>
      <li>
        There is a strong eagerness to develop regional practices and harmonise approaches in Southeast Asia (of note, invited participants in China, Japan, and RO Korea did not respond);
        There is a need for specific sampling guidance for sensitive habitats (e.g., seagrass, coral reefs, mangrove);
      </li>
      <li>
        Several participants shared their confusion with the sampling guidelines due to their number, length and differences in framing. With respect to sampling guidelines for macro and microplastics on the shoreline, submerged sediments, water column etc, participants would appreciate a compendium of existing relevant guidelines to determine which to use and how;
      </li>
      <li>
        NGOs highlighted a need for infographics on the guidelines to facilitate their adoption of scientific methodology, so that citizen science data can complement scientific research;
        Sampling processes are limited by lack of availability of appropriate field sampling equipment and tools (e.g., adequate mesh sizes, manta nets);
      </li>
      <li>
        Sampling processes are also limited by the lack of funding, equipment and machinery for analysis, which in turn, restricts the samples that can be collected and analysed;
        Lack of online resources that meet their needs and would be easily accessible;
      </li>
      <li>
        General disconnect between government knowledge/understanding at local and national levels, and on-going research;
        Many expressed their enthusiasm to participate in the upcoming webinars and continue the regional discussion.
      </li>
    </>,
    'One of the key findings was the need for a centralised platform for easy access to research resources on marine plastics for the region.'
  ),
  formatContent(
    2,
    'Discuss the methodologies and practices in the lab processing of marine plastic samples that are commonly adopted in the region. This will involve steps such as extraction, digestion/separation, quantification and characterisation using microscopy and/or spectroscopy.',
    <>
      During the Zoom meeting, we provided a brief introduction of the webinar series with a short recap of the first session as an introduction to the second session. We then invited participants to introduce themselves before setting-up breakout rooms. Two break-out rooms comprise randomly selected but equal numbers of participants with a range of background and expertise in processing marine plastics in the lab.
      <br /><br />
      Within each breakout room, participants had filled in a questionnaire on the specifics of their sample processing experience that includes techniques on density separation, biological or chemical digestion, plastic quantification and characterisation, as well as laboratory controls. We held discussions based on the questionnaire responses to understand their research needs and constraints. Lastly, participants gathered back into the main Zoom session for a sharing of findings, final points and conclusion of the webinar session.
      <br /><br />
      Participants shared practices and constraints faced in sample processing for marine plastic debris through the following approaches:
      <li>
        Questionnaires sent to participants during the meeting,
      </li>
      <li>
        Group discussions about the responses to the Questionnaires.
      </li>
      <br />
      The questionnaire responses from the webinar can also be accessed here: &nbsp;
      <a
        href='https://docs.google.com/forms/d/1wDm5ssrzRRmxy13LItv5aqUxqD0bI4Yf5T4AbUZRDYE/viewanalytics'
      >
        Link
      </a>
    </>,
    <>
      <li>
        Majority of the participants in Southeast Asia welcomed the idea of having a shared guideline for the region in sample processing, but raised the following challenges (of note, invited participants in China, Japan, and RO Korea did not respond or were unavailable);
      </li>
      <li>
        Availability of manpower for the marine plastic research was highlighted as a key constraint in Southeast Asia, with varying types of manpower detail dedicated for plastic research (e.g. part-time research assistants/technicians, dissertation students, informal researchers such as NGO interns, high school students);
      </li>
      <li>
        Participants reflected that they conducted trial and error of existing methodologies from various guidelines (i.e. NOAA, GESAMP, CSIRO, etc…) to determine their own lab’s methodology;
      </li>
      <li>
        Several participants shared that the level of details in sample processing also depends on the following factors:
      </li>
      <div style={{ marginLeft: 20 }}>
        - Research aims based on a project funded by specific organisations (e.g. quantifying only the abundance and volume of macroplastics but no further classification of plastic type),
        <br />
        - Logistics of storage of samples (e.g. weight and quantity of samples amassed with difficulties to bring and store in lab),
        <br />
        - Efficacy of chemicals used at specific steps (e.g. potassium hydroxide versus hydrogen peroxide in enzymatic digestion step) and techniques (e.g. FTIR spectroscopy versus Nile Red for plastic quantification),
        <br />
        - Ease of acquiring consumables (e.g. difficulty in acquiring hydrogen peroxide for enzymatic digestion step, instead using less efficient potassium hydroxide),
        <br />
        - Availability of relevant equipment (e.g. some institutions do not have any spectroscopy for detailed analyses of plastic types),
      </div>
      <li>
        Several participants mentioned that current guidelines do not adequately address sample processing of microplastics within biota, and there is a desire for one in the region;
      </li>
      <li>
        Data comparability was raised during the overall zoom discussion where participants shared their constraints such as the lack of regional papers as benchmarks and difficulty in standardising sampling efforts as studies are context-dependent;
      </li>
      <li>
        Most expressed their enthusiasm to participate in the upcoming webinars and continue the regional discussion.
      </li>
    </>,
    'A key outcome was that sample processing can affect the extent of data comparability within the region, but there is a lack of guidance on how to improve data comparability. This outcome will be addressed in the following Session 3 in more depth.'
  ),
  formatContent(
    3,
    'Discuss and explore what data comparability means to the marine plastic research community, the benefits of data comparability in current and future research projects, as well as ways to improve data comparability for marine plastic research in the region.',
    <>
      During the Zoom meeting, we provided a brief introduction of the webinar series with a short recap of the previous two sessions on field sampling and sample processing, followed by the link to the third session, and finally invited the participants to introduce themselves before setting-up breakout rooms. Two break-out rooms comprise randomly selected but equal numbers of participants with a range of background and expertise in marine plastic research and policy.
      <br /><br />
      Within each breakout room, facilitators used the Zoom’s whiteboard function to engage with the participants in a series of predetermined questions to cover four broad aspects: 1) understanding data comparability, 2) barriers and challenges to data comparability, 3) when and where is data comparability important, and 4) improving data comparability within the region. Participants were encouraged to provide their responses to each guiding question that were captured on the whiteboard for further discussions. Lastly, participants gathered back into the main Zoom session and concluded the webinar session.
      <br /><br />
      Participants shared considerations on data comparability for marine plastic research through the following approaches:
      <li>
        Guiding questions posed to participants during the meeting
      </li>
      <li>
        Break-out group discussions about the responses to the guiding questions
      </li>
      <li>
        Overall group discussions about the session
      </li>
      <br />
      The questionnaire responses from the webinar can also be accessed here: &nbsp;
      <a
        href='https://docs.google.com/forms/d/1JUOE6E01r7drkymbLlZSYYvrDeuv7ck2_XdbEOcGBOY/viewanalytics'
      >
        Link
      </a>
    </>,
    <>
      <li>
        A diversity of the participants from Southeast Asia joined this webinar to discuss data comparability and templates (of note, invited participants in China, Japan, and RO Korea did not respond or were unavailable);
      </li>
      <li>
        Participants were asked to reflect on what ‘data comparability’ means to them, and the responses were varied depending on the participant’s background. Here are some examples:
      </li>
      <div style={{ marginLeft: 20 }}>
        - Use of standard units of measure for marine plastics,
        <br />
        - Use of standard or comparable methodologies for field sampling and sample processing to ensure results between studies can be compared,
        <br />
        - Comparable and realistic data that can be used for further responses and actions;
      </div>
      <li>
        Most participants strongly agree on the importance of data comparability for in-country marine plastic research for the following reasons:
      </li>
      <div style={{ marginLeft: 20 }}>
        - Improve cost-effectiveness through harmonisation of methodologies and protocols,
        <br />
        - Develop national standards for data collection and interpretation,
        <br />
        - Provide comparable data to deploy relevant countermeasures while ensuring sustainable utilisation of marine resources;
      </div>
      <li>
        Participant’s main resources for ensuring data comparability are existing global guidelines and recommendations (i.e. GESAMP, NOAA, MSFD, UNESCO, IOC-Westpac, MERI, ADB, World Bank, PEMSEA, COBSEA, IUCN) with some using published peer-reviewed papers, but still had to modify to suit in-country’s priorities, scenarios and conditions;
      </li>
      <li>
        Participants’ considerations on data comparability varied at different levels of their research work (e.g. research objectives and designs, funding source requirements, prior baselines, analysis of results for publications), as well as other challenges such as lack of necessary logistics (costs, manpower, equipment), variable field conditions, and lack of regional standards;
      </li>
      <li>
        On the other hand, several participants had pointed out that the consistency of methodologies used in marine plastic research was more critical than whether the final data can be compared
      </li>
      <li>
        Due to time constraints, the overall discussion to elude possible key components/criteria within research methodology to ensure data comparability was incomplete, with planned follow-ups (see Outcomes)
      </li>
      <li>
        Many participants have reflected and applaud the team’s efforts to bring together the regional community for such discussions and look forward to the final webinar
      </li>
    </>,
    'One of the key outcomes was a need to identify key components within research methodology to ensure data comparability in the region. Our team agreed to carry out an additional questionnaire to elucidate these components based on the community’s opinions. The target audience of this questionnaire was not limited to participants from Session 3, but extended to participants from Sessions 1 and 2 to cover a wider range of background and expertise. Results from the questionnaire are pending.'
  ),
  formatContent(
    4,
    'Explore usefulness of research inventory and its metadata to different groups with a view to improving them. This involved the consultation of researchers, policy-makers and local community groups on their needs and exploring questions that they frequently face.',
    <>
      During the Zoom meeting, we provided a brief introduction of the context for this webinar series and of a short recap of the previous three sessions, before focusing on the topic of this 4th and last webinar. Participants were also invited to introduce themselves, grouped by country.
      <br /><br />
      Before moving to breakout rooms, the research inventory was introduced to the participant: its origin, the approach taken in the development of the first iteration and the on-going review of the metadata and update..
      <br /><br />
      Two break-out rooms were then set-up. The first one and largest was composed of scientists focusing on the metadata of the inventory, the way in which they do or may use the inventory and any suggestions for improvement they had. The second group was composed of participants from governments or organisations which work with governments and focus on the use of research for policy making. We then returned to plenary discussions where the main points that arose from each discussion was shared with participants and open for further comments and questions.
    </>,
    <>
      <b>Main findings from the Scientific Group:</b>
      <li>
        Several data fields were suggested for inclusion: Plastic accumulation in biota, Plastic association with microbes, Impacts of marine plastics - e.g. human health, Quality control/assurance (e.g. whether study used blanks), Circulation/hydrodynamics studies, Alternative solutions, Limitation/recommendations from each publish research, Information on fishing gear
      </li>
      <li>
        Refining of methodology was also suggested, to include mesh size for net tows (or plankton nets)
      </li>
      <li>
        Reference was made to the  AWI LitterBase for consideration which is used by some and to whom they send updates
      </li>
      <li>
        Points made that 96 entrees from Malaysia that were provided to COBSEA need adding
      </li>
      <li>
        New references were also provided
      </li>
      <br />
      <b>Main findings from the Policy Group:</b>
      <br />
      It was a small group but productive discussion. For Myanmar, Thanga questioned the scoping of data we are interested in capturing in the inventory. She alluded to the example of a study of contaminants in oysters, including plastic. We explained our wide scoping of scientific + socio-economic of research/study on  marine plastics in general, emphasizing marine.
      <br /><br />
      The discussion focused primarily on work in Myanmar, Thailand and Vietnam. Key points that came up included:
      <li>
        Agreement to compare note on methodology and metadata in a separate meeting focusing on different scoping of on-going projects
      </li>
      <li>
        The methodology depends on what is requested by governments. In this context, training of government to better understand the limits of what can be provided by the researchers on the basis of their current capacity may be useful
      </li>
      <li>
        Strong on-going focus on  ADLFGs in MPAs/coral reefs, capture fisheries, ports
      </li>
      <li>
        The discussion also highlighted a frequent difficulty in  accessing and using data which is not digitally compiled in an exploitable forn (in the context of the catch the trash project for example)
      </li>
      <li>
        Other initiatives that were highlighted included research on global data comparability by Leeds University + app by global ghost gear initiative and data repository
      </li>
    </>,
    'The event highlighted the engagement of a number of participants and their desire for more networking and engagement at regional level. Several researchers also involved in the on-going update and improvement of the inventory also participated in the discussion. They all agreed to a mailing list to be set-up with visible email addresses to enable more communication and exchange. The organising team agreed to send a new questionnaire to build on this exchange in the context of the development of a research network. A new Google group has been also set-up for this purpose. The questionnaire is being developed and will be sent the week of 19 July 2021.'
  )
]
const links = [
  { title: 'CSIRO: Survey Methodology Handbook (2020) and other resources and factsheets', href: 'https://research.csiro.au/marinedebris/resources/' },
  { title: 'GESAMP:  Guidelines for the Monitoring and Assessment of Plastic Litter in the Ocean (2019)', href: 'http://www.gesamp.org/publications/guidelines-for-the-monitoring-and-assessment-of-plastic-litter-in-the-ocean' },
  { title: 'Japan’s Guidelines for Harmonizing Ocean Surface Microplastic (2020)', href: 'https://www.env.go.jp/en/water/marine_litter/method.html' },
  { title: 'NOAA: Guidelines and Recommendations', href: 'https://marinedebris.noaa.gov/reports-and-technical-memos' },
  { title: 'UNEP-IOC Guidelines on Survey and Monitoring of Marine Litter (2009)', href: 'https://wedocs.unep.org/xmlui/handle/20.500.11822/13604' },
]

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

// Component of pages
const Wave = () => {
  return (
    <div style={{ position: 'relative', height: 60 }}>
      <div className="custom-shape-divider-top-1625571579">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  )
}

const Header = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  // @ts-ignore
  padding: `${theme.mixins.toolbar.minHeight}px 20px`,
  boxSizing: 'border-box',
  color: 'ghostwhite',
  textAlign: 'center',
  backgroundColor: '#6FBFF5'
}))

const SubHeader = styled(Typography)({
  fontWeight: 'bold',
  padding: '1rem',
})

const Body = styled(Typography)({
  textAlign: 'justify',
  padding: '1rem',
})

const Subtitle = styled(Typography)({
  color: 'darkgrey',
})

const CustomizedList = ({ links }) => (
  <List>
    {links.map((link, idx) => (
      <ListItem key={idx}>
        <ListItemText
          primary={link.title}
        />
        <IconButton
          href={link.href}
        >
          <LinkRoundedIcon />
        </IconButton>
      </ListItem>
    ))}
  </List>
)

const CustomTable = ({ headers, rows, onClick, pos }) => {
  return (
    <TableContainer component={Paper}
      style={{
        backgroundColor: '#6FBFF5'
      }}
    >
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: '#2196f3' }}>
            {headers.map((header, index) => (
              <TableCell
                key={index}
                align='center'
                style={{ color: 'ghostWhite' }}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              onClick={() => onClick(index)}
              style={{
                backgroundColor: (index === pos) ? 'cornflowerblue' : 'inherit'
              }}
            >
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.session}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const SummaryCard = ({ content }) => {
  const [focus, setFocus] = React.useState(false)
  const [format, setFormat] = React.useState(false)
  const [summary, setSummary] = React.useState(false)
  const [outcome, setOutcome] = React.useState(false)

  return (
    <Card
      elevation={1}
      sx={{
        backgroundColor: 'aliceblue',
        borderRadius: '4rem',
      }}
    >
      <CardContent>
        <SubHeader variant='h4' align="center">
          Session {content.session}
        </SubHeader>

        <Divider>
          <Chip
            color='primary'
            label="Focus and Scoping"
            onClick={() => setFocus(!focus)}
          />
        </Divider>
        <Collapse in={focus} timeout="auto" unmountOnExit>
          <Body>
            {content.focus}
          </Body>
        </Collapse>
        <br />

        <Divider>
          <Chip
            color='primary'
            label="Session Format"
            onClick={() => setFormat(!format)}
          />
        </Divider>
        <Collapse in={format} timeout="auto" unmountOnExit>
          <Body>
            {content.format}
          </Body>
        </Collapse>
        <br />

        <Divider>
          <Chip
            color='primary'
            label="Summary of findings"
            onClick={() => setSummary(!summary)}
          />
        </Divider>
        <Collapse in={summary} timeout="auto" unmountOnExit>
          <Body>
            {content.summary}
          </Body>
        </Collapse>
        <br />

        <Divider>
          <Chip
            color='primary'
            label="Outcomes"
            onClick={() => setOutcome(!outcome)}
          />
        </Divider>
        <Collapse in={outcome} timeout="auto" unmountOnExit>
          <Body>
            {content.outcome}
          </Body>
        </Collapse>

      </CardContent>
    </Card>
  )
}

export default function Resources() {
  const [pos, setPos] = React.useState(0)

  const handleClick = (pos) => {
    setPos(pos)
  }

  return (
    <div>
      <Header variant='h2' align='center'>
        Resources
      </Header>
      <Wave />
      <br /><br />
      <Container maxWidth='md'>
        <SubHeader variant='h4' align='center'>
          Webinar series (March - June 2021)
        </SubHeader>
        <SubHeader variant='h5'>
          Anatomy of research on marine plastics in Southeast and East Asia - Towards a regional approach
        </SubHeader>
        <Body>
          Four-part webinar series is currently ongoing, with the first being held in March 2021, with participants from Southeast and East Asia. The webinar series creates a conducive virtual environment for small-group discussions on various topics within regional marine research. Organised by SJINML, NUS-CIL, the webinar aims to develop a regional research network, as well as contributing effectively to policy-making.
        </Body>

        <Subtitle variant="subtitle2">
          *Click on the row you want to select
        </Subtitle>
        <CustomTable
          headers={headers}
          rows={rows}
          onClick={handleClick}
          pos={pos}
        />
        <br /><br />

        <Subtitle variant="subtitle2">
          *Click on the blue text to extend the content
        </Subtitle>
        <SummaryCard content={contents[pos]} />
        <br /><br />

        <SubHeader variant='h4' align='center'>
          External Resources
        </SubHeader>
        <SubHeader variant='h5'>
          Sampling & Processing Guidelines
        </SubHeader>
        <Body>
          A number of different guidelines have been developed around the world for the sampling of plastic debris found in the marine environment to improve the comparability of the data and the establishment of pollution baselines and management targets. These have been developed by marine scientists but in different context; some at the request of intergovernmental bodies and others by the research community. They also have different substantive scope, such as a particular focus on the sampling of microplastics or of surface waters.
          <br /><br />
          Links to the guidelines that are the most frequently used in the region can be found below.
        </Body>
        <List>
          {links.map((link, idx) => (
            <ListItem key={idx}>
              <ListItemText
                primary={link.title}
              />
              <IconButton
                href={link.href}
              >
                <LinkRoundedIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>

        <SubHeader variant='h5'>
          Global data repositories of marine plastic surveys and monitoring
        </SubHeader>
        <CustomizedList links={links1} />

        <SubHeader variant='h5'>
          Resources for NGOs and civil society initiatives with infographics
        </SubHeader>
        <CustomizedList links={links2} />

        <SubHeader variant='h5'>
          UN Resource Platform: GPML
        </SubHeader>
        <CustomizedList links={links3} />

        <SubHeader variant='h5'>
          Global literature repositories
        </SubHeader>
        <CustomizedList links={links4} />

      </Container>
    </div>
  )
}