


//Hooks


//Estilo
import './App.css'

//Imagens

import Newyear from './assets/newyear.jpg'

//Components

import { Outlet } from 'react-router-dom'

function App() {



  return (
    <div className="app" style={{backgroundImage: `url(${Newyear})`}}>
      <div className="container">
        
        <Outlet/>
      </div>
      
    </div>
  )
}

export default App
