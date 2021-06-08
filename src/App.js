import './App.css';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

import Home from 'pages/Home';
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
      <div className="App">
        <Layout>
          <Home />
        </Layout>
      </div>
    </ThemeProvider>
  );
}