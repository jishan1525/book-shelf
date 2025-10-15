import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Jishan Ali",
    email: "jishan@email.com",
    phone: "1234567890",
  });

  const [addresses, setAddresses] = useState(() => {
    const saved = localStorage.getItem("addresses");
    return saved ? JSON.parse(saved) : [];
  });

  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });

  
  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  
  const addAddress = (address) => {
    const newAddress = { id: Date.now(), ...address };
    setAddresses([...addresses, newAddress]);
  };

  const removeAddress = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  const updateAddress = (id, newData) => {
    setAddresses(
      addresses.map((addr) => (addr.id === id ? { ...addr, ...newData } : addr))
    );
  };

 
  const addOrder = (order) => {
    const newOrder = { id: Date.now(), ...order };
    setOrders([...orders, newOrder]);
  };

  const removeOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        addresses,
        addAddress,
        removeAddress,
        updateAddress, 
        orders,
        addOrder,
        removeOrder,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);