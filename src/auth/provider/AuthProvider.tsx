/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, useContext } from "react";
import { AuthProviderProps } from "../../utils/interface/AuthProviderProps";

const AuthContext = createContext({
  isAuthenticated: false,
  getAccessToken: () => {},
  setAccessTokenOnly: (_accessToken: string) => {console.log("entree");
  },
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function getAccessToken() {
    return accessToken;
  }

  function setAccessTokenOnly(accessToken: string) {
    console.log("setAccessTokenOnly", accessToken);
    setAccessToken(accessToken);
    setIsAuthenticated(true);
    console.log("setAccessTokenOnly", accessToken);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        getAccessToken,
        setAccessTokenOnly,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);