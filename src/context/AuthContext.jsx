import { BACKEND_CLIENT } from "../api/axios.js";
import { createContext, useState } from "react";
import { setCookie } from "react-cookie";
import * as Yup from "yup";

export const authContext = createContext({
  user: {},
  setUser: () => {},
  login: (email, password) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email format is invalid")
      .required("Email field is required"),
    password: Yup.string().required("Password field is required"),
  });

  const login = async (email, password) => {
    const isValid = await validationSchema.isValid({ email, password });

    if (!isValid) {
      console.log("Fields might be invalid.");
    }

    const response = await BACKEND_CLIENT.post("api/auth/login", {
      email: email,
      password: password,
    });

    const token = response.data.token;
    const tokenData = JSON.parse(atob(token.split(".")[1]));
    const expirationDate = new Date(tokenData.exp * 1000);

    setCookie("token", token, { expires: expirationDate });
    setUser(response.data.user);
  };

  const logout = () => {
    setUser();
  };

  return (
    <authContext.Provider value={{ user, setUser, login, logout }}>
      {" "}
      {children}
    </authContext.Provider>
  );
};
