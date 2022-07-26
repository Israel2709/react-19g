import ProductCard from '../ProductCard'

const ItemsList = props => {
  const { productsArray, addProductHandler, removeProductHandler } = props

  return (
    <div className='row row-cols-1 row-cols-md-2 g-4'>
      {productsArray.map(product => {
        return (
          <ProductCard
            product={product}
            addProductHandler={addProductHandler}
            removeProductHandler={removeProductHandler}
          />
        )
      })}
    </div>
  )
}

export default ItemsList
