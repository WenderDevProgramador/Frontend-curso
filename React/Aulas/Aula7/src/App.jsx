import { useEffect , useState } from "react"

function Counter() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('O efeito colateral foi ativado!')

    return () => {
      console.log('Limpando...')
      console.log('Componente desmontado.')
    }
  }, [])

  return (
    <>
    <button onClick={() => setCounter(count => count + 1)}>
        Contador: {counter}
      </button>
    </>
  )
}



export default function App() {
  const [show , setShow] = useState(false)

  return (
    <div id="app">
      
      <h2>
        Conhecendo o useEffect
      </h2>

      <div>
        <label htmlFor="show">Exibir</label>
        <input 
        type="checkbox" 
        id="show"
        value={show}
        onChange={() => setShow(state => !state)}
      />
      </div>
      
      {
        show ? <Counter/> : null
      }

      <hr />

      
      
    </div>
  )
}