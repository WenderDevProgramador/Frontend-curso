import {FaUser, FaLock} from 'react-icons/fa'
import { useState } from 'react'
import './Login.css'

const Login = () => {

    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Seu login foi enviado: ${userName} : ${passWord}`)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Acesse o sistema</h2>
                    <div className='input-field'>
                        <label >
                            <FaUser className='icon'/>
                            <input 
                            type="email" 
                            name="email" 
                            placeholder="Digite o email" 
                            onChange={(e) => setUserName(e.target.value)}/>
                        </label>
                    </div>
                    <div className='input-field'>
                        <label >
                            <FaLock className='icon'/>
                            <input 
                            type="password" 
                            name="senha" 
                            placeholder="Senha" 
                            onChange={(e) => setPassWord(e.target.value)}/>
                        </label>
                    </div>

                    <div className="recall-forget">
                        <label >
                            <input type="checkbox" />
                            Lembrar de mim
                        </label>
                        <a href="#">Esqueceu a senha ?</a>
                    </div>

                    <button >Entrar</button>

                    <div className="signup-link">
                        <p>Não tem uma conta? <a href="#">Registrar</a></p>
                    </div>
                    
            </form>
        </div>
    )
}

export default Login