import { useContext } from 'react'
import { QuizContext } from '../context/quiz'


import Options from './Options'

import './Question.css'

const Question = () => {

    const [quizState, dispatch] = useContext(QuizContext)

    const currentQuestion = quizState.questions[quizState.currentQuestion]

    const onSelectOption = (option) => {
        dispatch({
            type: 'CHEK_ANSWER',
            payload: {answer: currentQuestion.answer, option},

        })
    }



    return (
        <div id='question'>
            <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div id="options-container">
                <div>
                    {currentQuestion.options.map((option) => (
                        <Options
                            option={option}
                            key={option}
                            answer={currentQuestion.answer}
                            selectOption={() => onSelectOption(option)}
                        />
                    ))}
                </div>
            </div>

            {quizState.answerSelected && (
                <button onClick={() => dispatch({ type: 'CHANGE_QUESTION' })}>Continuar</button>
            )}
        </div>
    )
}

export default Question