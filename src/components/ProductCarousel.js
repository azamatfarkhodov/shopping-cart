import React from "react";
import products from "../products";
import { Carousel, Image } from "react-bootstrap";

const ProductCarousel = () => {
  return (
    <Carousel pause="hover" className="bg-dark mt-3">
      {products.map((product) => (
        <Carousel.Item key={product.sku}>
          <Image src={product.image_url} alt={product.name} fluid />
          <Carousel.Caption className="carousel-caption">
            <h2>
              {product.name} (${product.price})
            </h2>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
