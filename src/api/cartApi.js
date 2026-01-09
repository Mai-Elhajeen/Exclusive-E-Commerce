const CART_KEY = "cartItems";

const getCartItems = () => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};

const saveCartItems = (items) => {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
};

export { getCartItems, saveCartItems };
