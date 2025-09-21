import React, { createContext, useState, useEffect, useContext } from 'react';
import { getFromStorage, saveToStorage } from '../utils/storage';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(getFromStorage('cart') || []);

    useEffect(() => {
        saveToStorage('cart', cart);
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            setCart((prevCart) =>
                prevCart.map((item) =>
                    item.id === productId ? { ...item, quantity: newQuantity } : item
                )
            );
        }
    };
    
    const value = {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);