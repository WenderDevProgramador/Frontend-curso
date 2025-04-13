import Title from "./Componets/Title"
import { Subtitle } from "./Componets/Subtitle"
import StatusText from "./Componets/StatusText"
import styles from './App.module.css'

function sum(a, b) {
  return a + b
}



export default function App() {

  return (
    <div className={styles.app}>

      <Title />
      <Subtitle />
      <StatusText />
      <p>{true && 'Text'}</p>
    </div>
  )
}
