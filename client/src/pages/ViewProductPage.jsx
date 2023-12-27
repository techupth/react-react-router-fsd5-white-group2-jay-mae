import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ViewProductPage() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const getProducts = async () => {
    const res = await axios.get(
      `http://localhost:4001/products/${params.productId}`
    );
    setProduct(res.data.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(product);

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
