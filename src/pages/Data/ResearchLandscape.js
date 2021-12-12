import React from 'react';
import { Container } from '@mui/material';
import Header from 'components/StyledComponents/Header';
import HeaderRibbon from 'components/StyledComponents/HeaderRibbon';

function formatter(title, charts) {
  return { title, charts }
}

// function graphFormatter(width, height, chartType, title, data) {
//   return { width, height, chartType, title, data }
// }

function graphFormatter(link, width, height) {
  return { width, height, link }
}

const data = [
  formatter(
    "RL1. Research profile of the region",
    [
      graphFormatter(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=1477279943&format=interactive",
        540,
        360,
      ),
      graphFormatter(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=828770804&format=interactive",
        "100%",
        500,
      ),
      graphFormatter(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=1393391593&format=interactive",
        "100%",
        500
      ),
      graphFormatter(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=1484867152&format=interactive",
        "100%",
        500
      ),
      graphFormatter(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=12600553&format=interactive",
        "100%",
        500
      ),
      graphFormatter(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=977131816&format=interactive",
        "100%",
        500
      ),
      graphFormatter(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=58537761&format=interactive",
        "100%",
        700
      ),
    ]
  ),
  formatter(
    "RL2. On language of publications",
    [
      graphFormatter(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=1749235858&format=interactive",
        "70%",
        420
      ),
      graphFormatter(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=1576854168&format=interactive",
        "70%",
        420
      ),
      graphFormatter(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=613781400&format=interactive",
        "80%",
        500
      ),
      graphFormatter(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=169444871&format=interactive",
        "80%",
        500
      ),
      graphFormatter(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=1048511901&format=interactive",
        "80%",
        450
      ),
    ]
  ),
  formatter(
    "RL3. Overview of plastic polymers & plastic shapes found",
    [
      graphFormatter(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=2132834271&format=interactive",
        "100%",
        600
      ),
      graphFormatter(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTLlU4Iouaz_ID544mtfTINHRHfP-ELytQ_72AATJfhq95PBNYtWsK-cteZ8JhTexBhUg9cQ9YL47fN/pubchart?oid=1444725583&format=interactive",
        "100%",
        600
      )
    ]
  ),
]

const fakeData1 = [
  ["Task", "Hours per Day"],
  ["Both", 34],
  ["Humanities", 120],
  ["Science", 546],
]

const fakeData2 = [
  ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
    'Western', 'Literature', { role: 'annotation' }],
  ['2010', 10, 24, 20, 32, 18, 5, ''],
  ['2020', 16, 22, 23, 30, 16, 9, ''],
  ['2030', 28, 19, 29, 30, 12, 13, '']
]

// const sections = [
//   formatter(
//     "RL1. On the impact of plastic in the environment",
//     [
//       graphFormatter(
//         600,
//         400,
//         "pie",
//         "[RL1.A] Scientific and socio-economic research articles in the Region",
//         fakeData1,
//       ),
//       graphFormatter(
//         "100%",
//         400,
//         "bar",
//         "Test barchart",
//         fakeData2,
//       ),
//       graphFormatter(
//         "100%",
//         600,
//         "column",
//         "Test column chart",
//         fakeData2,
//       ),
//     ]
//   ),
// ]

const Section = (props) => {

  return (
    <div>
      <HeaderRibbon
        text={props.text}
        variant="h6"
        color="secondary"
      />
      {props.charts.map((chart, idx) => (
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

export default function ResearchLandscape() {
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