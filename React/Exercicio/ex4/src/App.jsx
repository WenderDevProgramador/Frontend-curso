import { useState } from "react"
import Input from "./components/Input"

export default function App() {
  const [password, setPassword] = useState('')
  const [copyText, setCopyText] = useState('Copiar')
  const [passwordSize, setPasswordSize] = useState(12)
  const [showInput, setShowInput] = useState(false)
  const passWSize = showInput ? passwordSize : 12

  function generate() {
    const characters = "1234567890!@#$%qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM?"
    
    let newPassword = ''

    for (let i= 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)
    setCopyText('Copiar')
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password)
    setCopyText('Copiado!')
    
  }

  function toggleShowInput() {
    if (showInput) {
      setShowInput(false)
      setPasswordSize(12)
    } else {
      setShowInput(true)
    }
  }
  

  return (
    <div className="app">
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="showInput" >Costumizar o tamanho:</label>
        <input 
        type="checkbox" 
        name="show" 
        id="showInput"
        value={showInput}
        onChange={toggleShowInput} />
      </div>
      {showInput ? (
        <div>
        <label htmlFor="passWordSize">Tamanho:</label>
        <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize}/>
      </div>
      ) : null}
      
      <button onClick= {generate}>Gerar com {passWSize} caracteres</button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>{password}</div>
    </div>
  )
}

