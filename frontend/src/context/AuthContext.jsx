import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem(
      "user",
      JSON.stringify({ name: data.name, role: data.role })
    );

    setToken(data.token);
    setUser({ name: data.name, role: data.role });
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
