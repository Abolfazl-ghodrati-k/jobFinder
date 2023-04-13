import {
  AccountCircle,
  Login,
  Notifications,
  PersonAdd,
} from "@mui/icons-material";
import { Badge, Box, IconButton, Typography } from "@mui/material";
import { Link } from "@remix-run/react";
import { User } from "@supabase/supabase-js";

type Props = {
  user: User | null;
  openNotifs: () => void;
  menuId: string;
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
};

function DesktopNav({
  openNotifs,
  menuId,
  handleProfileMenuOpen,
  user,
}: Props) {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      {user ? (
        <>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            onClick={openNotifs}
          >
            <Badge badgeContent={17} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </>
      ) : (
        <>
          <Link
            to={"/entry"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={() => {
                localStorage.setItem("ONSIGNUP", "false");
                const event = new StorageEvent("storage", {
                  key: "ONSIGNUP",
                });

                window.dispatchEvent(event);
              }}
              sx={{ display: "flex", alingItems: "center", gap: 1 }}
            >
              <Login />
              <Typography>signin</Typography>
            </IconButton>
          </Link>
          <Link
            to={"/entry"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={() => {
                localStorage.setItem("ONSIGNUP", "true");
                const event = new StorageEvent("storage", {
                  key: "ONSIGNUP",
                });

                window.dispatchEvent(event);
              }}
              color="inherit"
              sx={{ display: "flex", alingItems: "center", gap: 1 }}
            >
              <PersonAdd />
              <Typography>signup</Typography>
            </IconButton>
          </Link>
        </>
      )}
    </Box>
  );
}

export default DesktopNav;
