import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SalesAPI from "../api/SalesAPI";
import { Form, Button } from "react-bootstrap";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState(null);

  const loadProduct = async () => {
    const data = await SalesAPI.getSingleProduct(params.productId);
    setProduct(data);
  };

  useEffect(() => {
    loadProduct();
  }, [params.productId]);

  const formSubmit = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      name: e.target.elements["name"].value,
      price: e.target.elements["price"].value,
      quantity: e.target.elements["quantity"].value,
    };

    const data = await SalesAPI.updateProduct(params.productId, updatedProduct);
    setProduct(data);
    navigate(-1);
  };

  const renderProduct = () => {
    if (!product) {
      return null;
    }

    return (
      <Form
        style={{ width: "30%", marginLeft: "35%" }}
        onSubmit={formSubmit}
        method="PUT"
      >
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" defaultValue={product.name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" defaultValue={product.price} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="text" defaultValue={product.quantity} />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    );
  };

  return (
    <div>
      <h1>Product Update Form</h1>
      {renderProduct()}
    </div>
  );
};

export default UpdateProduct;
