import Game from './components/Game'
import NewGameForm from "./components/NewGameForm"
import useGameCollection from './hooks/useGameCollection'

export default function App() {
  const {games, addGame, removeGame} = useGameCollection()
  
  return (
    <div  id="app">
      <h1>Biblioteca De Jogos</h1>
      <NewGameForm addGame={addGame} />

      <div className="games">
        {games.length > 0 ? (
          games.map((game) => (
            <Game
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemove={() => removeGame(game.id)}
            />
          ))
        ) : (
          <div className='recado'>
            <h2>Parece que ainda não há nada para ser exibido</h2>
          </div>
        )}
      </div>

      <div className="footer">
        <p>Feito por Wender</p>
      </div>
    </div>
  )
}
