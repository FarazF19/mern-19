import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const x = useParams();
  console.log(x);

  return <div>ProductDetails</div>;
};

export default ProductDetails;
