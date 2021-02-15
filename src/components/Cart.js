import React from "react";
import {
  Row,
  Col,
  ListGroup,
  Image
} from "react-bootstrap";
import { useCart } from "../contexts/use-cart";

export default function Cart() {
  const { addItem, removeItem, cartGroupedByItems } = useCart();

  return (
    <ListGroup variant="flush">
      {cartGroupedByItems.map((product, index) => (
        <ListGroup.Item key={index}>
          <Row>
            <Col md={3}>
              <Image src={product.image_url} alt={product.name} fluid rounded />
            </Col>
            <Col md={3}>{product.name}</Col>
            <Col md={2}>${product.price}</Col>
            <Col md={4}>
              <div className="cart-buttons">
                <button onClick={() => removeItem(product.sku)}>-</button>
                <button>{product.quantity}</button>
                <button onClick={() => addItem(product.sku)}>+</button>
              </div>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
