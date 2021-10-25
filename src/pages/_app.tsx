import { AppProps } from 'next/app'

import GlobalStyle from '../frontend/styles'
import theme from '../frontend/styles/theme'

import store from 'frontend/store'
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
