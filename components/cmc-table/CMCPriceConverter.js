import React from 'react'
import converter from '../../assets/converter.png'
import btc from '../../assets/btc.png'
import eth from '../../assets/eth.png'
import usdc from '../../assets/usdc.png'
import usdt from '../../assets/usdt.png'
import xrp from '../../assets/xrp.png'
import cardano from '../../assets/cardano.png'
import tera from '../../assets/tera.png'
import solana from '../../assets/solana.png'
import avalance from '../../assets/avalanche.png'
import bnb from '../../assets/bnb.png'
import Image from 'next/image'

const styles = {
  converter: `flex items-center justify-between bg-[#171924] border border-gray-500/10 px-5 py-5 rounded-xl`,
  convertButton: `bg-[#1d4ed8] p-2 px-5 w-min rounded-xl mt-5 cursor-pointer hover:opacity-60`,
}

export const coinIcon = (coinSymbol, imageSize = 50) => {
  switch (coinSymbol) {
    case 'Bitcoin':
      return (
        <Image
          src={btc}
          className="rounded-full"
          width={imageSize}
          height={imageSize}
          alt=""
        />
      )

    case 'Etherum':
      return (
        <Image
          src={eth}
          className="rounded-full"
          width={imageSize}
          height={imageSize}
          alt=""
        />
      )

    case 'BNB':
      return (
        <Image
          src={bnb}
          className="rounded-full"
          width={imageSize}
          height={imageSize}
          alt=""
        />
      )

    case 'Tether':
      return (
        <Image
          src={usdt}
          className="rounded-full"
          width={imageSize}
          height={imageSize}
          alt=""
        />
      )
    case 'USD Coin':
      return (
        <Image
          src={usdc}
          className="rounded-full"
          width={imageSize}
          height={imageSize}
          alt=""
        />
      )
    case 'XRP':
      return (
        <Image
          src={xrp}
          className="rounded-full"
          width={imageSize}
          height={imageSize}
          alt=""
        />
      )
    case 'Cardano':
      return (
        <Image
          src={cardano}
          className="rounded-full"
          width={imageSize}
          height={imageSize}
          alt=""
        />
      )

    case 'Terra':
      return (
        <Image
          src={tera}
          className="rounded-full"
          width={imageSize}
          height={imageSize}
          alt=""
        />
      )

    case 'Solona':
      return (
        <Image
          src={solana}
          className="rounded-full"
          width={imageSize}
          height={imageSize}
          alt=""
        />
      )

    case 'Avanlance':
      return (
        <Image
          src={avalance}
          className="rounded-full"
          width={imageSize}
          height={imageSize}
          alt=""
        />
      )

    default:
      return (
        <Image
          src={btc}
          className="rounded-full"
          width={imageSize}
          height={imageSize}
          alt=""
        />
      )
  }
}

const CMCPriceConverter = ({
  from,
  fromSymbol,
  fromLogo,
  toLogo,
  price,
  to,
  toSymbol,
}) => {
  return (
    <div>
      <h2>
        {fromSymbol} to {toSymbol} Converter
      </h2>
      <br />
      <div className={styles.converter}>
        <div>
          <div className="flex">
            <div className="avatar-container">
              {fromLogo && fromLogo ? coinIcon(from) : <div></div>}
            </div>
            &nbsp;
            <div>
              <p> {fromSymbol}</p>
              <h4>{from}</h4>
            </div>
          </div>
        </div>

        <div className="flex">
          <p className="text-3xl">1</p>
          &nbsp;
          <div>
            <Image alt="" src={converter} width={40} height={40} />
          </div>
          &nbsp;
          <div className="flex">
            {toLogo}
            &nbsp;
            <div>
              <p>{toSymbol}</p>
              <h4>{to}</h4>
            </div>
          </div>
        </div>
        <p className="text-3xl">${price}</p>
      </div>
      <div className={styles.convertButton}>Convert</div>
    </div>
  )
}

export default CMCPriceConverter
