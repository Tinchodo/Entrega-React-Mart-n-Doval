import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavBar from './components/NavBar'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './Formulario/Formulario';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

    <NavBar  />
    <Formulario />
    </div>
    
  )
}

export default App
