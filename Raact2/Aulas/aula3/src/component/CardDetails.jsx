

const CardDetails = ({brand, km, color}) => {
    return (
        //Destruturando props
        <div>
            <h2>Detalhes do carro:</h2>
            <ul>
                <li>Marca: {brand}</li>
                <li>Kilometragem: {km}</li>
                <li>Cor pinura: {color}</li>
            </ul>
        </div>
    )
}

export default CardDetails