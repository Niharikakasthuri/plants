import React, { createContext, useState } from 'react';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((product) => product.id === item.id);
            if (existingItem) {
                return prevItems.map((product) =>
                    product.id === item.id ? { ...product, quantity: product.quantity + 1 } : product
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    const incrementItem = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decrementItem = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
    }

    const clearCart = () => {
        setCartItems([]);
    };
    return (
        <CartContext.Provider value={{ cartItems, addToCart, clearCart, incrementItem, decrementItem, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
