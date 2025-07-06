import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext.jsx";

export const useTitleColorContext = () => {
    const context = useContext(TitleColorContext);
    if (!context) {
        console.log('Não encontrado no contexto useTitleColorContext');
    }   

    return context;
}