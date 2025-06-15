import { useState } from 'react';
import { useFetch } from './hooks/useFetch';

import './App.css';

const url = 'http://localhost:3000/products';

function App() {
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  // Estado para controle do modal de edição
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [editPrice, setEditPrice] = useState('');
  const [editQuantity, setEditQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
      quantity,
    };

    httpConfig(product, 'POST');

    setName('');
    setPrice('');
    setQuantity('');
  };

  const handleDelete = (id) => {
    httpConfig(null, 'DELETE', id);
  };

  const openEditModal = (product) => {
    setCurrentProduct(product);
    setEditPrice(product.price);
    setEditQuantity(product.quantity);
    setShowModal(true);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      ...currentProduct,
      price: editPrice,
      quantity: editQuantity,
    };

    httpConfig(updatedProduct, 'PUT', currentProduct.id);
    setShowModal(false);
  };

  return (
    <div className="app">
      <h2>Requisições HTTP com CRUD</h2>

      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}

      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              <strong>{product.name}</strong>
              <span>Preço: R$ {product.price}</span>
              <span>Quantidade: {product.quantity}</span>

              <div className="actions">
                <button onClick={() => handleDelete(product.id)}>Excluir</button>
                <button className="edit" onClick={() => openEditModal(product)}>
                  Editar
                </button>
              </div>
            </li>
          ))}
      </ul>

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>

          <label>
            <span>Preço:</span>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </label>

          <label>
            <span>Qtd:</span>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </label>

          {loading ? (
            <input type="submit" disabled value="Aguarde..." />
          ) : (
            <input type="submit" value="Criar" />
          )}
        </form>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Editar Produto</h3>
            <form onSubmit={handleEditSubmit}>
              <label>
                <span>Novo Preço:</span>
                <input
                  type="text"
                  value={editPrice}
                  onChange={(e) => setEditPrice(e.target.value)}
                  required
                />
              </label>

              <label>
                <span>Nova Quantidade:</span>
                <input
                  type="number"
                  value={editQuantity}
                  onChange={(e) => setEditQuantity(e.target.value)}
                  required
                />
              </label>

              <div className="modal-actions">
                <button type="submit" className="save">
                  Salvar
                </button>
                <button
                  type="button"
                  className="cancel"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
