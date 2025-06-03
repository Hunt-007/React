// src/components/CartWidget.jsx
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
  return (
    <button type="button" className="btn btn-outline-light position-relative">
      <FaShoppingCart size={20} />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        3 {/* valor estático */}
      </span>
    </button>
  );
}

export default CartWidget;
