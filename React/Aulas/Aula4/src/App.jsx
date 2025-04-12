function sum(a,b) {
  return a + b
}

export default function App() {

  const tech = 'Bem vindo'
  const status =  true

  return (
    <div>
      <h1>{tech} ao curso de React</h1>
      <h2>É facil como 1+2  é {sum(1,2)}</h2>
      <h2>Current status: {status ? 'on' : 'off'}</h2>
      <p>{true && 'Text'}</p>
    </div>
  )
}
