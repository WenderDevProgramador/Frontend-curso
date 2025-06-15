import { useState, useEffect } from 'react'
import { useFetch } from './hooks/useFetch'


import './App.css'


const url = 'http://localhost:3000/products'



function App() {
  // 1 - Resgatando dados
  const [products, setProducts] = useState([])


  const {data: items, httpConfig}  = useFetch(url)

  // Envio de dados

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const handleSubmit = (e) => {
  e.preventDefault();

  const product = {
    name,
    price,
  };

  httpConfig(product, 'POST');

  setName('');
  setPrice('');
};



  return (
    <div className="app">
      <h2>Requisições HTTP</h2>
      {/* Resgate de dados */}
      <ul>
        {items && 
        items.map((product) => <li key={product.id}>{product.name} - R$ {product.price}</li>)}
      </ul>
      {/* Enviando dados */}

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome: </span>
            <input type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} 
              required/>
          </label>

          <label>
            <span>Preço: </span>
            <input type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)} 
              required/>
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>

    </div>
  )
}

export default App
