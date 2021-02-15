import React from "react";
import { useCart } from "../contexts/use-cart";
import { Card, Button } from "react-bootstrap";

export default function Product({ product }) {
  const { addItem, removeItem, countItemsInCart } = useCart();

  return (
    <Card className="my-3 p-3 rounded carddeck">
      <Card.Img src={product.image_url} variant="top" alt={product.name} />

      <Card.Body>
        <Card.Title as="div">
          <strong>{product.name}</strong>
        </Card.Title>

        <Card.Text as="h3">${product.price}</Card.Text>

        <Card.Text as="div" className="card-text">
          {countItemsInCart(product.sku) > 0 && (
            <Button variant="danger" onClick={() => removeItem(product.sku)}>
              <i className="fas fa-trash" width="20"></i>
            </Button>
          )}
          <Button variant="dark" onClick={() => addItem(product.sku)}>
            Add to Cart ({countItemsInCart(product.sku)})
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
