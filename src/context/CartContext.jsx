import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {

  // get cart items from local storage on initial load
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // save cart items to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);


  // add item to cart
  const addToCart = (product, quantity=1, selectedColor=null) => {
    setCartItems((prevProducts) => {
      const existingProduct = prevProducts.find(
        (item) => item.id === product.id && item.selectedColor === selectedColor
      );
      if (existingProduct) {
        return prevProducts.map((item) =>
          item === existingProduct
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevProducts, { ...product, quantity, selectedColor } ];
      }
    });
  };

  // remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((prevProducts) =>
      prevProducts.filter((item) => item.id !== productId)
    );
  };

  // update item quantity in cart
  const updateQuantity = (productId, quantity) => {
    setCartItems((prevProducts) =>
      prevProducts.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };
  
  // clear cart
  const clearCart = () => {
    setCartItems([]);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
}

export {CartProvider, useCart};