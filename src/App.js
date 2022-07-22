import './App.css'
import { useState } from 'react'
import Title from './Components/Title'

function App () {
  const result = () => 5 + 6
  const [title, setTitle] = useState('Hola koders!')
  const [isLogged, setIsLogged] = useState(false)
  const [miUnicoEstadoMaravilloso, setMiUnicoEstadoMaravilloso] = useState(
    result()
  ) //null

  const inputHandler = event => {
    console.log(event.target.name)
    console.log(event.target.value)
    setTitle(event.target.value)
  }

  const loginHandler = () => {
    setIsLogged(true)
  }

  const logoutHandler = () => {
    setIsLogged(false)
  }
  return (
    <div className='App'>
      {/*!isLogged && (
        <button className='btn btn-success' onClick={loginHandler}>
          Login
        </button>
      )*/}
      {/*isLogged && (
        <button className='btn btn-warning' onClick={logoutHandler}>
          Sign out
        </button>
      )*/}
      {console.log(title)}
      <input type='text' onChange={inputHandler} name='nombre' />
      <input type='text' onChange={inputHandler} name='correo' />
      <Title texto={title} />
    </div>
  )
}

export default App
