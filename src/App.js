import './App.css';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from 'components/ScrollToTop';

import Home from 'pages/Home';
import Guidelines from 'pages/Guidelines';
import About from 'pages/About';
import Layout from 'components/Layout';


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
            </Switch>
          </Layout>
        </div>
      </Router>
    </ThemeProvider>
  );
}