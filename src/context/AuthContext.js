// import React, { createContext, useContext, useEffect, useState } from "react";
// import { auth } from "../firebase";

// export const AuthContext = createContext();

// export function useAuthContext() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState("");

//   const value = {
//     user,
//   };

//   //ページが変わるごとに発火する。
//   useEffect(() => {
//     const unsubscribed = auth.onAuthStateChanged((user) => {
//       // console.log(user);
//       setUser(user);
//     });
//     //アンマウント時はリスナーとして監視する必要なし。
//     return () => {
//       unsubscribed();
//     };
//   }, []);

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }
