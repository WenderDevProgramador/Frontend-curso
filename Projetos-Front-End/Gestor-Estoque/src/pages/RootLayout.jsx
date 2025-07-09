import { Link, Outlet } from "react-router-dom";

import './RootLayout.css';

export default function RootLayout() {
    return (
        <>
        <header>
            <Link to="/" className="Link">REACT STOCK</Link>
            <nav>
                <Link className="Link" to="/">Home</Link>
                <Link className="Link" to="/items">Items</Link>
            </nav>
        </header>
        <div>
            <Outlet/>
        </div>
        <footer>
            <p>Feito por <a  href="https://github.com/WenderDevProgramador?tab=repositories" target="_blank" rel="noopener noreferrer">Wender R Queiroz</a></p>
        </footer>
        </>
    );
}