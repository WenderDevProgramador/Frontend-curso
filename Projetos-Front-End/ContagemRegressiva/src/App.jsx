//Hooks
import useCountdown from './hook/useCountdown'

//Estilo
import './App.css'

//Imagens

import Newyear from './assets/newyear.jpg'

//Components
import Counter from './Components/Counter'
import Title from './Components/Title'

function App() {
  const [day,hour,minutes,second] = useCountdown('2025-12-31T00:00:00')


  return (
    <div className="app" style={{backgroundImage: `url(${Newyear})`}}>
      <div className="container">
        <Title title={'Contagem Regressiva para 2026'}/>
        <div className="countdown-container">
          <Counter title='Dias' number={day}/>
          <Counter title='Horas' number={hour}/>
          <Counter title='Minutos' number={minutes}/>
          <Counter title='Segundos' number={second}/>
        </div>
      </div>
      
    </div>
  )
}

export default App
