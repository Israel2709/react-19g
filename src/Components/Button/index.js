const Button = props => {
  const { color = 'primary', text = 'Soy un botón' } = props
  return <button className={`btn btn-${color}`}>{text}</button>
}

export default Button
