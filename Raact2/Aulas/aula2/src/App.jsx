import Events from "./components/Events.jsx"
import FirstComponent from "./components/FirstComponent.jsx"
import MyComponent from "./components/MyComponent.jsx"
import TempleteExpression from "./components/TemplateExpression.jsx"
// Importando componente 
//Hierarquia de componentes
//Função de renderização

function App() {
  const name = 'Wender'

  const data = {
    age: 30,
    job: 'Programador'
  }

  
  

  return (
    
    <main>
      <h1>Aula 2 Fundamentos</h1>
      <FirstComponent/>
      <TempleteExpression/>
      <h3>
        Bem vindo {name}
      </h3>
      <p>
        Sua idade é {data.idade}! Sua profissão é {data.job}!
      </p>
      <MyComponent/>
      <Events/>
      

      
      
    </main>
  )
}

export default App
