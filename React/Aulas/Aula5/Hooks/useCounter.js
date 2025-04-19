import { useState } from "react"



export default function useCounter() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount((currentState) => currentState + 1)
        setCount((currentState) => currentState + 1)
    }

    return { count, increment }
}