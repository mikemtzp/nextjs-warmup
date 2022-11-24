/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
// We are going to wrap our whole app in the Theme UI provider with:
import { ThemeProvider } from 'theme-ui';
import theme from '../../theme';
import Nav from '../components/nav';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
