import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector } from "react-redux";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { ReactComponent as LayoutImag } from "../Images/Svg/li_layout-grid.svg";
import { ReactComponent as Vector } from "../Images/Svg/Frame.svg";
import { ReactComponent as Deal } from "../Images/Svg/hot deals 1.svg";
import { ReactComponent as Percentctor } from "../Images/Svg/li_percent.svg";
import { ReactComponent as Megaphone } from "../Images/Svg/li_megaphone.svg";
import { ReactComponent as Call } from "../Images/Svg/Call.svg";
import { DropDownMenuComponent } from "./DropDownMenuComponent";
import { Link, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../redux/cartSlice";

export const AddToCardDropDown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const items = useSelector((state) => state.products.items.Categories);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { cartTotalAmount } = useSelector((state) => state.cart);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleAddToCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  const handleClearCart = (cartItem) => {
    dispatch(clearCart(cartItem));
  };
  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          textTransform: "capitalize",
          color: "#253D4E",
          width: "inherit",
          fontWeight: "bold",
          textAlign: "left",
          lineHeight: "unset",
          padding: "0px",
        }}
      >
        <Box sx={{ display: "block", alignItems: "center" }}>
          My cart
          <Typography
            sx={{
              fontSize: "15px",
              color: "#3BB77E",
              fontWeight: "bold",
              "&hover": {
                background: "white",
              },
            }}
          >
            ${cartTotalAmount}
          </Typography>
        </Box>
        <ExpandMoreIcon id="change" style={{ cursor: "pointer" }} />
      </Button>
      <Menu
        sx={{ width: "60%", padding: "0%", left: "0%" }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <div className="cart-container" style={{ padding: "10px" }}>
            {cart.cartItems.length === 0 ? (
              <div className="cart-empty">
                <p>Your cart is currently empty</p>
                <div className="start-shopping">
                  <NavLink to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                    <span>Start Shopping</span>
                  </NavLink>
                </div>
              </div>
            ) : (
              <div>
                <div className="cart-items">
                  {cart.cartItems &&
                    cart.cartItems.map((cartItem) => (
                      <div className="cart-item" key={cartItem.id}>
                        <div className="cart-product">
                          <img src={cartItem.image} alt={cartItem.name} />
                          <div>
                            <h3>{cartItem.name}</h3>
                            <button
                              onClick={() => handleRemoveFromCart(cartItem)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="cart-product-price">
                          ${cartItem.price}
                        </div>
                        <div className="cart-product-quantity">
                          <button onClick={() => handleDecreaseCart(cartItem)}>
                            -
                          </button>
                          <div className="count">{cartItem.cartQuantity}</div>
                          <button onClick={() => handleAddToCart(cartItem)}>
                            +
                          </button>
                        </div>
                        <div className="cart-product-total-price">
                          ${cartItem.price * cartItem.cartQuantity}
                        </div>
                      </div>
                    ))}
                </div>
                <div className="cart-summary">
                  <button
                    className="clear-btn"
                    onClick={() => handleClearCart()}
                  >
                    Clear Cart
                  </button>
                  <div className="cart-checkout">
                    <div className="subtotal">
                      <span>Total</span>
                      <span className="amount">${cart.cartTotalAmount}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </MenuItem>
      </Menu>
    </Box>
  );
};