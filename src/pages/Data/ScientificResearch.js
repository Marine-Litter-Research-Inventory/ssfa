import React from 'react';
import { Container } from '@mui/material';
import Header from 'components/StyledComponents/Header';
import Body from 'components/StyledComponents/Body';
import HeaderRibbon from 'components/StyledComponents/HeaderRibbon';
import Dial from 'components/Dial';

function formatter(title, charts) {
  return { title, charts }
}

function graphFormatter(link, width, height) {
  return { link, width, height }
}

const SR1 = formatter(
  ["SR1. Profile of marine plastic found", "SR1"],
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
)

const SR2 = formatter(
  ["SR2. Dive into Microplastic of publications", "SR2"],
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
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=95783846&format=interactive",
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
)

const SR3 = formatter(
  ["SR3. Biota sampled", "SR3"],
  [
    graphFormatter(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=450897781&format=interactive",
      "80%",
      420
    ),
  ]
)

const Charts = (props) => {

  return (
    <div>
      {props.charts.map((chart, idx) => (
        <div key={idx} style={{ margin: 20, justifyContent: 'center', display: 'flex' }}>
          <iframe
            title={`${props?.text} chart ${idx}`}
            src={chart.link}
            width={chart.width}
            height={chart.height}
            seamless
            scrolling="no"
            style={{
              border: '2px solid #9c4a55',
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default function Humanities() {
  const sections = [
    "SR3. Biota sampled",
    "SR2. Dive into Microplastic of publications",
    "SR1. Profile of marine plastic found",
  ]

  return (
    <div>
      <Dial sections={sections} />
      <Container>
        <Header variant="h2" align="center">
          Research Landscape
        </Header>
        <Body sx={{ backgroundColor: theme => theme.palette.primary.main }}>
          Explore charts and graphs developed to display the characteristics of scientific research publications included in RRI 2.0.
        </Body>

        <HeaderRibbon
          id={SR1.title[1]}
          text={SR1.title[0]}
          variant="h6"
          color="secondary"
        />
        <Charts charts={SR1.charts} />

        <HeaderRibbon
          id={SR2.title[1]}
          text={SR2.title[0]}
          variant="h6"
          color="secondary"
        />
        <Charts charts={SR2.charts} />

        <HeaderRibbon
          id={SR3.title[1]}
          text={SR3.title[0]}
          variant="h6"
          color="secondary"
        />
        <Charts charts={SR3.charts} />

      </Container>
    </div>
  )
}