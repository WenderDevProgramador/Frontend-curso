import { useState } from "react"


const Data = () => {
    let someData = 10;

    const [number, setNumber] = useState(15)


    return (
        <div>
            <h4>Valor: {someData} </h4>
            <>
                <h4>Valor: {number} </h4>
                <button onClick={() => setNumber(number + 1)}>Soma  1</button><br />
                <button onClick={() => setNumber(number - 1)}>Subtrai  1</button>
            </>
        </div>

    )
}

export default Data