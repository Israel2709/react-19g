import { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [kodersList, setKodersList] = useState()
  const [koderData, setKoderData] = useState({})
  const [newKoderKey, setNewKoderKey] = useState()

  const inputHandler = event => {
    const property = event.target.name
    const value = event.target.value
    setKoderData({ ...koderData, [property]: value })
  }

  const saveKoder = async () => {
    let result = await fetch(
      'https://react-19g-db-default-rtdb.firebaseio.com/koders/.json',
      {
        method: 'POST',
        body: JSON.stringify(koderData)
      }
    )
    result = await result.json()
    setNewKoderKey(result.name)
  }
  const deleteKoder = async koderKey => {
    let result = await fetch(
      `https://react-19g-db-default-rtdb.firebaseio.com/koders/${koderKey}.json`,
      {
        method: 'DELETE'
      }
    )
    console.log('result antes', result)
    result = await result.json()
    console.log('delete result', result)

    let data = await fetch(
      'https://react-19g-db-default-rtdb.firebaseio.com/koders/.json'
    )
    data = await data.json()
    console.log(data)
    setKodersList(data)
  }
  useEffect(() => {
    const getKoders = async () => {
      let data = await fetch(
        'https://react-19g-db-default-rtdb.firebaseio.com/koders/.json'
      )
      data = await data.json()
      console.log(data)
      setKodersList(data)
    }
    getKoders()
  }, [newKoderKey])
  return (
    <div className='App'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            {kodersList ? (
              <div className='row row-cols-1 row-cols-md-2 g-4'>
                {Object.keys(kodersList).map(koderKey => {
                  const { name, generation } = kodersList[koderKey]
                  return (
                    <div className='col h-100' key={koderKey}>
                      <div className='card'>
                        <div className='card-body'>
                          <p className='card-text'>{name}</p>
                          <p className='card-text'>{generation}</p>
                          <button
                            className='btn btn-danger'
                            onClick={() => deleteKoder(koderKey)}
                          >
                            Borrar koder
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className='loader'></div>
            )}
          </div>
          <div className='col-12 col-md-6'>
            <form action='' className='bg-dark text-white p-3 border rounded'>
              <div className='form-group'>
                <label htmlFor=''>Nombre del koder</label>
                <input
                  type='text'
                  className='form-control'
                  name='name'
                  onChange={inputHandler}
                />
              </div>
              <div className='form-group'>
                <label htmlFor=''>Generación del koder</label>
                <input
                  type='text'
                  className='form-control'
                  name='generation'
                  onChange={inputHandler}
                />
              </div>
              <button
                type='button'
                className='btn btn-primary'
                onClick={saveKoder}
              >
                Guardar Koder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
