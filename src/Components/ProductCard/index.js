const ProductCard = props => {
  const { product, addProductHandler, removeProductHandler } = props
  const { image, title, description, price, rating, id, purchased } = product
  return (
    <div className='col'>
      <div className='card h-100'>
        <img src={image} className='w-100' alt='' />
        <div className='card-body'>
          <h2 className='card-title'>{title}</h2>
          <p className='card-text'>{description.substring(0, 40)}</p>
          <p className='card-text'>Rating: {rating.rate}</p>
          <p className='card-text'>${price}</p>
          {!purchased ? (
            <button
              type='button'
              className='btn btn-primary'
              onClick={() => {
                addProductHandler(id)
              }}
            >
              Agregar al carrito
            </button>
          ) : (
            <button
              type='button'
              className='btn btn-warning'
              onClick={() => {
                removeProductHandler(id)
              }}
            >
              Eliminar
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
