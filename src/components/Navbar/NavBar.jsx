import { CartWidget } from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">Tienda Ecommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    
                    <NavLink className={( { isActive } ) => isActive ? 'btn btn-dark' : 'btn'} to='/'>Inicio</NavLink>

                    <NavLink className={( { isActive } ) => isActive ? 'btn btn-dark' : 'btn'} to='/category/gorras'>Gorras</NavLink>
                    <NavLink className={( { isActive } ) => isActive ? 'btn btn-dark' : 'btn'} to='/category/remeras'>Remeras</NavLink>
                </Nav>
                <Nav>
                    <Link className="btn" to='/cart'>
                        <CartWidget />
                    </Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
