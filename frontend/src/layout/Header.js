import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="primary" expand="lg" collapseOnSelect>
        <LinkContainer to="/">
        <Navbar.Brand>
            <h3 className="ml-5 mt-3">Taskflow</h3>
        </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mt-3">
            <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
            <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
            <Nav.Link>Themes</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;

