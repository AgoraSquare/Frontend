import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core';
import 'remixicon/fonts/remixicon.css';
import theme from '../utils/theme';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
