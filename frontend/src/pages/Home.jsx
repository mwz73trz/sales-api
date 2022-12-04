import { useEffect, useState } from "react";
import SalesAPI from "../api/SalesAPI";
import ProductsList from "../components/ProductsList";

const Home = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const data = await SalesAPI.getAllProduct();
    setProducts(data ? data : []);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const renderProducts = () => {
    return products.map((product, index) => {
      return (
        <div key={index}>
          <ProductsList product={product} />
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Products</h1>
      {renderProducts()}
    </div>
  );
};

export default Home;
