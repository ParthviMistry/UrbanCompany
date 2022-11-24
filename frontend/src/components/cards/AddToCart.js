import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

import { addToCart, decreaseCart } from "store/cartSlice";

function AddToCart(props) {
  const dispatch = useDispatch();

  const [counter, setCounter] = useState(1);
  let [visible, setvisible] = useState(false);
  let [Quantity, setQuantity] = useState([]);

  const cart = useSelector((state) => state.cart);

  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => {
    counter !== 1 ? setCounter(counter - 1) : setvisible(false);
  };
  useEffect(() => {
    setQuantity(
      cart.cartItems.map(
        (item) => item?._id === props.data && item?.cartQuantity
      )
    );
  }, [cart]);

  useEffect(() => {
    bouncer();
  }, [Quantity.length]);
  function bouncer() {
    Quantity = Quantity?.filter(function (n) {
      return n !== true && n !== false;
    });
    return setQuantity(Quantity);
  }
  Quantity && console.log("fdf", Quantity[0]);
  console.log("item...", cart.cartItems);
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
        {!visible && (
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
                props.setArray((prevArray) => {
                  let index = prevArray.findIndex((obj) => obj.id === props.id);
                  let newArray = [...prevArray];
                  newArray[index] = {
                    id: props.id,
                    visible: true
                  };
                  return newArray;
                });
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
                  Quantity[0] === 1
                    ? setvisible(false)
                    : props.setArray((prevArray) => {
                        let index = prevArray.findIndex(
                          (obj) => obj.id === props.id
                        );
                        let newArray = [...prevArray];
                        newArray[index] = {
                          id: props.id,
                          visible: false
                        };
                        return newArray;
                      });
                  dispatch(decreaseCart(props.id));
                }}
              >
                -
              </Button>
              <Typography style={{ margin: "auto" }}>
                {cart.cartItems.length !== 0 &&
                  cart.cartItems.map(
                    (item) => item?._id === props.data && item.cartQuantity
                  )}
              </Typography>
              <Button onClick={() => dispatch(addToCart(props.id))}>+</Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default AddToCart;
