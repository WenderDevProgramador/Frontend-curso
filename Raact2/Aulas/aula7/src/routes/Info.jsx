import { useParams } from "react-router-dom"

const Info = () => {
    const {id} = useParams()
    return (
        <div>
            <h1>Informações Produto: {id}</h1>
        </div>
    )
}

export default Info

