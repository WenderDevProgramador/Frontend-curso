import { createContext, useReducer } from "react";
import questions from '../data/questions_complete';

const STAGES = ['Start','Category', 'Playing', 'End'];

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
    help: false,
    optionToHide: null,
};

const quizReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_STATE':
            return {
                ...state,
                gameStage: STAGES[1],
            };

        case 'START_GAME':
            let quizQuestions = null

            state.questions.forEach((question) => {
                if (question.category === action.payload) {
                    quizQuestions = question.questions
                }
            })

            return {
                ...state,
                questions: quizQuestions,
                gameStage: STAGES[2],
            }

        case 'REORDER_QUESTIONS':
            const reorderedQuestions = state.questions.sort(() => Math.random() - 0.5);
            return {
                ...state,
                questions: reorderedQuestions,
            };

        case 'CHANGE_QUESTION':
            const nextQuestion = state.currentQuestion + 1;
            const endGame = !state.questions[nextQuestion];

            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[3] : state.gameStage,
                answerSelected: false,
                help: false,
            };

        case 'NEW_GAME':
            return {
                ...initialState,
                questions: questions.sort(() => Math.random() - 0.5), // opcional: embaralhar ao reiniciar
            };

        case 'CHEK_ANSWER':
            if (state.answerSelected) return state;

            const { answer, option } = action.payload;
            const isCorrect = answer === option;

            return {
                ...state,
                score: isCorrect ? state.score + 1 : state.score,
                answerSelected: true,
            };

        case 'SHOW_TIP':
            return {
            ...state,
            help: 'tip',

            }

        case 'REMOVE_OPTION':
            const questionWithoutOption = state.questions[state.currentQuestion]

            let repeat = true
            let optionToHide  

            questionWithoutOption.options.forEach((option) => {
                if (option !== questionWithoutOption.answer && repeat) {
                    optionToHide = option
                    repeat = false
                }
            })

            return {
                ...state,
                optionToHide,
                help: true,
            }




        default:
            return state;
    }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);

    return (
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    );
};
