import { Link, NavLink } from "react-router-dom"

import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink to='/' className={({isActive}) =>(isActive ? 'active' : '')}>Home</NavLink>
            <NavLink to='/contact' className={({isActive}) =>(isActive ? 'active' : '')}>Contatos</NavLink>
            <NavLink to='/historia' className={({isActive}) =>(isActive ? 'active' : '')}>Quem somos</NavLink>

        </div>
    )
}

export default NavBar