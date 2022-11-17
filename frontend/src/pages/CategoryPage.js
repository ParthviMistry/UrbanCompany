import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import _ from "lodash";
import { Card } from 'primereact/card';
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../components/misc/Headings";

import {
  getSubCategoriesByCategoryID,
} from "store/categorySlice";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-10 lg:py-10`;
const Description = tw.p`mt-2 font-medium text-secondary-100 leading-loose text-sm`;

const Subheading = tw(SubheadingBase)`mb-4`;
const HeadingTitle = tw(SectionHeading)`lg:text-left font-medium leading-tight`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  .action {
    ${tw`text-center inline-block w-full sm:w-48 py-4 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300`}
  }
  .primaryAction {
    ${tw`bg-primary-500 text-gray-100 hover:bg-primary-700 ml-5 mb-5`}
  }
  .secondaryAction {
    ${tw`mt-4 sm:mt-0 sm:ml-4 bg-gray-300 text-gray-700 hover:bg-gray-400 hover:text-gray-800`}
  }
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500 `}
  }
  button {
    ${tw`w-1 sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

const CategoryPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const data = useSelector((state) => state?.category?.getDataByCategory);

  const [counter, setCounter] = useState(1);
  const [visible, setvisible] = useState(false);

  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => {
    counter !== 0 ? setCounter(counter - 1) : setvisible(false);
  };

  useEffect(() => {
    dispatch(getSubCategoriesByCategoryID(params.id));
  }, []);

  return (
    <Container>
      <Content>
        <Box>
          <HeadingInfo
            tw="hidden lg:block"
            description="Home Services > Home Cleaning"
          />
          {/* <Card title={data[0].categoryID[0].title} style={{ width: "100%" }}>
            <div style={{ marginBottom: "2em", display: "flex" }}>
              <img
                alt="Card"
                src={data[0].categoryID[0].image}
                width="300px"
                height="300px"
              />
              <p style={{ marginLeft: "20px" }}>
                {data[0].categoryID[0].description}
              </p>
            </div>
          </Card> */}
          <Divider />
          <HeadingInfo tw="hidden lg:block" subheading="SubCategory" />
          <div
            style={{ marginBottom: "2em", display: "flex", padding: "20px" }}
          >
            {data.map((i) => {
              return (
                <Paper
                  title={i.title}
                  style={{ marginLeft: "20px" }}
                  onClick={() => {
                    console.log("click");
                  }}
                >
                  <img
                    alt="Card"
                    src={i.image}
                    style={{
                      padding: "20px",
                      width: "150px",
                      height: "120px",
                      backgroundSize: "cover",
                    }}
                  />
                  <p style={{ padding: "20px" }}>{i.title}</p>
                </Paper>
              );
            })}
          </div>
          <Divider />
          {data.map((i) => {
            return (
              <>
                <Paper>
                  <div
                    style={{
                      display: "flex",
                      margin: "20px 40px 5px",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "800",
                        margin: "15px",
                      }}
                    >
                      <p style={{
                      fontSize: "30px",
                    }}>{i.title}</p>
                      <img
                        style={{
                          padding: "20px 0",
                          width: "100px",
                          height: "120px",
                          backgroundSize: "cover",
                        }}
                        src={i.image}
                      />
                    <p>Price - ${i.price}</p>
                    <p>Time - {i.time}</p>
                    </Typography>
                    <div style={{ margin: "20px", paddingRight: "20px" }}>
                      {!visible && (
                        <>
                          <div
                            style={{
                              border: "3px solid #000000",
                              width: "150px",
                              height: "50px",
                              textAlign: "center",
                              padding: "10px",
                            }}
                            onClick={() => setvisible(true)}
                          >
                            Add
                          </div>
                        </>
                      )}

                      {visible && (
                        <>
                          <div
                            style={{
                              border: "3px solid #000000",
                              width: "150px",
                              height: "50px",
                              display: "flex",
                            }}
                          >
                            <Button onClick={decrementCounter}>-</Button>
                            <Typography style={{ margin: "auto" }}>
                              {counter}
                            </Typography>
                            <Button onClick={incrementCounter}>+</Button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <Divider />
                  <div style={{ padding: "20px 60px" }}>
                    <p>{i.description}</p>
                  </div>
                </Paper>
              </>
            );
          })}
        </Box>
      </Content>
    </Container>
  );
};
export default CategoryPage;

const HeadingInfo = ({ subheading, heading, description, ...props }) => (
  <div>
    {subheading ? <Subheading>{subheading}</Subheading> : null}
    <HeadingTitle>{heading}</HeadingTitle>
    <Description>{description}</Description>
  </div>
);
