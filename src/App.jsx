import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter as Router, Routes, Route, Navigate, Router} from 'react-router-dom'
import { ItemCounter } from "./components/Itemcounter/ItemCounter"
import Menu from "./components/Navbar/NavBar"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartContainer } from "./components/CartContainer/CartContainer"

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


  return (
    <Router>
      <div className="container border-5 border-primary">
        <Menu />
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting='ItemListContainer' /> } />
          <Rouet path='/category/:cid' element={ <ItemListContainer greeting='saludo app' /> } />
          <Route path='/detail/:pid' element={ <ItemDetailContainer /> } />
          <Route path='cart' element={ <CartContainer/> } />
          <Route path='*' element={ <Navigate to='/' /> } />
        </Routes>

        <ItemCounter initial={1} stock={5} onAdd={onAdd} />
      </div>
    </Router>
  )
}



export default App
