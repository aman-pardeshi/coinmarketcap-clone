import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import { CoinMarketProvider } from '../context/context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID ?? 'AppId Undefined Fallback'}
      serverUrl={
        process.env.NEXT_PUBLIC_SERVER ?? 'ServerUrl Undefined Fallback'
      }
    >
      <CoinMarketProvider>
        <Component {...pageProps} />
      </CoinMarketProvider>
    </MoralisProvider>
  )
}

export default MyApp
