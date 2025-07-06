import { useContext } from "react"
import { CounterContext } from "../context/CounterContext";



const ChangeCounter = () => {
    const { counter, setCounter } = useContext(CounterContext);

    const handleClick = () => {
        setCounter( counter + 1);
    };

    const handleClickMenos = () => {
        setCounter( counter - 1);
    };


    return (
        <div>
            <button type="button" onClick={handleClick}>Incrementar</button>

            <button type="button" onClick={handleClickMenos}>Retirar</button>
        </div>
        
    )
}

export default ChangeCounter