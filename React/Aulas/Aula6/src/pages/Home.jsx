import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container py-5 text-center animate__animated animate__fadeIn">
            <h1 className="mb-4 display-4 text-primary fw-bold">Bem-vindo à Clínica MadCent</h1>
            <p className="lead mb-5 text-muted">
                Cuidando da sua saúde com tecnologia, carinho e excelência.
            </p>

            <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link to="/agendamento" className="btn btn-success btn-lg shadow animate__animated animate__pulse">
                    <i className="bi bi-calendar-check-fill me-2"></i>
                    Agendar Consulta
                </Link>
                <Link to="/exames" className="btn btn-info btn-lg shadow animate__animated animate__pulse">
                    <i className="bi bi-file-earmark-medical-fill me-2"></i>
                    Ver Resultado de Exames
                </Link>
            </div>
        </div>
    );
}
