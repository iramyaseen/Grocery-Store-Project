import React from "react";
import { Box, Button, Link, Toolbar, Typography } from "@mui/material";
import { ReactComponent as LayoutImag } from "../../Images/Svg/li_layout-grid.svg";
import { ReactComponent as Vector } from "../../Images/Svg/Frame.svg";
import { ReactComponent as Deal } from "../../Images/Svg/hot deals 1.svg";
import { ReactComponent as Percentctor } from "../../Images/Svg/li_percent.svg";
import { ReactComponent as Megaphone } from "../../Images/Svg/li_megaphone.svg";
import { ReactComponent as Call } from "../../Images/Svg/Call.svg";

function TwoTopBar() {
  return (
    <Box
      sx={{
        paddingLeft: "60px",
        paddingRight: "60px",
        paddingBottom: "30px",
        paddingTop: "10px",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: {
            lg: "flex",
            xs: "none",
            sm: "none",
            md: "none",
          },
          justifyContent: {
            lg: "space-between",
          },

          flexWrap: "wrap",
        }}
      >
        <Box>
          <Button
            sx={{
              background: "#3bb77e",
              position: "inherit",
              color: "white",
              "&:hover": {
                background: "#3bb77e",
              },
            }}
          >
            <Toolbar
              component="span"
              className="categories_btn"
              sx={{ position: "inherit" }}
            >
              <LayoutImag />
              <span style={{ paddingLeft: "10px" }}> brows all categories</span>
            </Toolbar>
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Vector />
            <Link href="#" variant="body2" className="FirstLink">
              Home
            </Link>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Deal />
            <Link href="#" variant="body2" className="linkes">
              Hot deals
            </Link>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Percentctor />
            <Link href="#" variant="body2" className="linkes">
              Promotions
            </Link>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Megaphone />
            <Link href="#" variant="body2" className="linkes">
              New products
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Call className="call" />
          <Link href="#" variant="body2" className="numberLink">
            1233-7777
          </Link>
          <Typography className="support" component="span">
            24/7 support center
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default TwoTopBar;
