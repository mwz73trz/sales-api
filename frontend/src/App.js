import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/add" element={<AddProduct />} />
      </Routes>
    </div>
  );
};

export default App;
