import UserCard from '../UserCard'
const List = props => {
  const {
    data //arreglo con la data que queremos enlistar
  } = props
  return (
    <div className='row row-cols-1 row-cols-md-4 g-4'>
      {data.map((item, index) => {
        console.log('item:')
        console.log(item)
        return <UserCard cardData={item} />
      })}
    </div>
  )
}

export default List
