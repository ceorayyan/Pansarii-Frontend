// app/context/CartContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface CartItem {
  id: string | number;
  img: string;
  nameEn: string;
  nameUr: string;
  price: number;
  quantity: number;
  size: string;
  category?: string;
  rating?: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  updateQuantity: (id: string | number, size: string, change: number) => void;
  removeFromCart: (id: string | number, size: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  getItemCount: (id: string | number, size: string) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize from localStorage - runs only once on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedCart = localStorage.getItem('pansari-cart');
        if (savedCart) {
          const parsedCart = JSON.parse(savedCart);
          console.log('✅ Cart loaded from localStorage:', parsedCart);
          setCartItems(parsedCart);
        }
      } catch (error) {
        console.error('❌ Error loading cart:', error);
      }
      setIsInitialized(true);
    }
  }, []);

  // Save to localStorage whenever cart changes (but only after initialization)
  useEffect(() => {
    if (typeof window !== 'undefined' && isInitialized) {
      try {
        localStorage.setItem('pansari-cart', JSON.stringify(cartItems));
        console.log('💾 Cart saved to localStorage:', cartItems);
      } catch (error) {
        console.error('❌ Error saving cart:', error);
      }
    }
  }, [cartItems, isInitialized]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    console.log('🛒 Adding to cart:', item);
    
    setCartItems(prev => {
      // Find existing item with same ID AND size
      const existingItem = prev.find(cartItem => 
        String(cartItem.id) === String(item.id) && 
        cartItem.size === item.size
      );
      
      if (existingItem) {
        // Increment quantity if item already exists
        const newCart = prev.map(cartItem =>
          String(cartItem.id) === String(item.id) && cartItem.size === item.size
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        console.log('✅ Updated existing item, new cart:', newCart);
        return newCart;
      } else {
        // Add new item with quantity 1
        const newCart = [...prev, { ...item, quantity: 1 }];
        console.log('✅ Added new item, new cart:', newCart);
        return newCart;
      }
    });
  };

  const updateQuantity = (id: string | number, size: string, change: number) => {
    console.log('🔄 Updating quantity for:', { id, size, change });
    
    setCartItems(prev => {
      const newCart = prev.map(item =>
        String(item.id) === String(id) && item.size === size
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      );
      console.log('✅ Quantity updated, new cart:', newCart);
      return newCart;
    });
  };

  const removeFromCart = (id: string | number, size: string) => {
    console.log('🗑️ Removing from cart:', { id, size });
    
    setCartItems(prev => {
      const newCart = prev.filter(item => 
        !(String(item.id) === String(id) && item.size === size)
      );
      console.log('✅ Item removed, new cart:', newCart);
      return newCart;
    });
  };

  const clearCart = () => {
    console.log('🧹 Clearing cart');
    setCartItems([]);
  };

  const getCartTotal = () => {
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return total;
  };

  const getCartCount = () => {
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    return count;
  };

  const getItemCount = (id: string | number, size: string) => {
    const item = cartItems.find(item => 
      String(item.id) === String(id) && item.size === size
    );
    return item ? item.quantity : 0;
  };

  const value = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartCount,
    getItemCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  return context;
};