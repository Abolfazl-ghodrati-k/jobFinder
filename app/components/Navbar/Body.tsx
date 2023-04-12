import {
  AppBar,
  Box,
  IconButton,
  InputAdornment,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "@remix-run/react";
import SearchIcon from "@mui/icons-material/Search";
import { Search, StyledInputBase } from "./styledComponents";
import Header from "./Header";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import RenderMobileMenu from "./RenderMobileMenu";
import RenderMenu from "./RenderMenu";

type Props = {
  positionName: string;
  handlepositionName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  SearchforJob: () => void;
  openNotifs: () => void;
  menuId: string;
  handleProfileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  mobileMenuId: string;
  handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void;
  mobileMoreAnchorEl: HTMLElement | null;
  isMobileMenuOpen: boolean;
  handleMobileMenuClose: () => void;
  anchorEl: HTMLElement | null;
  isMenuOpen: boolean;
  handleMenuClose: () => void;
  openProfile: () => void;
  handleLogout: () => void;
};

function Body({
  anchorEl,
  isMenuOpen,
  handleMenuClose,
  openProfile,
  handleLogout,
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  handleMobileMenuClose,
  positionName,
  handlepositionName,
  SearchforJob,
  openNotifs,
  menuId,
  handleProfileMenuOpen,
  mobileMenuId,
  handleMobileMenuOpen,
}: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Box
          maxWidth="lg"
          margin={".5rem auto"}
          width="100%"
          sx={{ borderLeft: "1px solid gray", borderRight: "1px solid gray" }}
        >
          <Toolbar>
            <Header />
            <Search>
              <StyledInputBase
                fullWidth
                value={positionName}
                onChange={handlepositionName}
                placeholder="Search jobs by position..."
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={SearchforJob}>
                      <SearchIcon color="secondary" />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <DesktopNav
              openNotifs={openNotifs}
              menuId={menuId}
              handleProfileMenuOpen={handleProfileMenuOpen}
            />
            <MobileNav
              mobileMenuId={mobileMenuId}
              handleMobileMenuOpen={handleMobileMenuOpen}
            />
          </Toolbar>
          <RenderMobileMenu
            handleMobileMenuClose={handleMobileMenuClose}
            handleProfileMenuOpen={handleProfileMenuOpen}
            isMobileMenuOpen={isMobileMenuOpen}
            mobileMenuId={mobileMenuId}
            mobileMoreAnchorEl={mobileMoreAnchorEl}
            openNotifs={openNotifs}
          />
          <RenderMenu
            anchorEl={anchorEl}
            menuId={menuId}
            isMenuOpen={isMenuOpen}
            handleMenuClose={handleMenuClose}
            openProfile={openProfile}
            handleLogout={handleLogout}
          />
        </Box>
      </AppBar>
    </Box>
  );
}

export default Body;
