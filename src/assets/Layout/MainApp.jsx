import React from 'react'
import Feed from  "./Feed"
import Shortcut from './Shortcut'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './MainApp.scss'
import Timeline from '../Pages/Timeline'
import Friends from '../Pages/Friends'
// import Notification from '../Pages/Notification'
import Photos from '../Pages/Photos'
import Group from '../Pages/Group'
import Videos from '../Pages/Videos'
import Events from '../Pages/Events'


const MainApp = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/group" element={<Group />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/events" element={<Events/>} />
      </Routes>
      <div className="shortcuts">
        <Shortcut />
      </div>
    </div>
  );
}

export default MainApp
