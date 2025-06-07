//Components
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import ReviewForm from './Components/ReviewForm'
import Thanks from './Components/Thanks'
import UserForm from './Components/UserForm'
import Step from './Components/Step'

//Hooks

import { useForm } from './hooks/useForm'


import './App.css'


function App() {

  const formComponents = [
    <UserForm />, <ReviewForm />, <Thanks />
  ]

  const { currentStep, currentComponent, changeStep, isLasStep, isFirstStep } = useForm(formComponents)

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, últilize o formulário abaixo para avaliar o produto
        </p>
      </div>
      
      <div className="form-container">
        <Step currentStep={currentStep}/>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="actions">
            {!isFirstStep && (<button type="button" onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>)}

            {!isLasStep ? (<button type="submit">
              <span>Avançar</span>
              <GrFormNext />
            </button>) : (<button type="button">
              <span>Enviar</span>
              <FiSend />
            </button>)}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App