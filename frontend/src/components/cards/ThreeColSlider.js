import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import tw from "twin.macro";

import { getAllCategory } from "store/categorySlice";
import { useNavigate } from "react-router-dom";

import CardSlider1 from "./CardSlider1";
import _ from "lodash";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

export default () => {
  const dispatch = useDispatch();

  const [drawer, setDrawer] = useState(false);
  const [title, settitle] = useState([]);

  const data = useSelector((state) => state?.category?.getdata);

  const fillterdata = useSelector(
    (state) => state?.category?.selectedCatgory?.data
  );
  const navigate = useNavigate();

  let maintitleidarr = [];

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  useEffect(() => {
    data?.length &&
      data.map((data) => {
        return maintitleidarr.push(...data?.mainTitleId);
      });

    // settitle(fillterdata);
    !fillterdata && settitle(_.uniqBy(maintitleidarr, "title"));
  }, [data]);

  useEffect(() => {
    fillterdata && navigate(`/category/${fillterdata.map((i) => i._id)}`);
  }, [fillterdata]);

  return (
    <Container>
      <Content>
        {title &&
          title?.map((card1) => (
            <CardSlider1 card={card1} data={data} drawer={drawer} />
          ))}
      </Content>
    </Container>
  );
};
