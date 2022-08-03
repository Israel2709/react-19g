import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import { Link, Routes, Route } from 'react-router-dom'
import Publicaciones from './Pages/Publicaciones'
import NuevaPublicacion from './Pages/NuevaPublicacion'
import Products from './Pages/Products'
import ProductDetail from './Pages/ProductDetail'
import Carrito from './Pages/Carrito/index.'
import SellOrders from './Pages/SellOrders'

function App () {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRoute, setSelectedRoute] = useState('')
  const [shoppingCart, setShoppingCart] = useState([])
  const toggle = () => setIsOpen(!isOpen)

  const linkHandler = event => {
    const route = event.target.name
    setSelectedRoute(route)
    console.log(route)
  }

  const addToCart = product => {
    setShoppingCart([...shoppingCart, product])
  }

  return (
    <div className='App'>
      <Navbar expand='md' color='dark' container='xl' dark>
        <NavbarBrand href='/'>reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
            <NavItem>
              <Link to='/publicaciones' className='nav-link'>
                Publicaciones
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/nueva-publicacion' className='nav-link'>
                Nueva Publicación
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/products' className='nav-link'>
                Productos
              </Link>
            </NavItem>
            <NavItem>
              <Link to='/carrito' className='nav-link'>
                Carrito
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className='container-fluid'>
        <div className='row'>
          <Routes>
            <Route path='/' element={<h1>bienvenido a nuestra app</h1>} />
            <Route path='/publicaciones' element={<Publicaciones />} />
            <Route path='/nueva-publicacion' element={<NuevaPublicacion />} />
            <Route
              path='/carrito'
              element={<Carrito shoppingCart={shoppingCart} />}
            />
            <Route
              path='/products'
              element={<Products hasAsides={true} addHandler={addToCart} />}
            />
            <Route
              path='/product-detail/:id/:category'
              element={<ProductDetail addHandler={addToCart} />}
            />
            <Route path='/sell-orders' element={<SellOrders />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
