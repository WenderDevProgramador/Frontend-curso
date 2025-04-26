import { useState } from "react"
import Game from './components/Game'
import NewGameForm from "./components/NewGameForm"


export default function App() {
  const [games, setGames] = useState(() => {
    const storageGames = localStorage.getItem('obc-game-lib')
    if(!storageGames) return []
    const gameArray = JSON.parse(storageGames)
    return gameArray
  })




  const generateUniqueId = () => {
    const generatedIds = new Set();
    let id;
    do {
      id = Math.floor(Math.random() * 10000);
    } while (generatedIds.has(id));

    generatedIds.add(id);
    return id;
  }


  const addGame = ({ title, cover }) => {
    const id = generateUniqueId()
    const game = { id, title, cover }

    setGames(state => {
      const newState = [...state, game]
    
      localStorage.setItem('obc-game-lib', JSON.stringify(newState))
      return newState
    })
  }

  const removeGame = (id) => {
    setGames(state => {
      const newState = state.filter(game => game.id !== id)
      localStorage.setItem('obc-game-lib', JSON.stringify(newState))
      return newState
    })
  }


  return (
    <div className="main" id="app">
      <h1>Biblioteca De Jogos</h1>
      <NewGameForm
      addGame={addGame}
      />

      <div className="games">
        {games.map((game) => (
          <Game
          key={game.id}
          title={game.title}
          cover={game.cover}
          onRemove={() => removeGame(game.id)}/>
          
        ))}
      </div>
      <div className="footer">

        <p>Feito por Wender</p>
      </div>
    </div>
  )
}