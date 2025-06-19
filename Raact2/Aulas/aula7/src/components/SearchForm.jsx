import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchForm = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!query) return // Evita enviar vazio

        navigate('/search?q=' + query)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Buscar produto"
                value={query}
                onChange={(e) => setQuery(e.target.value)} 
            />
            <input type="submit" value="Buscar" />
        </form>
    )
}

export default SearchForm
