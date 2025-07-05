//3 - Alterando valor

// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";
import { useConterContext } from "../hooks/useCounterContext";

//4-Fatorando com hook


const Home = () => {
    // const {counter} = useContext(CounterContext);

    const { counter } = useConterContext(); //Utilizando o hook personalizado
    
    return (
        <div>
            
            <h1>Pagina inicial</h1>
            <p>Valor do contador: {counter} </p>
            <ChangeCounter/>
            
            
        </div>
    )
}

export default Home