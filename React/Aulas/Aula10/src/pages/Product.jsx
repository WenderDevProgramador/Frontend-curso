import { Link, useLoaderData } from "react-router-dom";


export default function Product() {
    const product = useLoaderData()
    
    throw new Error('Opps um erro!')


    return (
        <section>
            <Link to='/products'>
            <button>
                Voltar
            </button>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>R$ {product.price}</p>
            <button>Comprar</button>
            </Link>
        </section>
    )
}