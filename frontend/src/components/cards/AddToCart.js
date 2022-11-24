import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

import { addToCart, decreaseCart, getTotals } from "store/cartSlice";

function AddToCart({ data, id }) {
  const dispatch = useDispatch();

  let [visible, setvisible] = useState(false);
  let [quantity, setQuantity] = useState([]);

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    setQuantity(
      cart.cartItems.map((item) => item?._id === id && item?.cartQuantity)
    );

    dispatch(getTotals());
  }, [cart]);

  console.log("quantity==>", quantity);

  // useEffect(() => {
  //   bouncer();
  // }, [quantity.length]);
  // function bouncer() {
  //   quantity = quantity?.filter(function (n) {
  //     return n !== true && n !== false;
  //   });
  //   return setQuantity(quantity);
  // }

  return (
    <>
      <div
        style={{
          margin: "20px",
          padding: "20px",
          justifyContent: "end",
          display: "flex"
        }}
      >
        {!visible ? (
          <>
            <div
              style={{
                border: "3px solid #000000",
                width: "150px",
                height: "50px",
                display: "flex"
              }}
            >
              <Button
                onClick={() => {
                  quantity[0] === 1 && setvisible(false);
                  dispatch(decreaseCart(data));
                }}
              >
                -
              </Button>
              <Typography style={{ margin: "auto" }}>
                {quantity}
                {/* {cart.cartItems.length !== 0 &&
                  cart.cartItems.map(
                    (item) => item?._id === props.data && item.cartQuantity
                  )} */}
              </Typography>
              <Button onClick={() => dispatch(addToCart(data))}>+</Button>
            </div>
          </>
        ) : (
          <>
            <Button
              style={{
                border: "3px solid #000000",
                width: "150px",
                height: "50px",
                textAlign: "center",
                padding: "10px"
              }}
              onClick={() => {
                dispatch(addToCart(data));
              }}
            >
              Add
            </Button>
          </>
        )}

        {/* {!visible && (
          <>
            <Button
              style={{
                border: "3px solid #000000",
                width: "150px",
                height: "50px",
                textAlign: "center",
                padding: "10px"
              }}
              onClick={() => {
                setvisible(true);
                dispatch(addToCart(props.id));
              }}
            >
              Add
            </Button>
          </>
        )}

        {visible && (
          <>
            <div
              style={{
                border: "3px solid #000000",
                width: "150px",
                height: "50px",
                display: "flex"
              }}
            >
              <Button
                onClick={() => {
                  quantity[0] === 1 && setvisible(false);
                  dispatch(decreaseCart(props.id));
                }}
              >
                -
              </Button>
              <Typography style={{ margin: "auto" }}>
                {quantity}
                {cart.cartItems.length !== 0 &&
                  cart.cartItems.map(
                    (item) => item?._id === props.data && item.cartQuantity
                  )}
              </Typography>
              <Button onClick={() => dispatch(addToCart(props.id))}>+</Button>
            </div>
          </>
        )} */}
      </div>
    </>
  );
}

export default AddToCart;
