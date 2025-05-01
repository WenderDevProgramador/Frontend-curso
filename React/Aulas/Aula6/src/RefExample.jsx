import { useRef } from "react"

export default function RefExample() {
    const inputRef = useRef(null)

    const handleClick = () => {
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = '#f64348'


    }

    inputRef.current.style.backgroundColor = '#000'
    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Focar no Input</button>
        </div>
    )
}