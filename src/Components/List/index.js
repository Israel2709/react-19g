import Button from '../Button'
const List = () => {
  const buttons = [
    {
      text: 'Botón 6',
      color: 'primary'
    },
    {
      text: 'Botón 7',
      color: 'secondary'
    },
    {
      text: 'Botón 8',
      color: 'success'
    },
    {
      text: 'Botón 9',
      color: 'danger'
    },
    {
      text: 'Botón 10',
      color: 'warning'
    }
  ]
  return (
    <div>
      {buttons.map(button => {
        return <Button />
      })}
    </div>
  )
}

export default List
