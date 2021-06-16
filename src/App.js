import './App.css';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'components/ScrollToTop';
import Layout from 'components/Layout';

import Home from 'pages/Home';
import Guidelines from 'pages/Guidelines';
import About from 'pages/About';
import NotFound from 'pages/NotFound';
import Understanding from 'pages/Understanding';
import Regional from 'pages/Regional';
import Other from 'pages/Other';
import Map from 'pages/Map';


let theme = createMuiTheme({
  palette: {
    primary: blue,
    divider: 'rgba(0, 0, 0, 0.3)',
  },
})

theme = responsiveFontSizes(theme)

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/guidelines">
                <Guidelines />
              </Route>
              <Route exact path="/understanding">
                <Understanding />
              </Route>
              <Route exact path="/regional">
                <Regional />
              </Route>
              <Route exact path="/other">
                <Other />
              </Route>
              <Route exact path="/map">
                <Map />
              </Route>
              <Route exact path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </div>
      </Router>
    </ThemeProvider>
  );
}