import React from 'react'
import Image from 'next/image'
import Rate from './Rate.js'
import { coinIcon } from '../../components/cmc-table/CMCPriceConverter'
import RateFilled from '../buttons/RateFilled.js'
import DropDownBtn from '../buttons/DropDownBtn.js'
import Info from '../../assets/svg/info'
import { AiOutlineStar } from 'react-icons/ai'

const styles = {
  coinDetails: `min-h-screen text-white px-20`,
  coinDetailsLinks: `flex flex-wrap mt-1`,
  greyBtn: `mr-2 mb-2 bg-[#323546] px-3 py-1 rounded-xl`,
  borderLeft: `ml-10 pl-5 w-full border-1 border-gray-800`,
  title: `text-gray-400 whitespace-nowrap`,
  coinDetailsWrapper: `coin-details flex max-w-screen-2xl m-auto pt-20`,
  coinSymbol: `bg-slate-800 flex items-center px-2 rounded-xl mr-3`,
  coinInfo: `flex justify-between mt-10 p-4 border-t border-gray-800`,
  coinRates: `w-full flex items-start justify-between`,
  flexBetween: `flex justify-between`,
}

const CoinDetails = ({ coinName, coinSymbol, price }) => {
  return (
    <main className={styles.coinDetails}>
      <div>
        <div className={styles.coinDetailsWrapper}>
          <div className="flex w-fit flex-col ">
            <div className="flex flex-col">
              <div className="mb-3 flex">
                {coinIcon(coinName, 45)}
                &nbsp; &nbsp;
                <div className="flex">
                  <p className="text-3xl">{coinName} </p>
                  &nbsp;&nbsp;
                  <p className={styles.coinSymbol}>{coinSymbol}</p>
                  <AiOutlineStar className="mt-2 cursor-pointer border border-[#1F212B] text-2xl" />
                </div>
              </div>
              <div>
                <div className={styles.coinDetailsLinks}>
                  <div className={styles.greyBtn}>solana.com</div>
                  <div className={styles.greyBtn}>Exploerrs</div>
                  <div className={styles.greyBtn}>Community</div>
                  <div className={styles.greyBtn}>Chat</div>
                  <div className={styles.greyBtn}>Source Code</div>
                  <div className={styles.greyBtn}>Whitepaper</div>
                </div>
              </div>
              Topics:
              <div className={styles.coinDetailsLinks}>
                <div className={styles.greyBtn}>Mineable</div>
                <div className={styles.greyBtn}>PoW</div>
                <div className={styles.greyBtn}>SHA-256</div>
                <div className={styles.greyBtn}>Store of value</div>
              </div>
            </div>
          </div>

          <div>
            <div className="ml-16">
              <div className={styles.coinRates}>
                <div>
                  <p className="text-gray-400">
                    {' '}
                    {coinName} {coinSymbol}
                  </p>
                  <div className="my-3 flex">
                    <h1 className="text-4xl">${price}</h1>
                    <RateFilled />
                  </div>

                  <div className="flex items-start">
                    <p className="text-gray-400">15.26 ETH</p>
                    &nbsp; &nbsp; &nbsp;
                    <Rate isIncrement={false} rate="0.53%" />
                  </div>

                  <div className="flex items-start">
                    <p className="text-gray-400">24.33 BTC</p>
                    &nbsp; &nbsp; &nbsp;
                    <Rate isIncrement={true} rate="0.96%" />
                  </div>
                </div>

                <div className="flex">
                  <DropDownBtn label="Buy" />
                  <DropDownBtn label="Exchange" />
                  <DropDownBtn label="Gaming" />
                  <DropDownBtn label="Earn Crypto" />
                </div>
              </div>

              <div className={styles.coinInfo}>
                <div>
                  <div className="flex items-center gap-x-1">
                    <small className={styles.title}>Market Cap</small>
                    <Info />
                  </div>
                  <small>$731,935,983,865</small>
                  <Rate isIncrement={true} rate="0.53%" />
                </div>

                <div className={styles.borderLeft}>
                  <div className="flex items-center gap-x-1">
                    <small className={styles.title}>
                      Fully Diluted Market Cap
                    </small>
                    <Info />
                  </div>
                  <small>$811,236,457,548</small>
                  <Rate isIncrement={true} rate="0.53%" />
                </div>

                <div className={styles.borderLeft}>
                  <div className="flex items-center gap-x-2">
                    <small className={styles.title}>
                      Volume &nbsp;
                      <small className="display-inline  rounded-lg bg-[#323546] px-2">
                        24h
                      </small>
                    </small>
                    <Info />
                  </div>
                  <small>$24,485,486,586</small>{' '}
                  <Rate isIncrement={true} rate="0.92%" />
                  <br />
                  <div>
                    <div>
                      <small className={styles.title}>
                        Volume / Market Cap
                      </small>
                    </div>
                    <small>0.03315</small>
                  </div>
                </div>

                <div className={styles.borderLeft}>
                  <div>
                    <div className="flex items-center gap-x-1">
                      <small className={styles.title}>Circulating Supply</small>
                      <Info />
                    </div>
                    <small>18,485,486,586 BTC</small>
                  </div>

                  <br />
                  <div>
                    <div className={styles.flexBetween}>
                      <div className="mr-10 flex items-center gap-x-1">
                        <small className={styles.title}>Max Supply</small>
                        <Info />
                      </div>
                      <div>
                        <small>21,000,000</small>
                      </div>
                    </div>

                    <div className={styles.flexBetween}>
                      <div className="mr-10 flex items-center gap-x-1">
                        <small className={styles.title}>Total Supply</small>
                        <Info />
                      </div>
                      <div>
                        <small>19,109,343</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default CoinDetails
