import { RouterProvider } from 'react-router-dom';
import router from './router';

import './App.css';
import { StockContextProvider } from './context/StockContext'; 

function App() {
  return (
    <main className="app">
    <StockContextProvider>
      <RouterProvider router={router} />
    </StockContextProvider>
    </main>
    
  );
}

export default App;
