import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";

export default function DropMeunBar(name) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const items = useSelector((state) => state.products.items.Categories);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          textTransform: "capitalize",
          color: "#253D4E",
          padding: "12px",
          width: "143px",
          fontWeight: "bold",
        }}
      >
        All Categories
        <ExpandMoreIcon id="change" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {items?.map((cate, key) => {
          return (
            <Box key={key}>
              <MenuItem onClick={handleClose}>{cate.val2}</MenuItem>
              <MenuItem onClick={handleClose}>{cate.val3}</MenuItem>
              <MenuItem onClick={handleClose}>{cate.val4}</MenuItem>
              <MenuItem onClick={handleClose}>{cate.val5}</MenuItem>
            </Box>
          );
        })}
      </Menu>
    </div>
  );
}
