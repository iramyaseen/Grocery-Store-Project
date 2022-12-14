import React from "react";
import { styled, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavBarLogoComponent } from "./NavBarLogoComponent";
import { NavBarSearchComponent } from "./NavBarSearchComponent";
import { WishlistAndAddTopCart } from "./WishlistAndAddTopCar";
import { AvatarComponent } from "./AvatarComponent";

const StyledAppBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "20px",
  paddingBottom: "20px",
});
export const NavBarComponents = () => {
  return (
    <Box
      sx={{
        paddingLeft: "20px",
        paddingRight: "20px",
        width: "100%",
      }}
    >
      <Box>
        <StyledAppBar className="Navbar_component">
          <NavBarLogoComponent />
          <NavBarSearchComponent />
          <WishlistAndAddTopCart />
          <AvatarComponent />
        </StyledAppBar>
      </Box>
    </Box>
  );
};
