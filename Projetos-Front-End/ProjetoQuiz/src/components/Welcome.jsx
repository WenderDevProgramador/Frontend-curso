
//img
import Quiz from '../img/quiz.svg'

//hooks

import { useContext } from 'react'
import { QuizContext } from '../context/quiz'



//estilo


import './Welcome.css'

const Welcome = () => {
    const quizState = useContext(QuizContext)
    return (
        <div id='welcome'>
            <h2>Sejá bem vindo</h2>
            <p>Clique no botão para começar:</p>
            <button>Iniciar</button>
            <img src={Quiz} alt="Inicio quiz" />
            
            
        </div>
    )
}

export default Welcome