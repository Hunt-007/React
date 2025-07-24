import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";

function Item({ item }) {
  const navigate = useNavigate();

  return (
    <Col lg={3} md={4} sm={6} className="mb-4">
      <Card className="h-100 d-flex flex-column">
        <Card.Img
          variant="top"
          src={item.image}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="text-truncate">{item.name}</Card.Title>
          <Card.Text className="text-muted text-truncate">
            {item.description}
          </Card.Text>
          <Card.Text className="small text-secondary">
            {item.category}
          </Card.Text>
          {item.price && (
            <Card.Text className="fw-bold">${item.price}</Card.Text>
          )}
          <div className="mt-auto">
            <Button
              variant="primary"
              onClick={() => navigate(`/item/${item.id}`)}
              className="w-100"
            >
              Ver más
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
