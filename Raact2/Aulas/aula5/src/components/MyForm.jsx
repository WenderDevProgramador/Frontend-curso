import './MyForm.css'
import { useState } from 'react'

const MyForm = ({userName, userEmail, userBio}) => {

    const [name,setName] = useState(userName)
    const [email, setEmail] = useState(userEmail)
    const [bio, setBio] = useState(userBio)
    const [role, setRole] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Nome: ${name } Email: ${email} minha Bio ${bio} Categoria: ${role}`)

        //Limpar formulario

        setName('')
        setEmail('')
        setBio('')
        setRole('')
    }

    const handleName = (e) => {
        setName(e.target.value)
        
    }

        const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    return (
        <div>
            {/* Criação de formulario */}
            {/* Envio de formulario */}
            {/* input controlado */}
            {/* Resetar formulario */}
            {/* Textarea */}
            {/* Select */}

            <form onSubmit={handleSubmit}> 
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" 
                    name='name' 
                    id='name' 
                    placeholder='Digite seu nome'
                    onChange={handleName}
                    value={name || ''}/>
                    
                </div>
                {/* Label envolvendo o input */}
                <label >
                    <span>E-mail:</span>
                    <input type="email" 
                    name="email" 
                    id="email" 
                    placeholder='Digite o e-mail' 
                    onChange={handleEmail}
                    value={email || ''}/>
                </label>
                <label >
                    <span>Bio:</span>
                    <textarea name="bio" placeholder='Descrição do usuario' onChange={(e) => setBio(e.target.value)}
                        value={bio || ''}/>
                </label>
                <label >
                    <span>Função no sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)}
                    value={role}> 
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>

                <input type="submit" 
                value='Enviar'
                />
            </form>
        </div>
    )
}

export default MyForm