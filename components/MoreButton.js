import React from 'react'
import RightArrow from '../assets/svg/rightArrow'

const styles = {
  button: `text-[#3B67F9] flex items-center cursor-pointer whitespace-nowrap text-lg hover:text-[#6188FF] `,
}

const MoreButton = () => {
  return (
    <div className={styles.button}>
      More&nbsp;
      <RightArrow />
    </div>
  )
}

export default MoreButton
