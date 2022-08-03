import { Link } from 'react-router-dom'
const Carrito = ({ shoppingCart }) => {
  const saveOrder = async () => {
    let response = await fetch(
      'https://react-19g-db-default-rtdb.firebaseio.com/sellOrders/.json',
      {
        method: 'POST',
        body: JSON.stringify(shoppingCart)
      }
    )
    response = await response.json()
    console.log(response)
  }
  return (
    <>
      <button className='btn btn-warning btn-block' onClick={saveOrder}>
        Realizar compra
      </button>
      <div className='row row-cols-1 row-cols-md-2 g-4'>
        {shoppingCart.map(product => {
          const {
            title,
            price,
            description,
            category,
            image,
            rating,
            id
          } = product
          return (
            <>
              <div className='col'>
                <div className='card'>
                  <img src={image} className='card-img-top' alt='...' />
                  <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                    <p className='card-text'>{description}</p>
                    <div className='d-flex justify-content-between flex-column'>
                      <Link to={`/product-detail/${id}/test`}>
                        <button className='btn btn-primary'>Ver detalle</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Carrito
