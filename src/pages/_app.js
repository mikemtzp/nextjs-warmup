import '../../styles/globals.css';
// We are going to wrap our whole app in the Theme UI provider with:
import { ThemeProvider } from 'theme-ui';
import theme from '../../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
