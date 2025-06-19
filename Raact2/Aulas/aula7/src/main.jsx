import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Contact from './routes/Contact.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Home from './routes/Home.jsx';
import Historia from './routes/Historia.jsx'
import Products from './routes/Products.jsx';
import Info from './routes/Info.jsx';
import Search from './routes/Search.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    //Componente base
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'contact',
        element: <Contact />,
      },
            {
        path: 'historia',
        element: <Historia />,
      },

      //Rota dinamica
      {
        path: 'products/:id',
        element: <Products/>
      },

      // Rotas aninhadas 

      {
        path: 'product/:id/info',
        element: <Info/>
      },

      // Search

      {
        path: 'search',
        element: <Search/>,
      },
      {
        path:'teste',
        element: <Navigate to='/'/>
      }


    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
