import React, { useContext, useEffect, useState } from "react";
import firebase from "firebase/app";

interface AuthContextType {
  user: firebase.User | null | undefined;
}
const AuthContext = React.createContext<AuthContextType>({ user: undefined });

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null | undefined>(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((newUser) => {
      setUser(newUser);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
