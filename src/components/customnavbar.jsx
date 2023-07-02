import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";
import logo from "../assets/logo.png";
const CustomNavbar = () => {
  const userContext = useContext(UserContext);
  const doLogout = () => {
    userContext.logout();
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/" id="logos">
           <img src={logo} alt="logo" width={20} height={18} /> 
       
          <span className="ms-1 mt-1">ElectroRepair</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link as={NavLink} to="/services">
              Gallery
            </Nav.Link>
            <Nav.Link as={NavLink} to="/productCategories">
              Product Categories
            </Nav.Link>
            {/* <NavDropdown
              title=<Nav.Link as={NavLink} to="/productCategories">
                Product Categories
              </Nav.Link>
              id="collasible-nav-dropdown"
              style={{ position: "relative", top: -5 }}
            >
              <NavDropdown.Item href="#action/3.1">TV</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Laptop</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Mobiles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Refrigirator
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">More Items</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            {/* <Nav.Link as={NavLink} to="/cart">
             Admin
            </Nav.Link> */}
            {userContext.isLogin ? (
              <>
                {userContext.isAdminUser && (
                  <>
                    <Nav.Link as={NavLink} to="/admin/home">
                      Admin Dashboard
                    </Nav.Link>
                  </>
                )}
                <Nav.Link
                  as={NavLink}
                  to={`/users/profile/${userContext.userData.user.userId}`}
                >
                  {userContext.userData.user.name}
                </Nav.Link>
                <Nav.Link as={NavLink} to="/users/orders">
                  Orders
                </Nav.Link>
                <Nav.Link onClick={doLogout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={NavLink} to="/register">
                  Signup
                </Nav.Link>
              </>
            )}

            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default CustomNavbar;
