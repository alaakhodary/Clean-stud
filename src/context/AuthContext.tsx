import React, { createContext } from "react";
import useAuth, { IAuthProps } from "../hooks/useAuth";

interface AuthContextType extends IAuthProps {}

export const AuthContext = createContext<AuthContextType | null>(null);

type IAuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
