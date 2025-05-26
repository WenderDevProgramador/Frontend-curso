

const ConditionalRender = () => {
    const x = 5;
    const name =  'Wender'



    return (
        
        <div>
            {/* Render condicional */}
            <h3>Isso será exibido?</h3>
            {x > 2 && <p>Se x for maior que 2 sim!</p>}
            {/* else */}
            {name === 'Wen' ? (<div><p>Olá Wender</p></div>) : (<div><p>Nome não encontrado</p></div>)}
        </div>
    )
}

export default ConditionalRender