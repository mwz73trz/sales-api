import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";
import DeleteProduct from "./pages/DeleteProduct";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/:productId/update" element={<UpdateProduct />} />
        <Route path="/products/:productId/delete" element={<DeleteProduct />} />
      </Routes>
    </div>
  );
};

export default App;
