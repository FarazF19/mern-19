import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [searchProducts, setSearchProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
    setSearchProducts(response.data); // Set both products and searchProducts to initial data
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const searchProductHandler = (e) => {
    let userInput = e.target.value;
    const searchResults = products.filter((item) =>
      item.title.toLowerCase().includes(userInput.toLowerCase())
    );
    setSearchProducts(searchResults); // Update the filtered products
  };

  // Delete product handler
  const deleteProduct = (id) => {
    // Filter out the product with the given id from both products and searchProducts
    const updatedProducts = products.filter((product) => product.id !== id);
    const updatedSearchProducts = searchProducts.filter(
      (product) => product.id !== id
    );

    // Update the state with the remaining products
    setProducts(updatedProducts);
    setSearchProducts(updatedSearchProducts);
  };

  return (
    <>
      <h1>Products Page</h1>
      <input onChange={searchProductHandler} placeholder="Search items" />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {searchProducts.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
