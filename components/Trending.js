import React, { useState } from 'react'
import Rate from './cmc-table/Rate'
import TrendingCard from '../components/TrendingCard'
import fire from '../assets/fire.png'
import btc from '../assets/btc.png'
import usdt from '../assets/usdt.png'
import eth from '../assets/eth.png'
import gainers from '../assets/gainers.png'
import recent from '../assets/recent.png'
import ReactSwitch from 'react-switch'

const styles = {
  trendingWrapper: `mx-auto max-w-screen-2xl`,
  h1: `text-3xl text-white`,
  flexCenter: `flex items-center mb-10`,
}

const TrendingData = [
  {
    number: 1,
    symbol: 'BTC',
    name: 'Bitcoin',
    icon: btc,
    isIncrement: true,
    rate: '2.34%',
  },
  {
    number: 2,
    symbol: 'ETH',
    name: 'Etherum',
    icon: eth,
    isIncrement: true,
    rate: '2.34%',
  },
  {
    number: 3,
    symbol: 'USTD',
    name: 'Tether',
    icon: usdt,
    isIncrement: false,
    rate: '1.34%',
  },
]

const Trending = () => {
  const [highlightsSwitch, setHighlightsSwitch] = useState(true)

  return (
    <div className="px-20 text-white">
      <div className={styles.trendingWrapper}>
        <div className="flex justify-between">
          <h1 className={styles.h1}>
            Today's Cryptocurrencies Prices by Market Cap
          </h1>

          <div className="flex">
            <p className="text-gray-400">Highlights &nbsp;</p>
            <ReactSwitch
              checked={highlightsSwitch}
              onChange={() => setHighlightsSwitch(!highlightsSwitch)}
            />
          </div>
        </div>
        <br />

        <div className="flex">
          <p className="text-gray-400">
            The global crytpo market is $1.74T, a &nbsp;
          </p>
          <span>
            <Rate isIncrement={true} rate="0.53%" />
          </span>
          <p className="text-gray-400">
            &nbsp; decrease over the last day.&nbsp;
            <span className="cursor-pointer underline">Read more</span>.
          </p>
        </div>
        <br />
        {highlightsSwitch ? (
          <div className={styles.flexCenter}>
            <TrendingCard
              title="Trending"
              icon={fire}
              trendingData={TrendingData}
            />
            <TrendingCard
              title="Biggest Gainers"
              icon={gainers}
              trendingData={TrendingData}
            />
            <TrendingCard
              title="Recently Added"
              icon={recent}
              trendingData={TrendingData}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Trending
