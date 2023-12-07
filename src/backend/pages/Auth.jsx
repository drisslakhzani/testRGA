import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
// Import your Firebase authentication setup

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize authentication and set up an observer for user changes
  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    // Add other authentication-related functions (signIn, signOut, etc.) here
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
















// import React, { useEffect, useState } from "react";
// import app from "../fireConfig";

// export const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [pending, setPending] = useState(true);

//   useEffect(() => {
//     app.auth().onAuthStateChanged((user) => {
//       setCurrentUser(user)
//       setPending(false)
//     });
//   }, []);

//   if(pending){
//     return <>Loading...</>
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         currentUser
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };