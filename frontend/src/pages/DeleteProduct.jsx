import { useParams, useNavigate } from "react-router-dom";
import SalesAPI from "../api/SalesAPI";
import { Button, Alert } from "react-bootstrap";

const DeleteProduct = () => {
  const params = useParams();
  const navigate = useNavigate();

  const cancelDelete = () => {
    navigate("/");
  };

  const deleteProduct = async () => {
    const data = await SalesAPI.deleteProduct(params.productId);
    if (data) {
      navigate("/");
    }
  };

  return (
    <div>
      <h1>Delete Product</h1>
      <Alert variant="danger">
        Are you sure you want to delete this product?
        <br />
        <Button variant="danger" type="submit" onClick={deleteProduct}>
          Yes
        </Button>{" "}
        <Button variant="secondary" type="submit" onClick={cancelDelete}>
          No
        </Button>
      </Alert>
    </div>
  );
};

export default DeleteProduct;
