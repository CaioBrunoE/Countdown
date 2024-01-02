import { Outlet } from 'react-router-dom'

import NewYear from "./assets/newyear.jpg"



import './App.css'


function App() {

  return (
    <div className='app' style={{ backgroundImage: `url(${NewYear})` }}>
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default App
