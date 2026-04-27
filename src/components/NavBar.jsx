import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import HotelSharpIcon from "@mui/icons-material/HotelSharp";

import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const pages = ["Home", "About", "Rooms", "Login", "Register"];
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <HotelSharpIcon fontSize="large" />
          {pages.map((page, index) => (
            <Typography
              onClick={() => navigate(`/${page}`)}
              variant="h6"
              sx={{ cursor: "pointer" }}
              key={index}
            >
              {page}
            </Typography>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
