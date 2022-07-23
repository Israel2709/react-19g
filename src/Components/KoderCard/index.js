const KoderCard = props => {
  const { koderId } = props
  const { nombre, email, generacion } = props.koder
  return (
    <div className='col' onClick={event => console.log(koderId)}>
      <div className='card'>
        <div className='card-body'>
          <p className='card-text'>{nombre}</p>
          <p className='card-text'>{email}</p>
          <p className='card-text'>{generacion}</p>
        </div>
      </div>
    </div>
  )
}

export default KoderCard
