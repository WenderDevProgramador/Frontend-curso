import { useState } from 'react'

import './App.css'
import Title from './component/Title'

function App() {
  
  const [num , setNum] = useState(2)
  const [red , setRed] = useState(true)
  

  return (
    <>
      <div>
        <h2 style={num > 10 ? {color:'red'} : {color:'magenta'}}>Css inline dinamico</h2>
        <button onClick={() => setNum(2)}>Menor que 10</button> <br />
        <button onClick={() => setNum(22)}>Maior que 10</button>
        <h3>Titulo é igual á : {num} </h3>
        {/* Classe dinamica */}

        <h2 className={red ? 'red-title' : 'blue-title'}>Classe dinamica</h2>
        <button onClick={() => setRed(true)}>Vermelho</button> <br />
        <button onClick={() => setRed(false)}>Azul</button>
        {/* Css modules */}
        <Title/>
      </div>
        
    </>
  )
}

export default App
