import { useEffect } from "react";
import { CookiesProvider } from "react-cookie";
import { AuthProvider } from "./context/AuthContext.jsx";

const Layout = ({ children }) => {
  return (
    <CookiesProvider>
      {" "}
      <AuthProvider>{children}</AuthProvider>
    </CookiesProvider>
  );
};
