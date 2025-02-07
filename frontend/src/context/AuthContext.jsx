import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [bool, setBool] = useState(false);
  const login = (userData) => {
    setUser(userData);
   setBool(true)
  };

  const logout = () => {
    setUser(null);
    setBool(false); 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, bool}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
