
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import SearchForm from './components/SearchForm'


function App() {
  

  return (
  <div className="App">
    <NavBar/>
    <SearchForm/>
    <Outlet/>
    <Footer/>
    
  </div>
  )
}

export default App
