import {
  AccountCircle,
  Login,
  Notifications,
  PersonAdd,
} from "@mui/icons-material";
import { Badge, IconButton, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "@remix-run/react";
import { User } from "@supabase/supabase-js";
import React from "react";

type Props = {
  user: User | null;
  mobileMoreAnchorEl: HTMLElement | null;
  mobileMenuId: string;
  isMobileMenuOpen: boolean;
  handleMobileMenuClose: () => void;
  openNotifs: () => void;
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
};

function RenderMobileMenu({
  user,
  mobileMoreAnchorEl,
  mobileMenuId,
  isMobileMenuOpen,
  handleMobileMenuClose,
  openNotifs,
  handleProfileMenuOpen,
}: Props) {
  const navigate = useNavigate();

  function handleSignIn() {
    console.log("handle sign in")
    navigate("/entry");
    localStorage.setItem("ONSIGNUP", "false");
    const event = new StorageEvent("storage", {
      key: "ONSIGNUP",
    });

    window.dispatchEvent(event);
  }
  function handleSignUp() {
    navigate("/entry");
    localStorage.setItem("ONSIGNUP", "true");
    const event = new StorageEvent("storage", {
      key: "ONSIGNUP",
    });

    window.dispatchEvent(event);
  }

  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {user
        ? [
            { name: "Notifications", onclick: openNotifs, Icon: Notifications },
            {
              name: "Profile",
              onclick: handleProfileMenuOpen,
              Icon: AccountCircle,
            },
          ].map(({ name, onclick, Icon }) => (
            <MenuItem onClick={onclick}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <Icon />
                </Badge>
              </IconButton>
              <p>{name}</p>
            </MenuItem>
          ))
        : [
            { name: "Sign In", onclick: handleSignIn, Icon: Login },
            { name: "Sign Up", onclick: handleSignUp, Icon: PersonAdd },
          ].map(({ name, onclick, Icon }) => (
            <MenuItem onClick={onclick}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                  <Icon />
              </IconButton>
              <p>{name}</p>
            </MenuItem>
          ))}
    </Menu>
  );
}

export default RenderMobileMenu;
