import { useState } from "react";

const useAuth = () => {
  const [authorized, setAuthorized] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setAuthorized(true);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuthorized(false);
    setToken("");
  };

  return {
    authorized,
    token,
    error,
    loading,
    login,
    logout,
    setError,
    setLoading,
  };
};

export default useAuth;
