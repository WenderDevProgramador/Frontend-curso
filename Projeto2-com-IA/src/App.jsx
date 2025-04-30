import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Mission from "./pages/Mission";
import Contact from "./pages/Contact";
import Agendamento from "./pages/Agendamento";
import Exames from "./pages/Exames";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.scss';

export default function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Clinica MadCent</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Início</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">Quem Somos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mission">Missão e Visão</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contato</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/agendamento">Agendamento</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/exames">Exames</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/exames" element={<Exames />} />
      </Routes>

      <footer className="text-center py-4 bg-dark text-white">
        <p>
          Feito por{' '}
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-success">
            Wender R Queiroz
          </a>
        </p>
      </footer>
    </Router>
  );
}
