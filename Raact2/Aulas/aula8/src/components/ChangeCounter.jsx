import { useContext } from "react"
import { CounterContext } from "../context/CounterContext";



const ChangeCounter = () => {
    const { counter, setCounter } = useContext(CounterContext);

    const handleClick = () => {
        setCounter( counter + 1);
    };


    return (
        <div>
            <button type="button" onClick={handleClick}>Incrementar</button>
        </div>
        
    )
}

export default ChangeCounter