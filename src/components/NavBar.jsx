// src/components/NavBar.jsx
import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary w-100"
      style={{ width: "100%" }}
    >
      <div className="container-fluid justify-content-between px-4">
        <a className="navbar-brand fw-bold" href="#">
          Mi Tienda
        </a>

        <div className="d-flex align-items-center gap-3">
          {/* Dropdown */}
          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Productos
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  Celulares
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Notebooks
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Discos Duros
                </a>
              </li>
            </ul>
          </div>

          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
