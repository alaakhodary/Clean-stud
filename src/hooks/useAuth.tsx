import { useState } from "react";

export interface AuthProps {
  authorized: boolean;
  token: string;
  error: string;
  loading: boolean;
  login: (token: string) => void;
  logout: () => void;
  setError: (error: string) => void;
  setLoading: (loading: boolean) => void;
}

const useAuth = (): AuthProps => {
  const [authorized, setAuthorized] = useState<boolean>(false);
  const [token, setToken] = useState<string>(
    localStorage.getItem("token") || ""
  );
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const login = (token: string): void => {
    localStorage.setItem("token", token);
    setAuthorized(true);
    setToken(token);
    window.location.reload();
  };

  const logout = (): void => {
    localStorage.removeItem("token");
    setAuthorized(false);
    setToken("");
    window.location.reload();
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
