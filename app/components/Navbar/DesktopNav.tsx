import { AccountCircle, Notifications } from "@mui/icons-material";
import { Badge, Box, IconButton } from "@mui/material";

type Props = {
  openNotifs: () => void;
  menuId: string;
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
};

function DesktopNav({ openNotifs, menuId, handleProfileMenuOpen }: Props) {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
    </Box>
  );
}

export default DesktopNav;
