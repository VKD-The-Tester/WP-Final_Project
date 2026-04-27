import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography, Button, TextField } from "@mui/material";
import { BACKEND_CLIENT } from "../../api/axios.js";
import * as Yup from "yup";

const RegisterPage = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const validationSchema = Yup.object({
    name: Yup.string().required("Name field is required"),
    email: Yup.string()
      .email("Email format is invalid")
      .required("Email field is required"),
    password: Yup.string().required("Password field is required"),
  });

  const registerNewUser = async () => {
    await BACKEND_CLIENT.post("/api/auth/register", {
      name: form.name,
      email: form.email,
      password: form.password,
    });
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "20em",
        m: "2em",
        gap: "1em",
      }}
    >
      <Typography variant="h4">Register</Typography>
      <TextField
        variant="outlined"
        fullwidth
        label="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      ></TextField>
      <TextField
        variant="outlined"
        fullwidth
        label="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      ></TextField>
      <TextField
        variant="outlined"
        fullwidth
        label="password"
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      ></TextField>
      <Button
        component={NavLink}
        to="/login"
        variant="contained"
        fullwidth
        onClick={() => registerNewUser()}
      >
        Register
      </Button>
    </Box>
  );
};

export default RegisterPage;
