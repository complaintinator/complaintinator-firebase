import { useEffect, useState } from "react";
import adminFirebaseConfig from "./services/admin-config";
import React from "react";

export const AdminAuthContext = React.createContext();

export const Firebaseadminauthprovider = ({ children }) => {
  const [adminCurrentStatus, setAdminCurrentStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const status = adminFirebaseConfig.auth().onAuthStateChanged((user) => {
      setAdminCurrentStatus(user);
      setLoading(false);
    });

    return status;
  }, []);

  return (
    <AdminAuthContext.Provider value={{ adminCurrentStatus }}>
      {!loading && children}
    </AdminAuthContext.Provider>
  );
};
