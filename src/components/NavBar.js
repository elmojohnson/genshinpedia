import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../img/logo.png'
import klee from '../img/klee.png'

export default function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/" className="fw-bold">
            <img src={logo} height="40" />
            {/* <img src={klee} height="30" className="me-2" />
            Wi<span className="text-danger">klee</span>pedia */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/characters" className="nav-link">
                Characters
              </Link>
              <Link to="/artifacts" className="nav-link">
                Artifacts
              </Link>
              <Link to="/weapons" className="nav-link">
                Weapons
              </Link>
              {/* <NavDropdown title="Others" id="collasible-nav-dropdown">
                <Link to="/" className="dropdown-item">Consumables</Link>
                <Link to="/" className="dropdown-item">Domains</Link>
                <Link to="/" className="dropdown-item">Elements</Link>
                <Link to="/" className="dropdown-item">Enemies</Link>
                <Link to="/" className="dropdown-item">Materials</Link>
                <Link to="/" className="dropdown-item">Nations</Link>
              </NavDropdown> */}
              <Link to="/about" className="nav-link">
                About
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="py-4 mb-2" />
    </div>
  );
}
