import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Container } from "react-bootstrap";

function ItemCount({ item, onAdd }) {
  const [counter, setCounter] = useState(0);
  const { addToCart } = useContext(CartContext);

  const handleAdd = () => setCounter(counter + 1);
  const handleSub = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <Container className="text-center">
      <p className="fs-3">{counter}</p>

      <Button variant="primary" onClick={handleAdd}>
        +
      </Button>
      <Button variant="danger" onClick={handleSub} className="ms-2">
        -
      </Button>

      <div className="d-flex justify-content-center mt-4">
        <Button
          variant="success"
          size="lg"
          onClick={() => {
            addToCart({ ...item, quantity: counter });
            if (onAdd) onAdd(); // dispara el toast en ItemDetail
            setCounter(0); // opcional
          }}
          disabled={counter === 0}
        >
          Agregar al carrito
        </Button>
      </div>
    </Container>
  );
}

export default ItemCount;
