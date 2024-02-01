import React from 'react'
import BottomLeft from './BottomLeft'
import BottomRight from './BottomRight'
import './Bottom.scss'

const Bottom = () => {
  return (
    <div className='Bottom'>
      <div className='left' style={{}}>
        <BottomLeft/>
      </div>
      <div className="right">
        <BottomRight/>
      </div>
    </div>
  )
}

export default Bottom
