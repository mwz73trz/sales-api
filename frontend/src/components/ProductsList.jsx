import { Link } from "react-router-dom";

const ProductsList = (props) => {
  return (
    <div>
      <Link to={`/products/${props.product.id}`}>{props.product.name}</Link>
    </div>
  );
};

export default ProductsList;
