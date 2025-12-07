import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { URL } from "../utils/url";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      const decodedUser = jwtDecode(token);
      console.log(decodedUser);

      setCurrentUser(decodedUser);
    }
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
  };

  const value = { currentUser, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
