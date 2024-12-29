import { useContext } from "react";
import "../commonStyles.css";
import { ProductsContext } from "../../../context/productsContext";

const ProductsList = () => {
  const { filteredProducts, addToShoppingList } = useContext(ProductsContext);

  const handleProductClick = (product) => {
    addToShoppingList(product);
  };

  return (
    <div className="App">
      <header className="AppHeader">
        <p>Products list</p>
        <ul>
          {filteredProducts.map((product, index) => (
            <li key={index} onClick={() => handleProductClick(product)}>
              {product.name}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default ProductsList;
