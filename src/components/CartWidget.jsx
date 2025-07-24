import { FaShoppingCart } from "react-icons/fa";
import { Button, Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router";

function CartWidget() {
  const { getQuantity } = useContext(CartContext);
  const quantity = getQuantity();

  const navigate = useNavigate();

  return (
    <Button
      variant="outline-light"
      type="button"
      className="position-relative"
      title="Ver carrito"
      aria-label="Ver carrito"
      onClick={() => navigate("/cart")}
    >
      <FaShoppingCart size={20} />
      {quantity > 0 && (
        <Badge
          bg="danger"
          pill
          className="position-absolute top-0 start-100 translate-middle"
        >
          {quantity}
        </Badge>
      )}
    </Button>
  );
}

export default CartWidget;
