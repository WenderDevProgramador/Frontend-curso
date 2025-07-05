


//Hooks


//Estilo
import './App.css'

//Imagens

import Newyear from './assets/newyear.jpg'

//Components

import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { CountdownContext } from './context/CountdownContext.jsx'


function App() {
  const { event } = useContext(CountdownContext)

  let eventImage = null

  if(event) eventImage = event.image


  return (
    <div className="app" style={eventImage ? {backgroundImage: `url(${eventImage})`} : {backgroundImage: `url(${Newyear})`}}>
      <div className="container">
        
        <Outlet/>
      </div>
      
    </div>
  )
}

export default App
