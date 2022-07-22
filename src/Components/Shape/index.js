const Shape = props => {
  const { shape, color } = props
  return <div className={`${shape} bg-${color}`}></div>
}

export default Shape
