import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import { CoinMarketProvider } from '../context/context'
import { GunProvider } from '../context/gunContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID ?? 'AppId Undefined Fallback'}
      serverUrl={
        process.env.NEXT_PUBLIC_SERVER ?? 'ServerUrl Undefined Fallback'
      }
    >
      <GunProvider>
        <CoinMarketProvider>
          <Component {...pageProps} />
        </CoinMarketProvider>
      </GunProvider>
    </MoralisProvider>
  )
}

export default MyApp
