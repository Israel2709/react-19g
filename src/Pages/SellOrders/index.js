import { useEffect, useState } from 'react'

const SellOrders = () => {
  const [ordersList, setOrdersList] = useState({})
  useEffect(() => {
    const getSellOrders = async () => {
      let data = await fetch(
        'https://react-19g-db-default-rtdb.firebaseio.com/sellOrders/.json'
      )
      data = await data.json()
      setOrdersList(data)
    }
    getSellOrders()
  }, [])
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Name</th>
          <th scope='col'>Description</th>
          <th scope='col'>Price</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(ordersList).map(order => {
          const { title, description, price } = ordersList[order]
          return (
            <tr>
              <th scope='row'>{order}</th>
              <td>{title}</td>
              <td>{description}</td>
              <td>{price}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default SellOrders
