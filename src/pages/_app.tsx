import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppContext, {AppProvider} from '../components/data/context/AppContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
  )
}

export default MyApp
