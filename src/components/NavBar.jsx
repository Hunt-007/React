import { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { useNavigate } from "react-router";

import { Link } from "react-router";

function NavBar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid className="px-4">
        <Navbar.Brand as={Link} to="/">
          Mi Tienda
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center gap-3">
            <NavDropdown title="Categorias" id="categorias-dropdown">
              <NavDropdown.Item as={Link} to={`/category/celulares`}>
                celulares
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/category/notebooks`}>
                notebooks
              </NavDropdown.Item>
            </NavDropdown>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
