import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

function AddToCart(props) {
  const [counter, setCounter] = useState(1);
  let [visible, setvisible] = useState(false);

  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => {
    counter !== 1 ? setCounter(counter - 1) : setvisible(false);
  };

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
                  counter === 1 &&
                    props.setArray((prevArray) => {
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
                  decrementCounter();
                }}
              >
                -
              </Button>
              <Typography style={{ margin: "auto" }}>{counter}</Typography>
              <Button onClick={incrementCounter}>+</Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default AddToCart;
