import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core';
import 'remixicon/fonts/remixicon.css';
import theme from '../utils/theme';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apollo';
import store from "../store"
import { persistor } from '../store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={apolloClient}>
            <div>
              <Head>
                {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" /> */}
              </Head>
              <Component {...pageProps} />
            </div>
          </ApolloProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}
