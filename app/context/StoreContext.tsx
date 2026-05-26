"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Product = {
  name: string;
  price: string;
  image: string;
};

type StoreContextType = {
  cart: Product[];
  wishlist: Product[];

  addToCart: (product: Product) => void;

  addToWishlist: (
    product: Product
  ) => void;

  removeFromWishlist: (
    name: string
  ) => void;

  removeFromCart: (
    name: string
  ) => void;

  clearCart: () => void;
};

const StoreContext =
  createContext<StoreContextType | null>(
    null
  );

export function StoreProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<
    Product[]
  >([]);

  const [wishlist, setWishlist] =
    useState<Product[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      const savedCart =
        window.localStorage.getItem(
          "lilac-cart"
        );
      const savedWishlist =
        window.localStorage.getItem(
          "lilac-wishlist"
        );

      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }

      if (savedWishlist) {
        setWishlist(
          JSON.parse(savedWishlist)
        );
      }
    } catch {
      // Ignore malformed storage and fall back to empty state
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(
      "lilac-cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(
      "lilac-wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  const addToCart = (
    product: Product
  ) => {
    setCart((prev) => [
      ...prev,
      product,
    ]);
  };

  const addToWishlist = (
    product: Product
  ) => {
    const exists = wishlist.find(
      (item) =>
        item.name === product.name
    );

    if (!exists) {
      setWishlist((prev) => [
        ...prev,
        product,
      ]);
    }
  };

  const removeFromWishlist = (
    name: string
  ) => {
    setWishlist((prev) =>
      prev.filter(
        (item) => item.name !== name
      )
    );
  };

  const removeFromCart = (
    name: string
  ) => {
    setCart((prev) =>
      prev.filter(
        (item) => item.name !== name
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        addToWishlist,
        removeFromWishlist,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => {
  const context =
    useContext(StoreContext);

  if (!context) {
    throw new Error(
      "useStore must be used inside StoreProvider"
    );
  }

  return context;
};