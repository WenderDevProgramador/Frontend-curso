import { useState,useRef } from "react"
import RefExemple from './RefExample'

export default function App() {
  let variable = 0
  const [state,setState] = useState(0)
  const ref = useRef(0)

  const showValues = () => {
    alert(`
      Variavel: ${variable}
      Ref: ${ref.current}
      State: ${state}`
    )
  }

  return (
    <div className="app">
      <h2>Exemplo de useRef com o DOM</h2>
      <RefExemple/>
      <hr />

    <h2>Conhecendo o useRef</h2>
    <hr />
    <p>Variavel:{variable}</p>
    <p>Ref: {ref.current}</p>
    <p>State:{state}</p>
  

    <button onClick={() => variable++}>Aumentar a Variavel</button>

    <button onClick={() => ref.current++}>Aumentar Ref</button>

    <button onClick={() => setState(state => state + 1)}>Aumentar State</button>
    <hr />

    <button onClick={showValues}>Exibir Valores</button>

    </div>
  )
}