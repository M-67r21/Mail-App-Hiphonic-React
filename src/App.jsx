
import './App.scss'
import MailApp from './assets/Layout/MailApp'
import { BrowserRouter } from 'react-router-dom'




function App() {

  return (
    <>
      <BrowserRouter>
        <div className="container">
          <MailApp />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App
