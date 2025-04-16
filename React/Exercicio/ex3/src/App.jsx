import Profile from "./Components/Profile";
import foto from './assets/image.png'
import './index.css'
export default function App() {
  return (
    <div className="app">
      <Profile
      avatar= {foto}
      name='Maria Cecilha'
      bio='Dev Front-end'
      email='mariceci@email.com'
      phone='556199998877'
      githubUrl='#'
      linkedInUrl='#'
      twitterUrl='#'
      />
    </div>
  )
}