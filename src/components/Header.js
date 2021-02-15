import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Modal,
  Button
} from "react-bootstrap";
import { useCart } from "../contexts/use-cart";
import Cart from "./Cart";

export default function Header() {
  const { cart, totalPrice } = useCart();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Sneakers Store</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link>
              <Button variant="secondary" onClick={handleShow}>
                <i className="fas fa-shopping-cart"></i>({cart.length})
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Cart</Modal.Title>
                </Modal.Header>
                {cart.length === 0 ? (
                  <Modal.Body>
                    <h3>Your cart is empty</h3>
                  </Modal.Body>
                ) : (
                  <>
                    <Modal.Body>
                      <Cart />
                    </Modal.Body>
                    <Modal.Footer>
                      <h3>Total: </h3>
                      <Button variant="dark" disabled>
                        ${totalPrice}
                      </Button>
                    </Modal.Footer>
                  </>
                )}
              </Modal>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
