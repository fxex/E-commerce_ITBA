import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { URL } from "../utils/url";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      const decodedUser = jwtDecode(token);
      console.log(decodedUser);

      setCurrentUser(decodedUser);
    }
    setLoading(false);
  }, []);

  const login = async (body) => {
    const response = await fetch(`${URL}/usuarios/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();

    localStorage.setItem("authToken", data.logueado);
    const decodedUser = jwtDecode(data.logueado);
    setCurrentUser(decodedUser);
    return decodedUser;
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setCurrentUser(null);
    setLoading(true);
  };

  const value = { currentUser, login, logout, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
