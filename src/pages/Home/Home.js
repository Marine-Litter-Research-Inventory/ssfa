import React from 'react';
import { Container, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link as RouterLink } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import { getFromStorage } from 'components/utils/utils';
import WaveUpper from 'components/StyledComponents/WaveUpper';
import WaveLower from 'components/StyledComponents/WaveLower';
import Header from 'components/StyledComponents/Header';
import Body from 'components/StyledComponents/Body';
import HeaderRibbon from 'components/StyledComponents/HeaderRibbon';
import StyledLink from 'components/StyledComponents/StyledLink';

const exportedData = getFromStorage('exportedData')

const Wrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  marginBottom: '6rem',
}))

export default function Home() {

  return (
    <div>
      <Header variant='h2'>
        Home
      </Header>
      <Wrapper>
        <WaveUpper />
        <Container maxWidth='md'>
          <div style={{ height: 100 }} />
          <Body variant='body1' align='justify'>
            This website provides access to a Research Inventory of marine plastics coordinated by the National University of Singapore and completed in November 2021 with a view of supporting the development of a regional node of the Global Partnership for Marine Litter (GMPL) under the leadership of the Coordinating Body for the Seas of East Asia (COBSEA).
            <br />
          </Body>
          <div style={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="secondary"
              component={RouterLink}
              to='/about'
            >
              Learn more about us
            </Button>
          </div>
        </Container>
        <br />
        <WaveLower />
      </Wrapper>
      <Container maxWidth="md">
        <Body>
          The Regional Research Inventory (RRI 2.0) includes all the published research material that could be found online by the regional project team (see 'About') on pollution from marine plastics in the seas of East Asia and responses to it in all fields of research.  These therefore include scientific publications as well as research publications from humanities (ie, law, policy, political science, social science and economics). In addition to research publications in the English language, the regional project team actively looked for publications in local languages and extracted them into the inventory, with the support of local members of the team.  Further details of the research methodology are available in the&nbsp;
          <StyledLink to="/data/methodology-and-ontology">
            Methodology and Ontology
          </StyledLink>
          &nbsp;section of&nbsp;
          <StyledLink to="/data/methodology-and-ontology">
            Data and Analytics.
          </StyledLink>
        </Body>
        <HeaderRibbon
          text="RRI 2.0"
          color="secondary"
          variant="h6"
        />
        <Body>
          <li> builds on the work conducted by the marine plastic policy team of NUS since 2018 which led to a first version of the research inventory in early 2020. It also relied on the regional research network developed in parallel. These two inventories have been developed as deliverables of a project supported by the United Nations Environment Programme (UNEP), the Coordinating Body on the Seas of East Asia (COBSEA) and the Global Partnership on Marine Litter (GPML) and with funding from the SEA circular project supported by the Government of Sweden. Part of the funding required was also provided by complementary research funding to members of the teams from the NUS Centre for International Law (CIL) and the Tropical Marine Science Institute (TMSI).</li>
          <br />
          <li>is a database of information extracted from the publications found by the regional project team. As of 4 December, it includes 699 publications. For each of these, information has been extracted systematically into 77 metadata fields, as set out in the&nbsp;
            <StyledLink to="/data/methodology-and-ontology">
              Methodology and Ontology.
            </StyledLink>
          </li>
          <br />
          <li>could not have been developed without the research energy of regional researchers focused on the protection of the marine environment and their goodwill to cooperate in order to improve the status of the marine environment in general, including from marine plastics. The regional research team hope that RRI 2.0 can be further developed and leveraged for policy-making purposes with continuing regional cooperation and partnership between research institutions.</li>
          <br />
          This website seeks to increase the accessibility of RRI 2.0 to an audience who may be unfamiliar with the use of this type of database. It includes visual graphs and analytics of the data extracted from the research publications which were developed with the aim of answering the 'so what' question of the research landscape of the findings. As a result, these visual displays can only represent the data captured from publications; they are based on the findings of studies that led to these publications. Studies that did not lead to publications that are available on the internet could not be included. The full inventory RRI 2.0 can be downloaded&nbsp;
          <CSVLink
            data={exportedData}
            filename={"Masterlist of Literature Articles.csv"}
            style={{
              color: "#9c4a55",
              fontWeight: 'bold',
            }}
          >
            here.
          </CSVLink>
          <br /><br />
          This website has been developed as an evolutive tool. It is entirely developed with free software and open-source codes and is designed to be regularly updated and enriched.
        </Body>
      </Container>
    </div>
  )
}