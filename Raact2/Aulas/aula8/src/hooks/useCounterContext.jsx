// src/hooks/useCounterContext.jsx

import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounterContext = () => {
    const context = useContext(CounterContext);

    if (!context) {
        console.error("Não encontrado o contexto CounterContext");
        return;
    }

    console.log(context);

    return context;
};

