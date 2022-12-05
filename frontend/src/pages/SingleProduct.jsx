import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SalesAPI from "../api/SalesAPI";

const SingleProduct = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  const loadProduct = async () => {
    const data = await SalesAPI.getSingleProduct(params.productId);
    setProduct(data);
  };

  useEffect(() => {
    loadProduct();
  }, [params.productId]);

  const renderProduct = () => {
    if (!product) {
      return null;
    }

    return (
      <div>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <br />
        <Link to={`/products/${product.id}/update`}>Update Product</Link>
        <br />
        <Link to={`/products/${product.id}/delete`}>Delete Product</Link>
      </div>
    );
  };

  return (
    <div>
      <h1>Product Details</h1>
      {renderProduct()}
    </div>
  );
};

export default SingleProduct;
