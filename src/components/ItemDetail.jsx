import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router";
import { useState } from "react";

function ItemDetail({ item }) {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={item?.image} alt={item?.name} />
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100">
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title className="fs-2">{item?.name}</Card.Title>
                <Card.Text>{item?.description}</Card.Text>
                <Card.Text className="fs-4 fw-bold text-primary">
                  ${item?.price}
                </Card.Text>
              </div>
              <ItemCount item={item} onAdd={() => setShowToast(true)} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="d-flex justify-content-center mt-4">
        <Button className="w-75" onClick={() => navigate("/")}>
          Ir al inicio
        </Button>
      </div>

      <ToastContainer position="bottom-end" className="p-3">
        <Toast
          bg="success"
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={5000}
          autohide
        >
          <Toast.Header closeButton>
            <strong className="me-auto">Carrito</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            {item?.name} agregado al carrito
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
}

export default ItemDetail;
