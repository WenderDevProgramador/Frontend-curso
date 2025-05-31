import Button from "./Button"
import { useState } from "react"
import './ImcCalc.css'


const ImcCalc = ({calcImc}) => {
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')

    const clearForm = (e) => {
        e.preventDefault()
        setWeight('')
        setHeight('')
    }

    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, '')
    }

    const handleHeightCharge = (e) => {
        const updateValue = validDigits(e.target.value)
        setHeight(updateValue)
    }

    const handleWeightCharge = (e) => {
        const updateValue = validDigits(e.target.value)
        setWeight(updateValue)
    }


    return (
        <div id="calc-container">
            <h2>Calculadora IMC</h2>
            <form id="imc-form">
                <div className="form-inputs">
                    <div className="form-control">
                        <label htmlFor="height">Altura</label>
                        <input 
                        type="text" 
                        name="height" 
                        id="height" 
                        placeholder="Exemplo 1,75"
                        onChange={handleHeightCharge}
                        value={height} />
                    </div>

                    <div className="form-control">
                        <label htmlFor="weight">Peso</label>
                        <input 
                        type="text" 
                        name="weight" 
                        id="weight" 
                        placeholder="Exemplo 70,5"
                        onChange={handleWeightCharge}
                        value={weight} />
                    </div>
                </div>
                <div className="action-control">
                    <Button id='calc-btn' text='Calcular' 
                    action={(e) => calcImc(e, height, weight)} />
                    <Button id='clear-btn' text='Limpar' action={clearForm} />

                </div>
            </form>
        </div>
    )
}

export default ImcCalc