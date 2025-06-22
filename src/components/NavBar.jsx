// src/components/NavBar.jsx
import { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";

import { Link } from "react-router";

function NavBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((res) => {
        //console.log("Categorías desde la API:", res);
        setCategories(res);
      });
  }, []);

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid className="px-4">
        <Navbar.Brand href="#">Mi Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center gap-3">
            <NavDropdown title="Categorias" id="categorias-dropdown">
              {categories.map((cat) => (
                <NavDropdown.Item
                  as={Link}
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                >
                  {cat.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
