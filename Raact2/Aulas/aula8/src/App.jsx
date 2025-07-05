
import './App.css'

import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';

function App() {
  

  return (
    
      <div className='App'>
        <NavBar/>
        <h1>CONTEXT API</h1>
        <Outlet/>
        
      </div>

    
  )
}

export default App
