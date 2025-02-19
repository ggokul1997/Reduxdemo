import React from "react";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((res) => setProducts(res));
  }, []);
  return (
    <>
      <h1 style={{ backgroundColor: "wheat" }}>Products</h1>
      <div className="row all">
        {products.map((product, i) => {
          const demo = product.title.split(" ");
          const tit = demo.slice(0, 3).join(" ");
          return (
            <Card key={product.id} style={{ width: "18rem", height: "25rem" }}>
              <Card.Img
                variant="top"
                src={product.image}
                style={{ height: "200px" }}
              />
              <Card.Body>
                <Card.Title>{tit}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default Products;
