import { useState } from 'react';
import { useFetch } from './hooks/useFetch';

import './App.css';

const url = 'http://localhost:3000/products';

function Sales() {
    const { data: items, httpConfig } = useFetch(url);

    const [searchTerm, setSearchTerm] = useState('');
    const [result, setResult] = useState(null);
    const [quantity, setQuantity] = useState('');

    const handleSearch = () => {
        const found = items?.find(
            (item) => item.name.toLowerCase() === searchTerm.toLowerCase()
        );
        if (found) {
            setResult(found);
        } else {
            setResult(null);
            alert('Produto não encontrado!');
        }
        setQuantity('');
    };

    const handleSale = () => {
        if (!quantity || quantity <= 0) {
            alert('Informe uma quantidade válida!');
            return;
        }

        if (quantity > result.quantity) {
            alert('Quantidade maior do que o estoque!');
            return;
        }

        const updatedProduct = {
            ...result,
            quantity: Number(result.quantity) - Number(quantity),
        };

        httpConfig(updatedProduct, 'PUT', result.id);
        alert(`Venda realizada com sucesso!`);

        setResult(updatedProduct);
        setQuantity('');
    };

    const handleReturn = () => {
        if (!quantity || quantity <= 0) {
            alert('Informe uma quantidade válida!');
            return;
        }

        const updatedProduct = {
            ...result,
            quantity: Number(result.quantity) + Number(quantity),
        };

        httpConfig(updatedProduct, 'PUT', result.id);
        alert(`Devolução realizada com sucesso!`);

        setResult(updatedProduct);
        setQuantity('');
    };

    return (
        <div className="app">
            <h2>Tela do Vendedor</h2>

            <div className="search-box">
                <input
                    type="text"
                    placeholder="Buscar produto pelo nome"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Buscar</button>
            </div>

            {result && (
                <div className="product-card">
                    <h3>{result.name}</h3>
                    <p>Preço: R$ {result.price}</p>
                    <p>Em estoque: {result.quantity}</p>

                    <label>
                        Quantidade:
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </label>

                    <div className="actions">
                        <button onClick={handleSale} className="sale">
                            Vender
                        </button>
                        <button onClick={handleReturn} className="return">
                            Devolver
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Sales;
