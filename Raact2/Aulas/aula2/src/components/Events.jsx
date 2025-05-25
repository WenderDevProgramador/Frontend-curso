

const Events = () => {
    const click = () => alert('Você clicou!')
    return (
        <div>
            <div>
                <button onClick={click}>
                    Clique aqui
                </button>
            </div>
        </div>
    )
}

export default Events