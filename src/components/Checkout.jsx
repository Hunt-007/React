import {
  Container,
  Button,
  Form,
  Toast,
  ToastContainer,
  Alert,
} from "react-bootstrap";
import { useCart } from "../context/useCart";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../firebase/db";
import { useState } from "react";
import { useNavigate } from "react-router";

function Checkout() {
  const { cart, clearCart } = useCart();
  const [showToast, setShowToast] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      setErrorMessage("El carrito está vacío.");
      setShowErrorToast(true);
      return;
    }

    const form = e.target;
    const email = form.email.value.trim();
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();

    const order = {
      user: { email, name, phone },
      items: cart,
      time: serverTimestamp(),
    };

    try {
      const id = await createOrder(order);
      setOrderId(id);
      setShowToast(true);
      clearCart();
      form.reset();
    } catch (error) {
      console.error("Error al crear la orden:", error);
      setErrorMessage("Error al procesar la compra. Intente nuevamente.");
      setShowErrorToast(true);
    }
  };

  const handleSuccessToastClose = () => {
    setShowToast(false);
    navigate("/");
  };

  return (
    <Container>
      <div className="d-flex justify-content-center mt-5">
        <Form className="w-50 border p-3 rounded" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingrese email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese Nombre" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="text" placeholder="Ingrese Teléfono" required />
          </Form.Group>

          <Button variant="primary" type="submit">
            Finalizar Compra
          </Button>

          {/* Aviso informativo de redirección */}
          {showToast && (
            <Alert variant="info" className="mt-3 mb-0 text-center">
              ¡Compra realizada! Será redirigido automáticamente a la página
              principal en 4 segundos.
            </Alert>
          )}
        </Form>
      </div>

      {/* Toasts */}
      <ToastContainer position="bottom-end" className="p-3">
        <Toast
          bg="success"
          onClose={handleSuccessToastClose}
          show={showToast}
          delay={4000}
          autohide
        >
          <Toast.Header closeButton>
            <strong className="me-auto">Orden creada</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            ¡Gracias por su compra! <br />
            ID de orden: <strong>{orderId}</strong>
          </Toast.Body>
        </Toast>

        <Toast
          bg="danger"
          onClose={() => setShowErrorToast(false)}
          show={showErrorToast}
          delay={4000}
          autohide
        >
          <Toast.Header closeButton>
            <strong className="me-auto">Error</strong>
          </Toast.Header>
          <Toast.Body className="text-white">{errorMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
}

export default Checkout;
