import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function RutaProtegida({ children }) {
  const { currentUser, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Cargando autenticación...</p>;
  }

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
}
