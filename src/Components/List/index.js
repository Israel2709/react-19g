import KoderCard from '../KoderCard'

const List = props => {
  const { kodersList } = props
  return (
    <div className='row row-cols-1 row-cols-md-3 g-4'>
      {kodersList.map((koder, index) => {
        return <KoderCard koder={koder} key={index} />
      })}
    </div>
  )
}

export default List
