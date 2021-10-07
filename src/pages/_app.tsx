import GlobalStyle from '../styles'
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'

import theme from '../styles/theme'
import { Provider } from 'react-redux'
import store from 'store'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
)

export default MyApp
