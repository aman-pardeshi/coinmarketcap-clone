import React from 'react'
import TrendingCardRow from './TrendingCardRow'
import MoreButton from './MoreButton'
import Image from 'next/image'

const styles = {
  trendingCard: `w-full p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3`,
  trendingCardWrapper: `flex items-center justify-between`,
}

const TrendingCard = ({ title, trendingData, icon }) => {
  return (
    <div className={styles.trendingCard}>
      <div className={styles.trendingCardWrapper}>
        <div className="flex">
          {icon && <Image src={icon} width={27} height={27} alt="icon" />}
          &nbsp;&nbsp;
          <p className="font-bold">{title}</p>
        </div>
        <MoreButton />
      </div>
      <br />

      {trendingData.map((item, index) => (
        <TrendingCardRow
          key={index}
          number={item.number}
          symbol={item.symbol}
          name={item.name}
          icon={item.icon}
          rate={item.rate}
        />
      ))}
    </div>
  )
}

export default TrendingCard