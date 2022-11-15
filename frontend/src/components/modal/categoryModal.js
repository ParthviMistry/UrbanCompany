import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Divider from "@mui/material/Divider";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const CategoryModal = ({ setDrawer, drawer }) => {
  const navigate = useNavigate();

  const data = useSelector((state) => state?.category?.getDataByCategory);
  
  const toggleDrawer = (anchor, open) => (event) => {
    setDrawer(!drawer);
  };

  const handleClick = () => {
    console.log("click");
    navigate("/category")
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ArrowBackIcon fontSize="bold" sx={{ m: "15px" }} />
      <Divider />
      <List>
        {data.length > 0 && data.map((i) => (
          <ListItem>
            <ListItemButton onClick={() => handleClick()}>
              <ListItemText fontSize="bold" primary={i.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key="right">
        <Drawer
          anchor="right"
          open={true}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default CategoryModal;
