import React from "react";
import { ReactComponent as BrandingImage } from "../../assets/images/logo.svg";
import {
  Form,
  FormControl,
  Nav,
  Button,
  NavDropdown,
  Navbar,
  Container,
} from "react-bootstrap";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

const NavbarCustom = () => {
  return (
    <>
      <Container>
        <Navbar expand="lg" fixed="top" className="margin-nav" bg="light">
          <Link to="/">
            <Navbar.Brand href="#home">
              <BrandingImage style={{ height: 50, width: 50 }} />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <div className="nav-items">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Nav.Link href="#home">HOME</Nav.Link>
                </Link>

                <Nav.Link href="lifestyle">LIFE STYLE</Nav.Link>
                <Nav.Link href="travel">TRAVEL</Nav.Link>
                <Nav.Link href="fashion">FASHION</Nav.Link>
                <Nav.Link href="politics">POLITICS</Nav.Link>
                <NavDropdown title="MORE" id="basic-nav-dropdown">
                  <NavDropdown.Item href="entertainment">
                    ENTERTAINMENT
                  </NavDropdown.Item>
                  <NavDropdown.Item href="local">LOCAL</NavDropdown.Item>
                  <NavDropdown.Item href="international">
                    INTERNATIONAL
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="sports">SPORTS</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="contact">CONTACT</Nav.Link>
                {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                {/*    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                {/*    <NavDropdown.Divider />*/}
                {/*    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                {/*</NavDropdown>*/}
              </div>
            </Nav>
            <Link to="/login">
              <Button className="nav-button" variant="outline-primary">
                Login
              </Button>{" "}
            </Link>
            <Button className="nav-button" variant="outline-primary">
              Register
            </Button>{" "}
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default NavbarCustom;
