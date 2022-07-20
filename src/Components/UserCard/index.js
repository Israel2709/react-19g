import { Card, CardBody, CardText } from 'reactstrap'
const UserCard = props => {
  const { name, gender, dob, picture } = props.cardData
  const colorMap = {
    female: 'bg-purple',
    male: 'bg-yellow'
  }
  return (
    <div className='col'>
      <Card>
        <img alt='Card image' src={picture.large} />
        <CardBody>
          <CardText>
            {name.first} {name.last}
          </CardText>
          <CardText className={colorMap[gender]}>{gender}</CardText>
          <CardText>{dob.age}</CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default UserCard
