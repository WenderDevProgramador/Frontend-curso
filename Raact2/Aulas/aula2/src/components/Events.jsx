

const Events = () => {
    const click = () => alert('Você clicou!')
    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando</h1>
        } else {
            return <h1>Não foi possivel renderizar</h1>
        }
    }

    
    return (
        <div>
            <div>
                <button onClick={click}>
                    Clique aqui
                </button>
                            {/* Função render */}
            {renderSomething(true)}
            {renderSomething(false)}
            </div>

        </div>
    )
}

export default Events