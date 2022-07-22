import './App.css'
import List from './Components/List'
import products from './mocks/mock_products'
import Shape from './Components/Shape'

function App () {
  console.log('desde app')
  console.log(products)
  const shapes = [
    {
      shape: 'square',
      color: 'red'
    },
    {
      shape: 'circle',
      color: 'blue'
    },
    {
      shape: 'rectangle',
      color: 'green'
    },
    {
      shape: 'circle',
      color: 'black'
    },
    {
      shape: 'square',
      color: 'yellow'
    },
    {
      shape: 'rectangle',
      color: 'red'
    }
  ]

  return (
    <div className='App'>
      {shapes
        .filter(shape => shape.shape === 'square')
        .map(shape => (
          <Shape shape={shape.shape} color={shape.color} />
        ))}
    </div>
  )
}

export default App
