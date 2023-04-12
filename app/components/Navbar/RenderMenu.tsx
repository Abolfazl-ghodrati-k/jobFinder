import { Menu, MenuItem } from "@mui/material";
import React from "react";

type Props = {
  anchorEl: HTMLElement | null;
  menuId: string;
  isMenuOpen: boolean;
  handleMenuClose: () => void;
  openProfile: () => void;
  handleLogout: () => void;
};

function RenderMenu({
  anchorEl,
  menuId,
  isMenuOpen,
  handleMenuClose,
  openProfile,
  handleLogout,
}: Props) {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={openProfile}>Profile</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );
}

export default RenderMenu;
