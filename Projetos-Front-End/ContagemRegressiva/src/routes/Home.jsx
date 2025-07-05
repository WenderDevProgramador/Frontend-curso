import { useState } from 'react'
import { CountdownContext } from '../context/CountdownContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'




import './home.css'

const Home = () => {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [image, setImage] = useState('')
    const [color, setColor] = useState('')

    const {event, setEvent} = useContext(CountdownContext)

    const navigate = useNavigate()


    const handleSubmit = (ev) => {
        ev.preventDefault()

        const eventObjetct = {
            title,
            date,
            image,
            color,
    }

    setEvent(eventObjetct)
    navigate('/countdown')

}


    return (
        <div className="home">
            <h2>Monte a sua contagem regressiva!</h2>
            <form className="countdown-form" onSubmit={handleSubmit}>
                <label >
                    <span>Título:</span>
                    <input
                        type="text"
                        name="title"
                        placeholder="Digite o título"
                        required
                        onChange={(ev) => setTitle(ev.target.value)} />
                </label>

                <label >
                    <span>Data:</span>
                    <input type="date" name="date" required onChange={(ev) => setDate(ev.target.value)} />
                </label>

                <label >
                    <span>Imagem:</span>
                    <input 
                    type="text" 
                    name="image" 
                    placeholder="Insira a url da imagem"  
                    onChange={(ev) => setImage(ev.target.value)} />
                </label>

                <label >
                    <span>Cor do tema:</span>
                    <input type="color"
                        name="color"
                        onChange={(ev) => setColor(ev.target.value)}
                        required />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default Home