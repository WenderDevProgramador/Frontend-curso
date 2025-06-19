import { useFetch } from '../hooks/useFetch'
import { Link, useSearchParams } from 'react-router-dom'

const Search = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get('q')

    const url = 'http://localhost:3000/products?name=' + query

    const { data: items } = useFetch(url)

    return (
        <div>
            <h1>Resultados da pesquisa</h1>
            {items && items.length === 0 && <p>Nenhum item encontrado...</p>}
            <ul className='products'>
                {items && items.map((item) => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>R$: {item.price}</p>
                        <Link to={`/products/${item.id}`}>Detalhes</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Search
