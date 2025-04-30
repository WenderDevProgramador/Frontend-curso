import React, { useState } from 'react';

export default function Exames() {
    const [numeroExame, setNumeroExame] = useState('');
    const [resultado, setResultado] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Simulação de um resultado de exame
        setResultado(`Resultado do exame ${numeroExame}: Negativo`);
    };

    return (
        <div className="container py-5 animate__animated animate__fadeIn">
            <h2 className="mb-4 text-info">Buscar Resultado de Exame</h2>
            <p className="lead mb-5 text-muted">Digite o número do exame para buscar o resultado.</p>

            <form onSubmit={handleSearch} className="shadow-lg p-4 rounded bg-light">
                <div className="mb-3">
                    <label htmlFor="numeroExame" className="form-label">Número do Exame</label>
                    <input
                        id="numeroExame"
                        type="text"
                        className="form-control"
                        value={numeroExame}
                        onChange={(e) => setNumeroExame(e.target.value)}
                        placeholder="Digite o número do exame"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-info btn-lg w-100 mt-3">
                    Buscar Resultado
                </button>
            </form>

            {resultado && (
                <div className="mt-4 p-3 bg-light rounded">
                    <h4 className="text-success">{resultado}</h4>
                </div>
            )}
        </div>
    );
}
