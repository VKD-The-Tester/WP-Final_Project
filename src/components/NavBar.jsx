import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import HotelSharpIcon from "@mui/icons-material/HotelSharp";

import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const pages = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Rooms", path: "/login" },
    { label: "Register", path: "/register" },
  ];
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <HotelSharpIcon fontSize="large" />
          {pages.map((page) => (
            <Typography
              onClick={() => navigate(page.path)}
              variant="h6"
              sx={{ cursor: "pointer", "&:hover": { color: "primary.main" } }}
              key={page.path}
            >
              {page.label}
            </Typography>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
