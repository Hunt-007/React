import { useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";

function ItemCount() {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => setCounter(counter + 1);
  const handleSub = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <Container className="text-center">
      <p className="fs-3">{counter}</p>
      <ButtonGroup>
        <Button variant="primary" onClick={handleAdd}>
          +
        </Button>
        <Button variant="danger" onClick={handleSub}>
          -
        </Button>
      </ButtonGroup>
    </Container>
  );
}

export default ItemCount;
