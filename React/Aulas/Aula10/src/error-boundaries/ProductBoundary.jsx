
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export default function ProductBoundary() {
    const error = useRouteError()

    if (isRouteErrorResponse(error)) {
        switch (error.status) {
            case 404:
                return <h2>Ooops.... Produto não encontrado</h2>
            case 401:
                return <h2>Você não está autorizado!</h2>
            case 400:
                return <h2>Algo deu errado na requisição</h2>
            case 500:
                return <h2>Erro interno no servidor</h2>
        }
    }

    return <h2>Algo deu errado tente novamente mais tarde </h2>
}