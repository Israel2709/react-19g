const ProductCard = props => {
  const { informacionDelProducto } = props
  console.log('desde card')
  console.log(informacionDelProducto)
  const {
    title,
    price,
    description,
    category,
    image,
    rating
  } = informacionDelProducto

  const selectColor = ratingValue => {
    console.log(ratingValue)
    let colorClass = ''
    if (ratingValue < 3) {
      colorClass = 'text-danger'
    } else if (3 < ratingValue < 4.5) {
      colorClass = 'text-warning'
    } else if (ratingValue > 4.5) {
      colorClass = 'text-success'
    }

    return colorClass
  }

  const color = selectColor(rating.rate)

  return (
    <div className='col'>
      <div className='card'>
        <img src={image} alt='' />
        <div className='card-body'>
          <p className='card-text'>{title}</p>
          <p className='card-text'>{description}</p>
          <p className='card-text'>{category}</p>
          <p className='card-text'>{price}</p>
          <p className={`card-text fw-bold ${color}`}>{rating.rate}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
