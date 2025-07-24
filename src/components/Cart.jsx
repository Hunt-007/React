import { ListGroup, Button, Toast, ToastContainer } from "react-bootstrap";
import { useCart } from "../context/useCart";
import { useNavigate } from "react-router";
import { useState } from "react";

function Cart() {
  const { cart, clearCart, removeFromCart, addToCart, getTotal } = useCart();
  const navigate = useNavigate();

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastBg, setToastBg] = useState("success");

  const showCustomToast = (message, bg = "success") => {
    setToastMessage(message);
    setToastBg(bg);
    setShowToast(true);
  };

  const handleAdd = (prod) => {
    addToCart({ ...prod, quantity: 1 });
    showCustomToast(`${prod.name} agregado`);
  };

  const handleRemove = (prod) => {
    if (prod.quantity > 1) {
      addToCart({ ...prod, quantity: -1 });
      showCustomToast(`${prod.name} reducido`, "warning");
    } else {
      removeFromCart(prod.id);
      showCustomToast(`${prod.name} eliminado`, "danger");
    }
  };

  const handleDelete = (prod) => {
    removeFromCart(prod.id);
    showCustomToast(`${prod.name} eliminado`, "danger");
  };

  if (cart.length === 0) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center mt-5 gap-5">
        <h2>No tienes productos en el carrito</h2>
        <Button onClick={() => navigate("/")}>Volver al inicio</Button>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5 gap-4">
      <ListGroup className="w-75">
        {cart.map((prod) => (
          <ListGroup.Item
            key={prod.id}
            className="d-flex justify-content-between align-items-center"
          >
            {prod.name} x {prod.quantity}
            <div className="d-flex gap-2">
              <Button variant="success" onClick={() => handleAdd(prod)}>
                Agregar
              </Button>
              <Button variant="warning" onClick={() => handleRemove(prod)}>
                Quitar
              </Button>
              <Button variant="danger" onClick={() => handleDelete(prod)}>
                Borrar
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <h2>TOTAL: ${getTotal()}</h2>

      <Button className="w-75" onClick={() => navigate("/checkout")}>
        Ir al Checkout
      </Button>

      <Button className="w-75" onClick={clearCart}>
        Limpiar Carrito
      </Button>

      <Button className="w-75" onClick={() => navigate("/")}>
        Ir al inicio
      </Button>

      <ToastContainer position="bottom-end" className="p-3">
        <Toast
          bg={toastBg}
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">Carrito</strong>
          </Toast.Header>
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default Cart;
