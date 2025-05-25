import Img from './component/Img'
import './App.css'
import Data from './component/Data'
import ListRender from './component/ListRender'

function App() {
  
  return (
    <div className='App'>
      <h1>Aula 3</h1>
      <h2>IMG</h2>
      <Img/>
      <h2>Hooks</h2>
      <h2>useState</h2>
      <Data/>
      <h2>Renderização de listas</h2>
      <ListRender/>
    </div>
  )
}

export default App
