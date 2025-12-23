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
  const addToCart = (
    product,
    quantity = 1,
    selectedColor = null,
    selectedSize = null
  ) => {
    setCartItems((prevProducts) => {
      const existingProduct = prevProducts.find(
        (item) =>
          item.id === product.id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
      );
      if (existingProduct) {
        return prevProducts.map((item) =>
          item === existingProduct
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...prevProducts,
          { ...product, quantity, selectedColor, selectedSize },
        ];
      }
    });
  };

  // remove item from cart
  const removeFromCart = (productId, selectedColor, selectedSize) => {
    setCartItems((prevProducts) =>
      prevProducts.filter(
        (item) =>
          item.id !== productId &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
      )
    );
  };

  // update item quantity in cart
  const updateQuantity = (productId, selectedColor, selectedSize, quantity) => {
    if (quantity < 1) return;

    setCartItems((prevProducts) =>
      prevProducts.map((item) =>
        item.id === productId &&
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize
          ? { ...item, quantity }
          : item
      )
    );
  };

  // total items in cart
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

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
        totalPrice,
        totalQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };
