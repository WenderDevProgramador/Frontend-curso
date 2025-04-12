// 
import reactlogo from './assets/react.png'

export default function App() {
  return (
    <div className="app">
      <img src={reactlogo} alt="react" />
      <p>A biblioteca para interfaces de usuários web e nativas.</p>
      <div>
        <button>Aprenda React</button>
        <button>Referência da API</button>
      </div>
      <hr />
      <h2>Crie interfaces de usuários de componentes</h2>
      <p>React permite que você construa interfaces de usuários chamados de componentes </p>
      <hr />
      <h2>Escreva componentes com código e marcação</h2>
      <p>Componentes React são funções JavaScript. A sintaxe de marcação chamada de JSX.</p>
      <hr />
      <h2>Próximos passos</h2>
      <ul>
        <li>Uso de dados dinâmicos no JSX</li>
        <li>Criação de componentes</li>
        <li>Estilização de componentes</li>
        <li>Reutilização de componentes</li>
        <li>Uso de props e children</li>
        <li>Uso de eventos do JavaScript</li>
        
      </ul>

    </div>)
}