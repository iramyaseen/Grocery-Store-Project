import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../Context/cartSlice";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { ReactComponent as Shopping } from "../assets/Images/Svg/SmallShopping.svg";
import { addToWish } from "../Context/wishlist";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Silder = ({ products }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dispatch = useDispatch();
  const handlerClick = (product) => {
    dispatch(addToCart(product));
  };
  const WishlisthandlerClick = (product) => {
    dispatch(addToWish(product));
  };
  const notify = () => toast("Your product is add to cart!");
  const notify2 = () => toast("Your product is add to wishlist!");

  return (
    <div className="App">
      <Slider {...settings}>
        {products?.map((name) => {
          return (
            <Box key={name.id} className="border">
              <Box
                sx={{
                  paddingTop: "20px",
                  textAlign: "center",
                  height: "144px",
                  width: "224px",
                }}
              >
                <img src={name.image} alt="fruite" />
              </Box>
              <Typography
                component="p"
                sx={{
                  color: "#ADADAD",
                  fontSize: "15px",
                  fontWeight: "lighter",
                  paddingTop: "20px",
                }}
              >
                {name.type}
              </Typography>
              <Typography
                component="p"
                sx={{
                  color: "#253D4E",
                  fontWeight: "bold",
                  fontSize: "19px",
                  paddingBottom: "8px",
                }}
              >
                {name.name}
              </Typography>
              <Button onClick={notify2}>
                <Typography
                  component="p"
                  onClick={() => WishlisthandlerClick(name)}
                >
                  <Typography component="span" sx={{ color: "#FDC040" }}>
                    {<StarRateIcon />}
                  </Typography>
                  <Typography component="span" sx={{ color: "#FDC040" }}>
                    {<StarRateIcon />}
                  </Typography>
                  <Typography component="span" sx={{ color: "#FDC040" }}>
                    {<StarRateIcon />}
                  </Typography>
                  <Typography component="span" sx={{ color: "#FDC040" }}>
                    {<StarRateIcon />}
                  </Typography>
                  <Typography component="span" sx={{ color: "#D4D4D4" }}>
                    {<StarRateIcon />}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      paddingTop: "10px",
                      fontSize: "12px",
                      color: "#ADADAD",
                    }}
                  >
                    {<StarBorderIcon />}
                  </Typography>
                </Typography>
              </Button>
              <Typography component="p" sx={{ paddingBottom: "20px" }}>
                <Typography component="span">
                  {name.by}
                  <Typography
                    component="span"
                    sx={{ color: "#3bb77e", paddingLeft: "5px" }}
                  >
                    {name.owner}
                  </Typography>
                </Typography>
              </Typography>
              <Typography
                component="p"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <Box>
                  <Typography
                    component="span"
                    sx={{
                      color: "#3BB77E",
                      paddingRight: "10px",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    {name.price}
                  </Typography>
                  <Typography component="span" sx={{ color: "#ADADAD" }}>
                    <s>{name.realPrice}</s>
                  </Typography>
                </Box>
                <Box>
                  <Button
                    sx={{
                      background: "#DEF9EC",
                      color: "#3BB77E",
                      fontWeight: "bold",
                      padding: "10px 25px",
                      fontSize: "15px",
                      "&:hover": {
                        background: "#DEF9EC",
                      },
                    }}
                    onClick={notify}
                  >
                    <span>{<Shopping />}</span>
                    <span
                      style={{
                        textTransform: "capitalize",
                        paddingLeft: "5px",
                      }}
                      onClick={() => handlerClick(name)}
                      id="add"
                    >
                      Add
                    </span>
                  </Button>
                </Box>
              </Typography>
            </Box>
          );
        })}
      </Slider>
      <ToastContainer />
    </div>
  );
};
