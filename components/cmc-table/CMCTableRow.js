import React from 'react'
import Image from 'next/image'
import More from '../../assets/svg/more'
import Star from '../../assets/svg/star'
import Rate from './Rate'
import { useRouter } from 'next/router'
import CoinNameRow from './CoinNameRow'

const styles = {
  tableRow: `text-white border-b border-gray-800 text-[0.93rem] hover:bg-[#171924]`,
}

const CMCTableRow = ({
  starNum,
  coinName,
  coinSymbol = '--',
  coinIcon,
  hRate = '--',
  dRate = '--',
  hRateIncrement,
  dRateIncrement,
  price = '--',
  marketCapValue = '--',
  volumeValue = '--',
  volumeCryptoValue = '--',
  circulatingSupply = '--',
}) => {
  const graphImages = [
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7129.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3957.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2416.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2099.svg',
    'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7653.svg',
  ]

  const getRandomGraph = () => {
    const randInt = Math.round(Math.random() * 10) + 1
    return graphImages[randInt]
  }

  const router = useRouter()
  const viewCoinDetails = () =>
    router.push(
      `/currencies/info?symbol=${coinSymbol}&coin=${coinName}&price=${price}`
    )
  const viewPrice = () =>
    router.push(
      `/currencies/price?symbol=${coinSymbol}&coin=${coinName}&price=${price}`
    )
  const formatNumber = (num) => {
    return Number(num.toFixed(2).toLocaleString())
  }

  return (
    <tbody className={styles.tableRow}>
      <tr>
        <td className="px-3">
          <Star />
        </td>
        <td>{starNum}</td>

        {coinSymbol && coinSymbol ? (
          <td className="cursor-pointer">
            <CoinNameRow
              name={coinName}
              icon={coinIcon}
              clicked={viewCoinDetails}
            />
          </td>
        ) : (
          <></>
        )}
        <td className="cursor-pointer" onClick={viewPrice}>
          <p>${formatNumber(price)}</p>
        </td>
        <td>
          <Rate isIncrement={hRateIncrement} rate={`${formatNumber(hRate)}%`} />
        </td>

        <td>
          <Rate isIncrement={dRateIncrement} rate={`${formatNumber(dRate)}%`} />
        </td>
        <td>
          <div>
            <p>${formatNumber(marketCapValue)}</p>
          </div>
        </td>
        <td>
          <div>
            <p>{formatNumber(volumeValue)}</p>
            <p className="text-gray-400">
              {formatNumber(volumeCryptoValue)} {coinSymbol}
            </p>
          </div>
        </td>
        <td>
          <div>
            <p>
              {formatNumber(circulatingSupply)} {coinSymbol}
            </p>
          </div>
        </td>
        <td>
          <Image src={getRandomGraph()} width={120} height={60} alt="graph" />
        </td>
        <td>
          <More />
        </td>
      </tr>
    </tbody>
  )
}

export default CMCTableRow
