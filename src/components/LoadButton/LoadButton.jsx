import { useContext, useState } from "react";
import { ProductsContext } from "../../context/productsContext";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";

const LoadButton = () => {
  const { setProducts } = useContext(ProductsContext);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        "http://localhost:4000/api/productsList"
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button onClick={fetchProducts} disabled={loading}>
        Load Products Lists
      </button>
      {loading && <LinearProgress />}{" "}
    </>
  );
};

export default LoadButton;
