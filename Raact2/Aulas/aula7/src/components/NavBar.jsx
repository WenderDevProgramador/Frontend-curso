import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contatos</Link>
            <Link to='/historia'>Quem somos</Link>

        </div>
    )
}

export default NavBar