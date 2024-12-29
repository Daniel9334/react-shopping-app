import { useContext, useEffect } from "react";
import "../commonStyles.css";
import { ProductsContext } from "../../../context/productsContext";

const ShoppingList = () => {
  const { shoppingList, fetchShoppingList, removeFromShoppingList } =
    useContext(ProductsContext);

  useEffect(() => {
    fetchShoppingList();
  }, [fetchShoppingList]);

  const handleProductClick = (id) => {
    removeFromShoppingList(id);
  };

  return (
    <div className="App">
      <header className="AppHeader">
        <p>Shopping List</p>
        <ul>
          {shoppingList.map((product) => (
            <li key={product.id} onClick={() => handleProductClick(product.id)}>
              {product.name}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default ShoppingList;
