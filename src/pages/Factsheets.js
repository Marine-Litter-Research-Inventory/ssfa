import React from 'react';
import { Grid, Typography, Container, Paper, Skeleton } from '@mui/material';
import { styled } from '@mui/system';

function factsheetFormatter(title, description, link) {
  return {
    title,
    description,
    link,
  }
}

const factsheets = [
  factsheetFormatter(
    '1. Research on Marine Plastics 101',
    'This is a description of the research on marine plastics 101',
    'http://africau.edu/images/default/sample.pdf'
  ),
  factsheetFormatter(
    '1. Research on Marine Plastics 101',
    'This is a description of the research on marine plastics 101',
    'https://en.unesco.org/inclusivepolicylab/sites/default/files/dummy-pdf_2.pdf'
  ),
  factsheetFormatter(
    '1. Research on Marine Plastics 101',
    'This is a description of the research on marine plastics 101',
    'https://en.unesco.org/inclusivepolicylab/sites/default/files/dummy-pdf_2.pdf'
  ),
  factsheetFormatter(
    '1. Research on Marine Plastics 101',
    'This is a description of the research on marine plastics 101',
    'https://en.unesco.org/inclusivepolicylab/sites/default/files/dummy-pdf_2.pdf'
  ),
]

const Header = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  padding: `60px 20px`,
  boxSizing: 'border-box',
  textAlign: 'center',
}))

const Body = styled(Typography)(({ theme }) => ({
  margin: 'auto',
  boxSizing: 'border-box',
  padding: 20,
  marginBottom: 30,
  backgroundColor: theme.palette.primary.main,
}))

const CustomizePaper = ({ title, description, link }) => {

  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.quaternary.main,
    color: "white"
  }))

  const PaperTitle = ({ title }) => {
    return (
      <Typography
        variant="body1"
        style={{
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: "1rem",
        }}
      >
        {title}
      </Typography>
    )
  }

  const PaperDescription = ({ description }) => {
    return (
      <Typography
        variant="subtitle2"
        style={{
          marginBottom: "1rem",
        }}
      >
        {description}
      </Typography>
    )
  }

  return (
    <StyledPaper style={{ padding: "0.8rem" }}>
      <PaperTitle title={title} />
      <PaperDescription description={description} />
      <Skeleton variant="rectangular" width="100%" height="300px" />
    </StyledPaper >
  )
}

export default function Factsheets() {
  return (
    <div>
      <Header variant="h2" align="center">
        Fact Sheets
      </Header>
      <Container maxWidth='md'>
        <Body align="justify">
          A fact sheet is a short, typed or hand-written document that contains the most relevant information about a particular subject in the least amount of space. The goal is to provide facts and key points about a topic in a clear, concise, and easy-to-understand way.
          <br />
          <br />
          Understand aspects of marine plastics using these fact sheets, which were prepared based on the information that have come out of the research inventory data.
        </Body>
        <Grid container spacing={2}>
          {factsheets.map((factsheet, idx) => (
            <React.Fragment key={idx}>
              <Grid item xs={5} md={4} key={idx}>
                <CustomizePaper
                  title={factsheet.title}
                  description={factsheet.description}
                  link={factsheet.link}
                />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </div>
  )
}