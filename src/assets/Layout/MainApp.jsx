import React from 'react'
import Feed from './Feed'
import Shortcut from './Shortcut'
import './MainApp.scss'

const MainApp = () => {
  return (
    <div className='main'>
      <div className="feed">
        <Feed/>
      </div>
      <div className="shortcuts">
        <Shortcut/>
      </div>
    </div>
  )
}

export default MainApp
