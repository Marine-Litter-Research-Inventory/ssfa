import React from 'react';
import './App.css';
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'components/ScrollToTop';
import Layout from 'components/Layout';
import useFetch from 'components/utils/useFetch';

import Home from 'pages/Home/Home';
import About from 'pages/About';
import NotFound from 'pages/NotFound';
import Map from 'pages/Map';
import Data from 'pages/Data';
import Resources from 'pages/Resources';

const SHEET_ID = process.env.REACT_APP_SHEET_ID

let theme = createTheme({
  palette: {
    primary: blue,
    divider: 'rgba(0, 0, 0, 0.3)',
  },
})

theme = responsiveFontSizes(theme)

export default function App() {

  // Uncomment for production only
  // var console = {}
  // console.log = function () { }
  // window.console = console

  // Uncomment below for testing of caching
  // localStorage.clear()
  const { isPending, isDataChanged } = useFetch('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?tqx=out:json&sheet=published')

  const content = isPending ?
    <h1>
      Please wait while we load the data for the website
    </h1>
    :
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/resources">
        <Resources />
      </Route>
      <Route exact path="/map">
        <Map isDataChanged={isDataChanged} />
      </Route>
      <Route exact path="/data">
        <Data />
      </Route>
      <Route exact path="*">
        <NotFound />
      </Route>
    </Switch>

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Layout>
            {content}
          </Layout>
        </div>
      </Router>
    </ThemeProvider>
  );
}