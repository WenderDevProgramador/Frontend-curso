import Container from './Components/Container'
import UserInfo from './Components/UserInfo'
import UserContext from './Contexto/UserContext'
import Header from './Components/Header'

export default function App() {
  const user = {
    name: 'João',
    email: 'joao@email.com'
  }

  return (
    <>
    <UserContext.Provider value={user}>
      <Header/>
    <h1>Usando Contexto</h1>

    <Container>
      <p>Esse é o nosso app com contexto</p>
      <UserInfo/>
    </Container>

    </UserContext.Provider>

    <div>
      {/*Aqui não há acesso ao context */}
    </div>

    </>
  )
}