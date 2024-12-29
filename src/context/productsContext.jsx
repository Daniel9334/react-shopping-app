import { createContext, useCallback, useEffect, useState } from "react";
import axios from "axios";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({ name: "", category: "" });

  const fetchShoppingList = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/shoppingList"
      );
      setShoppingList(response.data);
    } catch (error) {
      console.error("Error fetching shopping list:", error);
    }
  };

  const addToShoppingList = async (product) => {
    try {
      await axios.post("http://localhost:4000/api/shoppingList", product);
      fetchShoppingList();
    } catch (error) {
      console.error("Error adding to shopping list:", error);
    }
  };

  const removeFromShoppingList = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/shoppingList/${id}`
      );
      setShoppingList((prevList) =>
        prevList.filter((item) => item.id !== response.data.id)
      );
    } catch (error) {
      console.error("Error removing from shopping list:", error);
    }
  };

  const applyFilters = useCallback(() => {
    let filtered = products;
    if (filters.name) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(filters.name.toLowerCase())
      );
    }
    if (filters.category) {
      filtered = filtered.filter(
        (product) =>
          product.category.toLowerCase() === filters.category.toLowerCase()
      );
    }
    setFilteredProducts(filtered);
  }, [filters, products]);

  useEffect(() => {
    applyFilters();
  }, [filters, products, applyFilters]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        filteredProducts,
        setProducts,
        shoppingList,
        fetchShoppingList,
        addToShoppingList,
        removeFromShoppingList,
        filters,
        setFilters,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
