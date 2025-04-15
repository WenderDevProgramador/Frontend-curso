
import Card from "./components/Card"
import starImg from './assets/star.jpg'
import returnImg from './assets/return.png'
import empireImg from './assets/empire.png'
import Button from "./components/Button"



export default function App() {
  return (
    <>
      <h1>Exercício</h1>
      <Button text='Ir ao Blog'/>
      <br />
      <Button text='Sair da pagina'/>
      <Card title="Pôster: Star Ears (1977)" posterImg={starImg}/>
      <Card title="Pôster: Empire Stikes Back (1980)" posterImg={empireImg}/>
      <Card title="Pôster: Return of the Jedi (1983)" posterImg={returnImg}/>

      
      
  
    </>

  )
}