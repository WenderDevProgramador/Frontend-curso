// 1 - Criar Context

import { createContext, useState } from 'react'; //Necessário para criar o contexto

export const CounterContext = createContext(); //Ciação do contexto

// 2 - Criar o Provider

export const CounterContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(5); //Estado do contador

    return (

        <CounterContext.Provider value={{ counter, setCounter }}>   
        {children}

        </CounterContext.Provider>

    );
}