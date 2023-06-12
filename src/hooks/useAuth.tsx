import axios from "axios";
import { useState } from "react";
import { API_URL } from "../config/api";

export interface IAuthProps {
  authorized: boolean;
  token: string;
  error: string;
  loading: boolean;
  login: (token: string) => void;
  logout: () => Promise<any>;
  setError: (error: string) => void;
  setLoading: (loading: boolean) => void;
}

const useAuth = (): IAuthProps => {
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

  const logout = async (): Promise<any> => {
    const headers = {
      Authorization: `${token}`,
      "Content-Type": "application/json",
      lang: "ar",
    };
    const body = {
      fcm_token: token,
    };
    try {
      await axios.post(`${API_URL}logout`, body, {
        headers,
      });
      console.log("Logged out successfully");
    } catch (error) {
      setError("An error occurred during logout");
    }
    localStorage.removeItem("token");
    setAuthorized(false);
    setToken("");
    // window.location.reload();
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
