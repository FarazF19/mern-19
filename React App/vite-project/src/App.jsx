import Error from "./pages/Error";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="product-details/:id" element={<ProductDetails />} />

        <Route></Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
