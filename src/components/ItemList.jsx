import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Item from "./Item";

function ItemList({ items }) {
  return (
    <Container className="mt-4">
      <Row>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Row>
    </Container>
  );
}

export default ItemList;
