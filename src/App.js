import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import products from './products';
import Product from './components/Product';
import { CartProvider } from './contexts/use-cart';
import { Container, Row, Col } from 'react-bootstrap'
import ProductCarousel from './components/ProductCarousel'
import './App.css';

export default function App() {
  return (
    <CartProvider>
        <Header />
        <Container>
        <ProductCarousel />
        </Container>
        <Container>
          <Row>
            {products.map((product, index) => (
              <Col key={index} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Container>
        <Footer />
    </CartProvider>
  );
}