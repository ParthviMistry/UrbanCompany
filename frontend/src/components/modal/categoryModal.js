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
import styled from "styled-components";
import tw from "twin.macro";
import _ from "lodash";

const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-10 h-10 sm:h-10 bg-cover bg-center rounded sm:rounded-none pr-2`,
]);

const CategoryModal = ({ setDrawer, drawer }) => {
  const navigate = useNavigate();

  // const data = useSelector((state) => state?.category?.getDataByCategory);
  const data = useSelector((state) => state?.mainTitle.getCategoriesByMainTitleID);
  console.log("data ==", data);

  const toggleDrawer = (anchor, open) => (event) => {
    setDrawer(!drawer);
  };

  const handleClick = () => {
    navigate("/category")
  }

  let arr = [];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ArrowBackIcon fontSize="bold" sx={{ m: "15px" }} />
      {data.length > 0 && data.map((i) => { arr.push(...i.mainTitleId); _.uniqBy(arr, '_id'); }) && arr[0].title}
      <Divider />
      <List>
        {data.length > 0 && data.map((i) => (
          <ListItem>
            <ListItemButton onClick={() => handleClick()}>
              <CardImage imageSrc={i.image} />
              <ListItemText fontSize="bold" primary={i.title} style={{ paddingLeft: "20px" }} />
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
