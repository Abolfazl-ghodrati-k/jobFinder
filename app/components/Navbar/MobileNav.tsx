import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material//Menu";

type Props = {
  mobileMenuId: string;
  handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
};

function MobileNav({ mobileMenuId, handleMobileMenuOpen }: Props) {
  return (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="show more"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMobileMenuOpen}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
}

export default MobileNav;
