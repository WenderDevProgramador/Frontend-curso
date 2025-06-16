import { useRouteError } from "react-router-dom"

const ErrorPage = () => {

    const error = useRouteError()

    console.log(error)

    return (
        <div>
            <h1>Pagina de error</h1>
            <h3>Algo deu errado!</h3>
            <p>{error.statusText}</p>
            <p>{error.error.message}</p>
        </div>
    )
}

export default ErrorPage