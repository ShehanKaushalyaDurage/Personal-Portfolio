import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';


export default function NavBar() {
    return (
        <Navbar expand="lg" >
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#Skills">Skills</Nav.Link>
                        <Nav.Link href="#Projects">Projects</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
