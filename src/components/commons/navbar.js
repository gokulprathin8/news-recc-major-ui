import React from "react";
import { ReactComponent as BrandingImage } from "../../assets/images/logo.svg";
import {Form, FormControl, Nav, Button, NavDropdown, Navbar, Container} from "react-bootstrap";
import "./navbar.css";

const NavbarCustom = () => {
    return (
        <>
            <Container>
            <Navbar expand="lg" fixed="top" className="margin-nav" bg="light">
                <Navbar.Brand href="#home">
                    <BrandingImage style={{ height: 50, width: 50 }}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <div className="nav-items">
                            <Nav.Link href="#home">HOME</Nav.Link>
                            <Nav.Link href="#link">LIFE STYLE</Nav.Link>
                            <Nav.Link href="#link">TRAVEL</Nav.Link>
                            <Nav.Link href="#link">FASHION</Nav.Link>
                            <Nav.Link href="#link">GALLERY</Nav.Link>
                            <Nav.Link href="#link">CONTACT</Nav.Link>
                            <Nav.Link href="#link">MORE</Nav.Link>
                            {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                            {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Divider />*/}
                            {/*    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                        </div>

                    </Nav>
                    <Button className="nav-button" variant="outline-primary" >Login</Button>{' '}
                    <Button className="nav-button" variant="outline-primary">Register</Button>{' '}
                </Navbar.Collapse>
            </Navbar>
            </Container>
        </>
    )
}

export default NavbarCustom;
