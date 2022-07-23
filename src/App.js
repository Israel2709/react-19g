import './App.css'
import { useState } from 'react'
import List from './Components/List'
import KoderForm from './Components/KoderForm'

function App () {
  const [kodersList, setKodersList] = useState([])
  const [koderData, setKoderData] = useState({})

  /*{
    nombre:
    generacion:
    email
  }*/
  const inputHandler = event => {
    let property = event.target.name
    let value = event.target.value
    console.log(`property: ${property} , value: ${value}`)
    setKoderData({ ...koderData, [property]: value })
  }

  const guardarKoder = () => {
    setKodersList([...kodersList, koderData])
  }
  return (
    <div className='App'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <KoderForm
              inputHandler={inputHandler}
              guardarKoder={guardarKoder}
            />
          </div>
          <div className='col-12 col-md-6 mt-3'>
            {!kodersList.length ? (
              <h2>Registra un koder</h2>
            ) : (
              <List kodersList={kodersList} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
