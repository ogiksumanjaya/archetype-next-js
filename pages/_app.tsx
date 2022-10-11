import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '../src/redux/store'
import { Provider } from 'react-redux'
import GlobalStyles from '../styles/GlobalStyles'

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest)
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...props.pageProps} />
    </Provider>
  )
}

export default MyApp
