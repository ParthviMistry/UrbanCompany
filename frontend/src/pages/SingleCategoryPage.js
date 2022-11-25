import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Card } from "primereact/card";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { cart } from "store/categorySlice";
import AddToCart from "../components/cards/AddToCart";

import {
  SectionHeading,
  Subheading as SubheadingBase
} from "../components/misc/Headings";

import _ from "lodash";

import "../styles/index.css";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-10 lg:py-10`;
const Description = tw.p`mt-2 font-medium text-secondary-100 leading-loose text-sm`;

const Subheading = tw(SubheadingBase)`mb-4`;
const HeadingTitle = tw(SectionHeading)`lg:text-left leading-tight`;

const SingleCategoryPage = ({ textOnLeft = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state?.category?.getDataBySubCategory);
  const cart = useSelector((state) => state?.cart);

  return (
    <Container>
      <Content>
        <div className="continue-shopping">
          <Link to="/">
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
            <span>Back</span>
          </Link>
        </div>
        <Box>
          <Card
            className="singleCategoryTitle"
            title={data[0]?.categoryID?.[0].title}
          >
            <div className="singleCategoryImg">
              <img
                alt="Card"
                src={data[0]?.categoryID?.[0].image}
                width="300px"
                height="300px"
              />
              <p>{data[0]?.categoryID?.[0].description}</p>
            </div>
          </Card>
          <Divider />
          <HeadingInfo tw="hidden lg:block" subheading="SubCategory" />
          <div className="singleCategoryMain">
            {data.map((i) => {
              return (
                <Paper className="title" title={i.title}>
                  <img alt="Card" src={i.image} />
                  <p>{i.title}</p>
                </Paper>
              );
            })}
          </div>
          <Divider />
          {data.map((i, idx) => {
            return (
              <>
                <Paper>
                  <div className="subcategory">
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "800",
                        fontSize: "30px",
                        margin: "20px"
                      }}
                    >
                      <p>{i.title}</p>
                      <p style={{ fontSize: "16px" }}>
                        <i class="fa fa-rupee"></i> {i.price}
                      </p>
                    </Typography>
                  </div>
                  <Divider />
                  <div className="subCategoryDescription">
                    <p>{i.description}</p>
                  </div>
                  <AddToCart data={i} id={i._id} />
                </Paper>
              </>
            );
          })}
          {cart.cartTotalQuantity > 0 && (
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                margin: "10px"
              }}
            >
              <Button variant="contained" onClick={() => navigate("/cart")}>
                View Cart
              </Button>
            </div>
          )}
        </Box>
      </Content>
    </Container>
  );
};
export default SingleCategoryPage;

const HeadingInfo = ({ subheading, heading, description, ...props }) => (
  <div>
    {subheading ? <Subheading>{subheading}</Subheading> : null}
    <HeadingTitle>{heading}</HeadingTitle>
    <Description>{description}</Description>
  </div>
);
