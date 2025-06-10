import { useState, useEffect } from 'react'


import './App.css'

const url = 'http://localhost:3000/products'



function App() {
  // 1 - Resgatando dados
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await fetch(url)

      const data = await res.json()

      setProducts(data)
    }

    getData()
  }, [])

  // Envio de dados

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(product),
    })

    //Carregamento dinamico

    const addedProduct = await res.json()

    setProducts((prevProducts) => [...prevProducts, addedProduct])

    setName('')
    setPrice('')
  }


  return (
    <div className="app">
      <h2>Requisições HTTP</h2>
      {/* Resgate de dados */}
      <ul>
        {products.map((product) => <li key={product.id}>{product.name} - R$ {product.price}</li>)}
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
