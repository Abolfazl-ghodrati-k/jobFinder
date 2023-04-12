import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Menu, MenuItem } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

function NestedMenu(): JSX.Element {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [submenuAnchorEl, setSubmenuAnchorEl] = useState<null | HTMLElement>(
    null
  );

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSubmenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setSubmenuAnchorEl(event.currentTarget);
  };

  const handleSubmenuClose = () => {
    setSubmenuAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleSubmenuOpen}>Level 1 - Option 1</MenuItem>
        <MenuItem onClick={handleSubmenuOpen}>Level 1 - Option 2</MenuItem>
      </Menu>
      <Menu
        id="submenu"
        anchorEl={submenuAnchorEl}
        keepMounted
        open={Boolean(submenuAnchorEl)}
        onClose={handleSubmenuClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleSubmenuClose}>Level 2 - Option 1</MenuItem>
        <MenuItem onClick={handleSubmenuClose}>Level 2 - Option 2</MenuItem>
      </Menu>
      <button onClick={handleMenuOpen}>Open Menu</button>
    </div>
  );
}

export default NestedMenu;
