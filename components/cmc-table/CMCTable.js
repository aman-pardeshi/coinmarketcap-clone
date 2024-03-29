import React, { useState, useContext, useEffect, useCallback } from 'react'
import btc from '../../assets/btc.png'
import { CoinMarketContext } from '../../context/context'
import CMCTableHeader from './CMCTableHeader'
import CMCTableRow from './CMCTableRow'

const CMCTable = () => {
  let { getTopTenCoins } = useContext(CoinMarketContext)
  let [coinData, setCoinData] = useState(null)

  useEffect(() => {
    setData()
  }, [])

  const setData = useCallback(async () => {
    try {
      let apiResponse = await getTopTenCoins()

      let filteredResponse = []

      for (let i = 0, len = apiResponse.length; i < len; i++) {
        const element = apiResponse[i]

        if (element.cmc_rank <= 10) {
          filteredResponse.push(element)
        }
      }
      setCoinData(filteredResponse)
    } catch (e) {
      console.log(e.message)
    }
  }, [getTopTenCoins])

  return (
    <div className="mt-0 font-bold text-white">
      <div className="mx-auto max-w-screen-2xl px-20">
        <table className="w-full">
          <CMCTableHeader />

          {coinData && coinData ? (
            coinData.map((coin, index) => {
              return (
                <CMCTableRow
                  key={index}
                  starNum={coin.cmc_rank}
                  coinName={coin.name}
                  coinSymbol={coin.symbol}
                  coinIcon={coin.icon}
                  showBuy={true}
                  hRate={coin.quote.USD.percent_change_24h}
                  dRate={coin.quote.USD.percent_change_7d}
                  hRateIncrement={true}
                  price={coin.quote.USD.price}
                  marketCapValue={coin.quote.USD.market_cap}
                  volumeCryptoValue={coin.quote.USD.volume_24h}
                  volumeValue={coin.total_supply}
                  circulatingSupply={coin.circulating_supply}
                />
              )
            })
          ) : (
            <></>
          )}
        </table>
      </div>
    </div>
  )
}

export default CMCTable
