import ProductCard from '../ProductCard'
const List = props => {
  const { listaProductos } = props
  console.log('desde list')
  console.log(listaProductos)
  return (
    <div className='row row-cols-1 row-cols-md-4 g-4'>
      {listaProductos.map(producto => (
        <ProductCard informacionDelProducto={producto} />
      ))}
    </div>
  )
}

export default List
