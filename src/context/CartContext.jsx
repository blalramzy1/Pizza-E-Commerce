import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [itemsAmount, setItemsAmount] = useState(0);

  useEffect(() => {
    const amount = cart.reduce((a, c) => {
      return a + c.amount;
    },0)   
    setItemsAmount(amount)
  },);

  useEffect(() => {
    const price = cart.reduce((a, c) =>{
      return a + Number(c.price) * c.amount
    },0)
    setCartTotal(price)
  },[cart]);

  const addToCart = (id, image, name, price, additionalTopping, size, crust) => {
    additionalTopping.sort((a, b) => a.name.localeCompare(b.name));

    const newItem = {
      id,
      image,
      name,
      price,
      additionalTopping,
      size,
      crust,
      amount: 1,
    };

    const cartItemIndex = cart.findIndex(
      (item) =>
        item.id == id &&
        item.price == price &&
        item.size == size &&
        JSON.stringify(item.additionalTopping) ===
          JSON.stringify(additionalTopping) &&
        item.crust === crust
    );

    if (cartItemIndex === -1) {
      setCart([...cart, newItem]);
    } else {
      const newCart = [...cart];
      newCart[cartItemIndex].amount += 1;
      setCart(newCart);
    }

    setIsOpen(true);
  };

  const removeFromCart = (id, price, crust) => {
    const newCart = cart.map((item) => {
      if (
        item.id === id &&
        item.price === price &&
        item.crust === crust
      ) {
        if (item.amount !== -1) {
          return null; // Remove the item from the cart by returning null
        } else {
          return {
            ...item,
            amount: item.amount - 1,
          };
        }
      } else {
        return item;
      }
    });

    setCart(newCart.filter(Boolean)); // Remove null values from the cart

    if (newCart.length === 1) {
      setIsOpen(false);
    }
  };

  const increaseAmount = (id, price) => {
    const itemIndex = cart.findIndex(
      (item) => item.id === id && item.price === price
    )
    if (itemIndex !== -1) {
      const newCart = [...cart]
      newCart[itemIndex].amount += 1;
      setCart(newCart)
    }
  }

  const decreaseAmount = (id, price) => {
    const itemIndex = cart.findIndex(
      (item) => item.id === id && item.price === price
    )
    if (itemIndex !== -1) {
      const newCart = [...cart]
      if (newCart[itemIndex].amount > 1) {
        newCart[itemIndex].amount -= 1
      }
      setCart(newCart)
    }
  }


  return (
    <CartContext.Provider value={{ isOpen, setIsOpen, addToCart, removeFromCart, cart, setCart, increaseAmount, decreaseAmount, itemsAmount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
