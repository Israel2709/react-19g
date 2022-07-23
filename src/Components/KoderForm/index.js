const KoderForm = props => {
  const { guardarKoder, inputHandler } = props
  return (
    <form action='' className='bg-dark text-white p-3 border rounded'>
      <div className='form-group'>
        <label htmlFor=''>Nombre:</label>
        <input
          type='text'
          className='form-control'
          name='nombre'
          onChange={inputHandler}
        />
      </div>
      <div className='form-group'>
        <label htmlFor=''>Correo</label>
        <input
          type='text'
          className='form-control'
          name='email'
          onChange={inputHandler}
        />
      </div>
      <div className='form-group'>
        <label htmlFor=''>Generación</label>
        <input
          type='text'
          className='form-control'
          name='generacion'
          onChange={inputHandler}
        />
      </div>
      <button
        className='btn btn-success mt-3 ms-auto'
        onClick={guardarKoder}
        type='button'
      >
        Guardar Koder
      </button>
    </form>
  )
}

export default KoderForm
