import { Box, Typography } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h3">Page Not Found</Typography>
    </Box>
  );
};

export default NotFoundPage;
