import { AppProps } from 'next/app'

import GlobalStyle from '../styles'
import theme from '../styles/theme'

import store from 'store'

import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
)

export default MyApp
