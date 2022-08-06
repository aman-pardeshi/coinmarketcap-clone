import React from 'react'
import ChevronDown from '../../assets/svg/chevronDown'

const styles = {
  dropdownBtn: `flex items-center mr-1 rounded-md bg-[#6188FF] cursor-pointer py-1`,
}

const DropDownBtn = ({ label }) => {
  return (
    <div className={styles.dropdownBtn}>
      <small className="flex items-center px-2">
        {label} &nbsp; <ChevronDown />
      </small>
    </div>
  )
}

export default DropDownBtn
