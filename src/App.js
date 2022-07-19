import logo from './logo.svg'
import './App.css'
import Title from './Title'
import Button from './Button'

function App () {
  return (
    <div className='App'>
      <Title />
      <Title />
      <Title />
      <Title />
      <Button text='guardar' color='green' />
      <Button text='cancelar' color='red' />
    </div>
  )
}

export default App
