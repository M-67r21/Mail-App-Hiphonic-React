import React from 'react'
import Feed from  "./Feed"
import Shortcut from './Shortcut'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './MainApp.scss'
import Timeline from '../Pages/Timeline'
import Friends from '../Pages/Friends'


const MainApp = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/friends" element={<Friends/>} />
      </Routes>
      <div className="shortcuts">
        <Shortcut />
      </div>
    </div>
  );
}

export default MainApp
