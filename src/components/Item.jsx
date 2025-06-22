import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";

function Item({ item }) {
  const navigate = useNavigate();

  return (
    <Col lg={3} className="mb-4">
      <Card>
        <Card.Img variant="top" src={item.thumbnail} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Button
            variant="primary"
            onClick={() => navigate(`/item/${item.id}`)}
          >
            Ver mas
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
