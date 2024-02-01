
import Contacts from '../Components/ShortCut/Contacts';
import Groups from '../Components/ShortCut/Groups';
import Pages from '../Components/ShortCut/Pages';
import './Short.scss'

const Shortcuts = () => {
  return(
    <div className='short'>
      <div className='pages'>
        <Pages/>
        </div>
      <div className="contacts">
        <Contacts/>
      </div>
      <div className="groups">
        <Groups/>
      </div>
    </div>
  )
};

export default Shortcuts;
