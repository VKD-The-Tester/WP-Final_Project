import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import { BACKEND_CLIENT } from "../../api/axios.js";
import { setCookie } from "react-cookie";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const loginExistingUser = () => {
    const response = BACKEND_CLIENT.post("api/auth/login", {
      email: form.email,
      password: form.password,
    });

    const token = response.data.token;
    const tokenData = JSON.parse(atob(token.split(".")[1]));
    const expirationDate = new Date(tokenData.exp);

    setCookie("token", token, { expires: expirationDate });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "20em",
        m: "2em",
        gap: "1em",
      }}
    >
      <Typography variant="h4">Login</Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullwidth
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      ></TextField>
      <TextField
        label="password"
        type="password"
        variant="outlined"
        fullwidth
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      ></TextField>
      <Button component={NavLink} to="" variant="contained" fullwidth>
        Login
      </Button>
    </Box>
  );
};

export default LoginPage;
