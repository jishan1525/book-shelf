import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (book) => {
    setWishlist((prevWishlist) => {
      
      const exists = prevWishlist.some((item) => item.id === book.id);
      if (exists) return prevWishlist;
      console.log(wishlist);
      return [...prevWishlist, { ...book }];
      
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}



export const useWishlist = () => useContext(WishlistContext);