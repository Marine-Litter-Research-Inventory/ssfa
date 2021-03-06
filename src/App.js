import React from 'react';
import './App.css';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from "react-redux"

import ScrollToTop from 'components/utils/ScrollToTop';
import Layout from 'components/Layout/Layout';
import useFetch from 'components/utils/useFetch';
import {
  setPositionValue,
  getFromStorage,
} from "components/utils/utils";

import Loading from "pages/Loading"
import Home from 'pages/Home';
import About from 'pages/About';
import NotFound from 'pages/NotFound';
import Map from 'pages/Map';
import Feedback from 'pages/Feedback';
import Factsheets from 'pages/Factsheets';
import Data from 'pages/Data/Data';
import DataExtraction from "pages/Data/DataExtraction";
import Methodology from "pages/Data/Methodology";
import Policy from "pages/Data/Policy";
import ResearchLandscape from "pages/Data/ResearchLandscape";
import ScientificResearch from "pages/Data/ScientificResearch";
import Humanities from 'pages/Data/Humanities';

let theme = createTheme({
  palette: {
    primary: {
      main: "#f8e6dc",
    },
    secondary: {
      main: "#9c4a55"
    },
    tertiary: {
      main: "#4f563f"
    },
    quaternary: {
      main: "#c8a464"
    },
    error: {
      main: "#c53655",
    },
    warning: {
      main: "#cf5500",
    },
    info: {
      main: "#89bc00",
    },
    success: {
      main: "#34bd6f"
    },
    divider: 'rgba(0, 0, 0, 0.3)',
  },
  typography: {
    fontFamily: "Lato",
  }
})

theme = responsiveFontSizes(theme)

export default function App() {
  // Uncomment for production only
  // var console = {}
  // console.log = function () { }
  // window.console = console

  // Uncomment below for testing of caching
  // localStorage.clear()

  const {
    isPending,
    isDataChanged,
    databaseLink,
  } = useSelector(state => state.rootData)

  useFetch(databaseLink)

  React.useEffect(() => {
    if (!Boolean(getFromStorage("position")) && !isPending)
      setPositionValue()
    else if (isDataChanged)
      setPositionValue()
  }, [isDataChanged, isPending])

  return (
    <ThemeProvider theme={theme}>
      {isPending ?
        <Loading />
        :
        <Router>
          <ScrollToTop />
          <div className="App">
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/map" component={() => <Map isDataChanged={isDataChanged} />} />

                <Route exact path="/data" component={Data} />
                <Route exact path="/data/custom-data-subset" component={DataExtraction} />
                <Route exact path="/data/research-landscape" component={ResearchLandscape} />
                <Route exact path="/data/methodology-and-ontology" component={Methodology} />
                <Route exact path="/data/scientific-research" component={ScientificResearch} />
                <Route exact path="/data/research-in-humanities" component={Humanities} />
                <Route exact path="/data/information-for-policy-making" component={Policy} />

                <Route exact path="/factsheets" component={Factsheets} />
                <Route exact path="/feedback" component={Feedback} />
                <Route exact path="/about" component={About} />
                <Route exact path="*" component={NotFound} />
              </Switch>
            </Layout>
          </div>
        </Router>
      }
    </ThemeProvider>
  );
}