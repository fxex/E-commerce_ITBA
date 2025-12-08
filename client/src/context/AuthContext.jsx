// client/src/context/AuthContext.jsx
import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { URL } from "../utils/url";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    // Validamos que el token exista y tenga el formato JWT (3 partes separadas por puntos)
    if (token && token.split('.').length === 3) {
      try {
        const decodedUser = jwtDecode(token);
        setCurrentUser(decodedUser);
      } catch (error) {
        console.error("Token inválido en localStorage:", error);
        localStorage.removeItem("authToken"); // Limpiamos basura
      }
    }
    setLoading(false);
  }, []);

  const login = async (body) => {
    try {
      const response = await fetch(`${URL}/usuarios/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json();

      if (response.ok && data.logueado) {
        localStorage.setItem("authToken", data.logueado);
        const decodedUser = jwtDecode(data.logueado);
        setCurrentUser(decodedUser);
        return decodedUser;
      } else {
        throw new Error(data.message || "Error en login");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken"); // 
    setCurrentUser(null); // 
    setLoading(false); // Cambiado a false para permitir navegación tras logout
  };

  const value = { currentUser, login, logout, loading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};