import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { ReactComponent as RightArrow } from "../assets/Images/Svg/li_arrow-right.svg";
import image from "../assets/Images/Offer1-img.png";
import discountHeroImage from "../assets/Images/Offer2-img.png";

export const DiscountComponent = () => {
  return (
    <Box
      className="nav_bar discount_components nav_bars_items Navbar_component "
      sx={{
        display: {
          lg: "flex",
          md: "block",
        },
        justifyContent: "space-between",
        paddingTop: "80px",
        paddingRight: "60px",
        paddingLeft: "50px",
      }}
    >
      <Box
        className="responsive_padding"
        sx={{
          background: "#FFF5E1D9",
          width: {
            lg: "600px",
            md: "100%",
          },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "44px",
          paddingTop: "33px",
          paddingRight: "44px",
          marginBottom: {
            lg: "0",
            md: "30px",
            sm: "30px",
            xs: "30px",
          },
        }}
      >
        <Box>
          <Button
            sx={{
              padding: "10px 20px",
              background: "#FFD480",
              color: "white",
              "&:hover": {
                background: "#FFD480",
              },
              textTransform: "capitalize",
              marginBottom: "25px",
            }}
          >
            Free delivery
          </Button>
          <Typography
            variant="h4"
            sx={{ fontWeight: "lighter", paddingBottom: "5px" }}
          >
            Free delivery over $50
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#838383", paddingBottom: "30px" }}
          >
            Shop $50 product and get free
            <br /> delivery anywhre.
          </Typography>
          <Button
            sx={{
              background: "#3BB77E",
              "&:hover": {
                background: "#3BB77E",
              },
              color: "white",
              padding: "15px 30px",
              alignItems: "center",
              marginBottom: "44px",
              textTransform: "capitalize",
              fontSize: "20px",
            }}
          >
            Shop Now {<RightArrow className="svg_icons" />}
          </Button>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img
            style={{ position: "absolute", top: "-130px", right: "10%" }}
            src={image}
            alt="discontImage"
          />
        </Box>
      </Box>

      {/*  */}
      <Box
        sx={{
          background: "#D2EFE1",
          width: {
            lg: "600px",
            md: "100%",
          },
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "33px",
          paddingLeft: "44px",
        }}
        className="responsive_padding"
      >
        <Box>
          <Button
            sx={{
              padding: "10px 20px",
              background: "#FFD480",
              color: "white",
              "&:hover": {
                background: "#FFD480",
              },
              textTransform: "capitalize",
              marginBottom: "25px",
            }}
          >
            Free delivery
          </Button>
          <Typography
            variant="h4"
            sx={{ fontWeight: "lighter", paddingBottom: "5px" }}
          >
            Organic Food
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#838383", paddingBottom: "30px" }}
          >
            Save up to 60% off on your <br /> first order
          </Typography>
          <Button
            sx={{
              background: "#3BB77E",
              "&:hover": {
                background: "#3BB77E",
              },
              color: "white",
              padding: "15px 30px",
              alignItems: "center",
              marginBottom: "44px",
              textTransform: "capitalize",
              fontSize: "20px",
            }}
          >
            Order Now {<RightArrow className="svg_icons" />}
          </Button>
        </Box>
        <Box sx={{ position: "relative" }}>
          <img
            src={discountHeroImage}
            style={{ position: "absolute", bottom: "0%", right: "10%" }}
            alt="discountImage"
          />
        </Box>
      </Box>
    </Box>
  );
};
