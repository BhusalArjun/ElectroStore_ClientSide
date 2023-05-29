import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
// import logo from './../assets/logo.png'; 
const CustomNavbar=()=>{
    return(
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as ={NavLink}to="/">
        <img src="assets/logo.png" alt='logo' width={20} height={18}/>
        <span className="ms-1 mt-1">ElectroStore</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link as ={NavLink}to="/services">Features</Nav.Link>
            <NavDropdown title="Product Categories" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">TV</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Laptop</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Mobiles
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Refrigirator</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                More Items
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as ={NavLink}to="/about">About</Nav.Link>
            <Nav.Link as ={NavLink}to="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/cart">Cart( 10 )</Nav.Link>
            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
            <Nav.Link as={NavLink} to="/register">Signup</Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    )
}
export default CustomNavbar