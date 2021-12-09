import React from 'react';
import { Container } from "@mui/material";
import Header from 'components/StyledComponents/Header';
import Body from 'components/StyledComponents/Body';
import HeaderRibbon from 'components/StyledComponents/HeaderRibbon';
import SubHeader from 'components/StyledComponents/SubHeader';

export default function Methodology() {
  return (
    <div>
      <Container maxWidth="md">
        <Header variant="h2" align="center">
          Methodology and Database Ontology
        </Header>
        <Body
          variant='body1'
          align="justify"
          sx={{ backgroundColor: theme => theme.palette.primary.main }}
        >
          The methodology and database ontology have been designed with the objective of building on on-going work efforts and not creating new terminology. To the extent possible, it uses common terms that are generally accepted by or can make sense to issue specialists as well as policy-making bodies. The methodology followed to select the publications included in the database is set out under Methodology below.Selected publications have been subsequently read by regional specialists to extract the information organised in 4 broad categories of information, with a total of 77 metadata fields, adopted for this database.This detailed extractions has been framed with the objective of making the regional publications more accessible to and usable by different stakeholder groups involved in different aspects of the response to pollution from marine plastics.These different metadata fields were also necessary to provide visualisation and analytics.
        </Body>
        <HeaderRibbon
          text="Overall Methodology"
          variant="h6"
          color="secondary"
        />
        <SubHeader variant="h6">
          Identification of relevant publications and data extraction
        </SubHeader>
        <Body variant="body1" align="justify">
          The identification of relevant publications and data extraction has been carried out by the Singapore-based core team and the extended regional team, according to the area of expertise of each researcher.  Target publications for inclusions are those that relate to any aspect of pollution from marine plastics in Southeast and East Asia until July 2021; not including publications that would relate solely to the production of plastic material and products or the upstream management of waste. The RRI 2.0 built on the publications already captured in the previous version of the inventory available here. [LINK]
          <br /><br />
          The search for new publications sought to include publications which were released since or would have been mistakenly omitted. It also extended the database to non-english publications. The search for publications was limited to contents which could be found online (even if only the abstract). A number of search engines were used with key words from the metadata fields and research topic (see the guidance below). They included but were not limited to Google scholars. Domestic academic collections accessible to the regional team were also consulted; this enabled the inclusion of relevant PhD dissertations conducted in the region. Japanese-language papers could not be searched due to the lack of a Japanese researcher in the regional team. It is hoped that the regional team can be enlarged to new researchers from Japan and Korea in order to complete the database, make it more representative and improve the accessibility of the papers.
          <br /><br />
          RRI 2.0 includes non peer-reviewed publications provided that they contain primary research content and/or verifiable data presented with rigour so that the metadata fields could be filled reliably. In countries where there has been less peer-reviewed publications released, non-peer publications can be particularly useful substitutes. Furthermore, not all sampling reports lend themselves to a research publication whilst being fully relevant to and useful in the context of this database. Of note in this context, most of the non-English papers that could be found were peer-reviewed.
        </Body>
        <SubHeader variant="h6">
          Website Development
        </SubHeader>
        <Body variant="body1" align="justify">
          This website is developed using the following open source library:
          <li>React.js</li>
          <li>Material UI</li>
          <br />
          All the data is queried directly from our inventory on Google Sheet. The data is then transformed into a format that is easily accessible and usable by the website. This approach simplified the development and maintenance needed and facilitates the migration of the dataset or the visualisation to a different platform. The website content is dynamic and is refreshed everyday.
        </Body>
        <HeaderRibbon
          text="Guidance to the Research Inventory metadata fields"
          variant="h6"
          color="secondary"
        />
        <SubHeader variant="h6">
          Article Information
        </SubHeader>
        <Body variant="body1" align="justify">
          This first category of extracted data includes general and non-substantive information on the publication (author, date, research institutions, etc).
        </Body>
        <SubHeader variant="h6">
          Research Scope
        </SubHeader>
        <Body variant="body1" align="justify">
          This second category of extracted data seeks to identify different elements in the scoping of the research and the resulting publication. It includes high level substantive information on the research and publication, such as the aim of the research which is a critical element to determine how to use the research findings, the water body concerned, the nature of the research (science or humanities and of which type), macro- or microplastics, etc.
        </Body>
        <SubHeader variant="h6">
          Research Methodology
        </SubHeader>
        <Body variant="body1" align="justify">
          This third category of extracted data provides a description of the underlying research methodology and research type such as field sampling (and which part of the marine environment), modelling, lab-based only, desktop, etc. Where possible it also includes information on the technical equipment and technology used. This is particularly useful to understand capacity needs as well as elements of data comparability.
        </Body>
        <SubHeader variant="h6">
          Research Findings
        </SubHeader>
        <Body variant="body1" align="justify">
          This fourth category starts with a summary of key findings for each publication. It also includes the research topics covered (as set-out below), source of marine plastics (where identified) and reported results (where they could be extracted).
        </Body>
      </Container>
    </div>
  )
}