import './App.css'
import { Card } from '../components/Card'
import { NavBar } from '../components/NavBar.jsx'
import { MoreInfo } from '../components/Moreinfo'
import "../src/card.css"

function App() {

  return (
    <div className='all-content'>
      <div>
        <NavBar />
      </div>
      <MoreInfo />
      <Card />
    </div>
  )
}

export default App