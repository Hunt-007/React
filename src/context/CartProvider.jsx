/*import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const getQuantity = () => {
    const quantities = cart.map((prod) => prod.quantity);
    const total = quantities.reduce((acc, current) => acc + current, 0);
    return total;
  };

  const getTotal = () => {}; //falta realizar

  return (
    <CartContext.Provider value={{ cart, addToCart, getQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
*/

import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  /*const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, product]);
    }
  };*/
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const newQuantity = existingProduct.quantity + product.quantity;

      if (newQuantity <= 0) {
        // si la cantidad nueva es 0 o menor, quitamos el producto
        removeFromCart(product.id);
      } else {
        const updatedCart = cart.map((item) =>
          item.id === product.id ? { ...item, quantity: newQuantity } : item
        );
        setCart(updatedCart);
      }
    } else {
      if (product.quantity > 0) {
        setCart([...cart, product]);
      }
    }
  };

  const getQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        getQuantity,
        getTotal,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
