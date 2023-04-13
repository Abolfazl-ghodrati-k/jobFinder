import * as React from "react";
import { useNavigate } from "@remix-run/react";
import Body from "./Navbar/Body";
import { User } from "@supabase/supabase-js";

export default function NavBar({ user }: { user: User | null }) {
  const [positionName, setpositionName] = React.useState<string>("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const navigate = useNavigate();

  const SearchforJob = () => {
    navigate(`/search?position=${positionName}`);
  };

  const handlepositionName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpositionName(e.target.value);
  };

  const openNotifs = () => {
    handleMenuClose();
    navigate("/notifs");
  };

  const openProfile = () => {
    navigate("/profile");
    handleMenuClose();
  };

  const handleLogout = () => {
    handleMenuClose();
    //TODO sign out
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <Body
      user={user}
      mobileMoreAnchorEl={mobileMoreAnchorEl}
      isMobileMenuOpen={isMobileMenuOpen}
      handleMobileMenuClose={handleMobileMenuClose}
      anchorEl={anchorEl}
      isMenuOpen={isMenuOpen}
      handleMenuClose={handleMenuClose}
      openProfile={openProfile}
      handleLogout={handleLogout}
      positionName={positionName}
      handlepositionName={handlepositionName}
      SearchforJob={SearchforJob}
      openNotifs={openNotifs}
      menuId={menuId}
      handleProfileMenuOpen={handleProfileMenuOpen}
      mobileMenuId={mobileMenuId}
      handleMobileMenuOpen={handleMobileMenuOpen}
    />
  );
}
