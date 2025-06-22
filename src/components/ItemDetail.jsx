import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ItemCount from "./ItemCount";

function ItemDetail({ item }) {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={item?.thumbnail} alt={item?.title} />
          </Card>
        </Col>
        <Col md={6}>
          <Card className="h-100">
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Title className="fs-2">{item?.title}</Card.Title>
                <Card.Text>{item?.description}</Card.Text>
                <Card.Text className="fs-4 fw-bold text-primary">
                  ${item?.price}
                </Card.Text>
              </div>
              <ItemCount />
              <div className="d-flex justify-content-center mt-4">
                <Button variant="success" size="lg">
                  Agregar al carrito
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetail;
