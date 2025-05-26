import Img from './component/Img'
import './App.css'
import Data from './component/Data'
import ListRender from './component/ListRender'
import ConditionalRender from './component/ConditionalRender'
import ShowUserName from './component/ShowUserName'
import CardDetails from './component/CardDetails'

const cars = [
  { id: 1, brand: 'Toyota', color: 'Prata', km: 52000 },
  { id: 2, brand: 'Honda', color: 'Preto', km: 35000 },
  { id: 3, brand: 'Ford', color: 'Branco', km: 74000 },
  { id: 4, brand: 'Chevrolet', color: 'Vermelho', km: 29000 },
  { id: 5, brand: 'Volkswagen', color: 'Azul', km: 61000 },
  { id: 6, brand: 'Fiat', color: 'Cinza', km: 88000 },
  { id: 7, brand: 'Hyundai', color: 'Preto', km: 43000 },
  { id: 8, brand: 'Kia', color: 'Branco', km: 15000 },
  { id: 9, brand: 'Renault', color: 'Verde', km: 99000 },
  { id: 10, brand: 'Nissan', color: 'Amarelo', km: 27000 }
];


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
      <ConditionalRender/>
      <ShowUserName name= 'Wender'/>
      <CardDetails brand='VW' km={909} color='Vermelho'/>
      {/* Reaproveitando componentes */}
      <CardDetails brand='GM' km={956} color='Branco'/>
      <CardDetails brand='Fiat' km={1009} color='Vermelho'/>
      <CardDetails brand='VW' km={8589} color='Preto'/>

      {/* Renderização de listas com componentes */}
      {cars.map((car) => (
        <CardDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>
      ))}

    </div>
  )
}

export default App
