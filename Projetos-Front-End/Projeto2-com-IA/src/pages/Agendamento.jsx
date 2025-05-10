import React, { useState } from 'react';

export default function Agendamento() {
    const [numeroPaciente, setNumeroPaciente] = useState('');
    const [dataConsulta, setDataConsulta] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Consulta agendada para o paciente número: ${numeroPaciente} na data: ${dataConsulta}`);
    };

    return (
        <div className="container py-5 animate__animated animate__fadeIn">
            <h2 className="mb-4 text-primary">Agendamento de Consulta</h2>
            <p className="lead mb-5 text-muted">Preencha os dados abaixo para agendar sua consulta.</p>

            <form onSubmit={handleSubmit} className="shadow-lg p-4 rounded bg-light">
                <div className="mb-3">
                    <label htmlFor="numeroPaciente" className="form-label">Número do Paciente</label>
                    <input
                        id="numeroPaciente"
                        type="text"
                        className="form-control"
                        value={numeroPaciente}
                        onChange={(e) => setNumeroPaciente(e.target.value)}
                        placeholder="Digite o número do paciente"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="dataConsulta" className="form-label">Data da Consulta</label>
                    <input
                        id="dataConsulta"
                        type="date"
                        className="form-control"
                        value={dataConsulta}
                        onChange={(e) => setDataConsulta(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-100 mt-3">
                    Agendar Consulta
                </button>
            </form>
        </div>
    );
}
