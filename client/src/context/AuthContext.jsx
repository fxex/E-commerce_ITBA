import {createContext, useState, useEffect} from 'react'
import {jwtDecode} from "jwt-decode"

export const AuthContext = createContext(null) 

export const AuthProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null);
 
  // La lógica que antes estaba en App.js ahora vive aquí
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const decodedUser = jwtDecode(token);
      setCurrentUser(decodedUser);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('authToken', token);
    const decodedUser = jwtDecode(token);
    setCurrentUser(decodedUser);
  };
 
  const logout = () => {
    localStorage.removeItem('authToken');
    setCurrentUser(null);
  };

   const value = { currentUser, login, logout };

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}
