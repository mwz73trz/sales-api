import { useNavigate } from "react-router-dom";
import SalesAPI from "../api/SalesAPI";
import { Form, Button } from "react-bootstrap";

const AddProduct = () => {
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      name: e.target.elements["name"].value,
      price: e.target.elements["price"].value,
      quantity: e.target.elements["quantity"].value,
    };

    const data = await SalesAPI.addProduct(productData);
    if (data) {
      navigate("/");
    }
  };
  return (
    <div>
      <h1>Add New Product Form</h1>
      <Form
        style={{ width: "30%", marginLeft: "35%" }}
        onSubmit={formSubmit}
        method="POST"
      >
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Product Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Product Price</Form.Label>
          <Form.Control type="text" placeholder="Enter Product Price" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="quantity">
          <Form.Label>Product Quantity</Form.Label>
          <Form.Control type="text" placeholder="Quantity of Product" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
