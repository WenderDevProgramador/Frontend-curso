import './MyForm.css'
import { useState } from 'react'

const MyForm = () => {

    const [name,setName] = useState('')
    const [email, setEmail] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
        
    }

        const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    return (
        <div>
            {/* Criação de formulario */}

            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" 
                    name='name' 
                    id='name' 
                    placeholder='Digite seu nome'
                    onChange={handleName}/>
                </div>
                {/* Label envolvendo o input */}
                <label >
                    <span>E-mail:</span>
                    <input type="email" 
                    name="email" 
                    id="email" 
                    placeholder='Digite o e-mail' 
                    onChange={handleEmail}/>
                </label>
                <input type="submit" 
                value='Enviar'
                />
            </form>
        </div>
    )
}

export default MyForm