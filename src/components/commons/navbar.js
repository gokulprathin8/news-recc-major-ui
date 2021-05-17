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
import {connect} from "react-redux";
import {logoutUser} from "../../redux/actions";

const NavbarCustom = (props) => {

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

                <Link to={{ pathname: "/category", state: {category: 'LifeStyle'} }} style={{ textDecoration: 'none' }} >
                  <Nav.Link href="lifestyle">LIFE STYLE</Nav.Link>
                </Link>

                <Link to={{ pathname: "/category", state: {category: 'Travel'} }} style={{ textDecoration: 'none' }} >
                  <Nav.Link href="travel">TRAVEL</Nav.Link>
                </Link>

                <Link to={{ pathname: "/category", state: {category: 'Fashion'} }} style={{ textDecoration: 'none' }} >
                <Nav.Link href="fashion">FASHION</Nav.Link>
                </Link>

                <Link to={{ pathname: "/category", state: {category: 'Politics'} }} style={{ textDecoration: 'none' }} >
                  <Nav.Link href="politics">POLITICS</Nav.Link>
                </Link>

                <NavDropdown title="MORE" id="basic-nav-dropdown">
                  <Link to={{ pathname: "/category", state: {category: 'Entertainment'} }} style={{ textDecoration: 'none' }} >
                    <NavDropdown.Item href="entertainment">
                      ENTERTAINMENT
                    </NavDropdown.Item>
                  </Link>
                  <NavDropdown.Item href="local">LOCAL</NavDropdown.Item>
                  <Link to={{ pathname: "/category", state: {category: 'International'} }} style={{ textDecoration: 'none' }} >
                    <NavDropdown.Item href="international">
                      INTERNATIONAL
                    </NavDropdown.Item>
                  </Link>
                  <NavDropdown.Divider />
                  <Link to={{ pathname: "/category", state: {category: 'Sports'} }} style={{ textDecoration: 'none' }} >
                    <NavDropdown.Item href="sports">SPORTS</NavDropdown.Item>
                  </Link>
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
            {props.auth.access ?
                <React.Fragment>
                  <Button className="nav-button" variant="outline-primary" onClick={() => {props.logoutUser()}}>
                    Logout
                  </Button>{" "}
                </React.Fragment>
                :
                <React.Fragment>
                  <Link to="/login">
                  <Button className="nav-button" variant="outline-primary">
                  Login
                  </Button>{" "}
                  </Link>
                  <Button className="nav-button" variant="outline-primary">
                  Register
                  </Button>{" "}
                </React.Fragment>
            }

          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth.user
  }
}

export default connect(mapStateToProps, {
  logoutUser
})(NavbarCustom);
