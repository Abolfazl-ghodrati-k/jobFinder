import { IconButton, Typography } from "@mui/material";
import { useNavigate } from "@remix-run/react";
function Header() {
    const navigate = useNavigate()
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => navigate("/")}
        sx={{ mr: 2, padding: "10px 20px" }}
      >
        <img
          src="/Images/Logo/siteLogo.png"
          style={{ width: "20px" }}
          alt="Logo"
        />
      </IconButton>
      <Typography
        variant="h6"
        noWrap
        component="div"
        onClick={() => navigate("/")}
        sx={{ display: { xs: "none", sm: "block" }, cursor: "pointer" }}
      >
        Job Finder
      </Typography>
    </>
  );
}

export default Header;
