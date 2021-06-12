import { useEffect, useState } from "react";
import firebaseConfig from "./services/config";
import React from "react";

export const AuthContext = React.createContext();

export const Firebaseauthprovider = ({ children }) => {
  const [currentStatus, setCurrentStatus] = useState(null);

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged(setCurrentStatus);
  }, []);

  return (
    <AuthContext.Provider value={{ currentStatus }}>
      {children}
    </AuthContext.Provider>
  );
};
