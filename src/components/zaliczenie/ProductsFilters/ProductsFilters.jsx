import { useContext } from "react";
import "../commonStyles.css";
import { ProductsContext } from "../../../context/productsContext";

const ProductsFilters = () => {
  const { filters, setFilters } = useContext(ProductsContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="Wrapper">
      <p>Products Filters</p>
      <form>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={filters.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category: </label>
          <input
            type="text"
            name="category"
            value={filters.category}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default ProductsFilters;
