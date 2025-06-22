// src/components/CartWidget.jsx
import { FaShoppingCart } from "react-icons/fa";
import { Button, Badge } from "react-bootstrap";

function CartWidget({ cantidad = 3 }) {
  return (
    <Button
      variant="outline-light"
      type="button"
      className="position-relative"
      title="Ver carrito"
      aria-label="Ver carrito"
    >
      <FaShoppingCart size={20} />
      {cantidad > 0 && (
        <Badge
          bg="danger"
          pill
          className="position-absolute top-0 start-100 translate-middle"
        >
          {cantidad}
        </Badge>
      )}
    </Button>
  );
}

export default CartWidget;
