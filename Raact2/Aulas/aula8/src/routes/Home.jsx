//3 - Alterando valor

// import { useContext } from "react"
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";


//4-Refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";



const Home = () => {
    // const {counter} = useContext(CounterContext);

    const { counter } = useCounterContext(); //Utilizando o hook personalizado

    const { color, dispatch } = useTitleColorContext();

    const setTitleColor = (color) => {
        dispatch({ type: color.toUpperCase() });
    }

    return (
        <div>

            <h1 style={{ color: color }}>Pagina inicial</h1>
            <p>Valor do contador: {counter} </p>
            <ChangeCounter />

            {/* Alterando contexto complexo */}



            <div>
                <button onClick={() => setTitleColor('RED')}>Vermelho</button>

                <button onClick={() => setTitleColor('blue')}>Azul</button>
            </div>


        </div>
    )
}

export default Home