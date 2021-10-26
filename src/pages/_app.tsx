import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from '../frontend/styles'
import theme from '../frontend/styles/theme'
import favicon from '../../public/favicon.ico'

import store from 'frontend/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel='icon' href={favicon} />
    </Head>

    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  </>
)

export default MyApp
