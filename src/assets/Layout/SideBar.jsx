import Menu from '../Components/Sidebar/Menu'
import Profile from '../Components/Sidebar/Profile'
import Shortcuts from '../Components/Sidebar/Shortcuts'
import './SideBar.scss'

const SideBar = () => {
  return (
    <div className='side'>
      <div className="profile">
        <Profile/>
      </div>
      <div className="menu">
        <Menu/>
      </div>
      <div className="shortcuts">
        <Shortcuts/>
      </div>
    </div>
  )
}

export default SideBar
