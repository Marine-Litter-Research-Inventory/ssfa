import React from 'react';
import { Container } from '@mui/material';
import Header from 'components/StyledComponents/Header';
import HeaderRibbon from 'components/StyledComponents/HeaderRibbon';

function formatter(title, charts) {
  return { title, charts }
}

function graphFormatter(link, width, height) {
  return { link, width, height }
}

const data = [
  formatter(
    "SR1. Profile of marine plastic found",
    [
      graphFormatter(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=1315077066&format=interactive",
        "100%",
        450,
      ),
      graphFormatter(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=310908260&format=interactive",
        "100%",
        400,
      ),
    ]
  ),
  formatter(
    "RL2. On languageSR2. Dive into Microplastic of publications",
    [
      graphFormatter(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=1417951165&format=interactive",
        "70%",
        400
      ),
      graphFormatter(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=979294449&format=interactive",
        "70%",
        420
      ),
      graphFormatter(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=1287719339&format=interactive",
        "70%",
        420
      ),
      graphFormatter(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=427375937&format=interactive",
        "80%",
        420
      ),
      graphFormatter(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=1048511901&format=interactive",
        "80%",
        420
      ),
      graphFormatter(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=854824432&format=interactive",
        "80%",
        420
      ),
    ]
  ),
  formatter(
    "SR3. Biota sampled",
    [
      graphFormatter(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=450897781&format=interactive",
        "80%",
        420
      ),
    ]
  ),
]

const Section = (props) => {
  return (
    <div>
      <HeaderRibbon
        text={props?.text}
        variant="h6"
        color="secondary"
      />
      {props?.charts.map((chart, idx) => (
        <div key={idx} style={{ margin: 20, justifyContent: 'center', display: 'flex' }}>
          <iframe
            title={`${props?.text} chart ${idx}`}
            src={chart.link}
            width={chart.width}
            height={chart.height}
            seamless
            scrolling="no"
          />
        </div>
      ))}
    </div>
  );
}

export default function ScientificResearch() {
  return (
    <div>
      <Container>
        <Header variant="h2" align="center">
          Research Landscape
        </Header>
        {data.map((section, index) => (
          <Section
            key={index}
            text={section.title}
            charts={section.charts}
          />
        ))}
      </Container>
    </div>
  )
}