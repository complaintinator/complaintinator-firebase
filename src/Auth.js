import { useEffect, useState } from "react";
import firebaseConfig from "./services/config";
import React from "react";

export const AuthContext = React.createContext();

export const Firebaseauthprovider = ({ children }) => {
  const [currentStatus, setCurrentStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const status = firebaseConfig.auth().onAuthStateChanged((user) => {
      setCurrentStatus(user);
      setLoading(false);
    });

    return status;
  }, []);

  return (
    <AuthContext.Provider value={{ currentStatus }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
