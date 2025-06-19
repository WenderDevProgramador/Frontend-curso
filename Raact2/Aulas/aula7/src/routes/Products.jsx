import { useFetch } from "../hooks/useFetch"

import { useParams } from "react-router-dom"

import { Link } from "react-router-dom";

const Products = () => {

    const { id } = useParams();

    const url = 'http://localhost:3000/products/' + id

    const { data: product } = useFetch(url)

    if(!product) return <p>Carregando ...</p>

    return (
        <div>
            <p>ID do produto : {id}</p>
            <div>
                <h2>{product.name}</h2>
                <h3>R$: {product.price}</h3>
            </div>
            <Link to={`/product/${product.id}/info`}>Mais informações</Link>
        </div>
    )
}

export default Products