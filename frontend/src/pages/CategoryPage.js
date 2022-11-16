import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "../components/misc/Headings";
import { ContentWithPaddingXl } from "../components/misc/Layouts.js";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Divider from "@mui/material/Divider";
import _ from "lodash";
import MainHeader from "components/headers/main";
import Footer from "components/footers/MiniCenteredFooter.js";
import { Card } from 'primereact/card';
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const TestimonialsContainer = tw.div`mt-16 lg:mt-0`;
const Testimonials = styled.div``;
const Testimonial = tw.div`max-w-md lg:max-w-none mx-auto lg:mx-0 flex flex-col items-center lg:items-stretch lg:flex-row`;

const TestimonialImageSlider = tw(Slider)`w-full lg:w-5/12 flex-shrink-0 `;
const TestimonialTextSlider = tw(Slider)``;
const TestimonialText = tw.div`outline-none`;

const ImageAndControlContainer = tw.div`relative outline-none`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-80 sm:h-96 lg:h-144`,
]);

const Row = tw.div`flex flex-col lg:flex-row -mb-10`;
const Heading = tw(SectionHeading)`text-left lg:text-4xl xl:text-5xl`;

const PopularPostsContainer = tw.div`lg:w-2/3`;
const PostsContainer = tw.div`mt-12 flex flex-col sm:flex-row sm:justify-between lg:justify-start`;
// const Post = tw(motion.a)`block sm:max-w-sm cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16`;

const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;
const Description = tw.p`mt-2 font-medium text-secondary-100 leading-loose text-sm`;
const AuthorInfo = tw.div`mt-6 flex items-center`;
const AuthorImage = tw.img`w-12 h-12 rounded-full`;
const AuthorNameAndProfession = tw.div`ml-4`;
const AuthorName = tw.h6`font-semibold text-lg`;
const AuthorProfile = tw.p`text-secondary-100 text-sm`;

// const RecentPostsContainer = styled.div`
//   ${tw`mt-24 lg:mt-0 lg:w-1/3`}
//   ${PostsContainer} {
//     ${tw`flex flex-wrap lg:flex-col`}
//   }
//   ${Post} {
//     ${tw`flex justify-between mb-10 max-w-none w-full sm:w-1/2 lg:w-auto sm:odd:pr-12 lg:odd:pr-0 mr-0`}
//   }
//   ${Title} {
//     ${tw`text-base xl:text-lg mt-0 mr-4 lg:max-w-xs`}
//   }
//   ${AuthorName} {
//     ${tw`mt-3 text-sm text-secondary-100 font-normal leading-none`}
//   }
//   ${Image} {
//     ${tw`h-20 w-20 flex-shrink-0`}
//   }
// `;
const PostTextContainer = tw.div``;

const TextContainer = styled.div((props) => [
  tw`flex flex-col w-full lg:w-7/12`,
  props.textOnLeft ? tw`lg:pr-12 lg:order-first` : tw`lg:pl-12 lg:order-last`,
]);

const Subheading = tw(SubheadingBase)`mb-4`;
const HeadingTitle = tw(SectionHeading)`lg:text-left leading-tight`;

const QuoteContainer = tw.div`relative mt-10 lg:mt-20`;
const Quote = tw.blockquote`text-center lg:text-left text-sm sm:text-lg lg:text-xl xl:text-2xl`;
const CustomerInfo = tw.div`mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start`;
const CustomerProfilePicture = tw.img`rounded-full w-20 h-20`;
const CustomerTextInfo = tw.div`text-center lg:text-left sm:ml-6 mt-2 sm:mt-0`;
const CustomerName = tw.h5`font-semibold text-xl lg:text-2xl xl:text-3xl text-primary-500`;
const CustomerTitle = tw.p`font-medium text-secondary-100`;

const CategoryPage = ({
  subheading = "",
  heading = "",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  testimonials = null,
  textOnLeft = false
}) => {
  const data = useSelector((state) => state?.category?.getDataByCategory);
  console.log("reduc category data ==>", data);

  const [imageSliderRef, setImageSliderRef] = useState(null);
  const [textSliderRef, setTextSliderRef] = useState(null);
  const [counter, setCounter] = useState(1);
  const [visible, setvisible] = useState(false);
  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () =>{ counter!==0?setCounter(counter - 1):setvisible(false)};

  return (
    <Container>
      <Content>
        <Box>
          <Card title={data[0].categoryID[0].title} style={{ width: "100%" }} >
            <div style={{ marginBottom: '2em', display: 'flex', padding: "20px" }}>
              <img alt="Card" src={data[0].categoryID[0].image} width="300px" height="300px" />
              <p style={{ marginLeft: '20px' }}>
                {data[0].categoryID[0].description}
              </p>
            </div>
          </Card>
          <Divider />
          <HeadingInfo tw="hidden lg:block" subheading="SubCategory" />
          <div style={{ marginBottom: '2em', display: 'flex', padding: "20px" }}>
            {data.map((i) => {
              return (
                <Paper title={i.title} style={{ marginLeft: "20px" }}>
                  <img alt="Card" style={{ padding: '20px' }} src={i.image} width="150px" height="200px" />
                  <p style={{ padding: "20px" }}>
                        {i.title}
                      </p>
                    </Paper>
                );
              })}
              </div>
          <Divider />
          <Paper style={{ width: "50%" }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: "800", fontSize: "30px", m: "40px" }}
            >
              Salon Prime
            </Typography>
            <div style={{ display: "flex" }}>
              <div>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: "550",
                    fontSize: "22px",
                    marginLeft: "40px",
                  }}
                >
                  Face Detop
                </Typography>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontSize: "15px",
                    fontWeight: "550",
                    marginLeft: "40px",
                  }}
                >
                  $123 1 hr
                </Typography>
              </div>
              <div
                style={{ margin: "auto 0px auto auto", paddingRight: "20px" }}
              >
                {!visible &&(<>
                 <div style={{display:"flex" ,border: "3px solid #000000",width:"150px"}}>
                <Button style={{margin:"auto"}}  onClick={() => setvisible(true)}>
                  Add
                </Button>
                </div></>)}
                
                {
                  
                visible && (<>
                <div style={{display:"flex" ,border: "3px solid #000000", width:"150px"}}>
                <Button onClick={decrementCounter} >-</Button>
                <Typography style={{margin:"auto"}}>{counter}</Typography>
                <Button onClick={incrementCounter}>+</Button>
                </div>
                </>)
                }
            
              </div>
            </div>
            <Divider />
            <div style={{ marginLeft: "40px" }}>
              <ol>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ol>
            </div>
          </Paper>
          <div></div>
        </Box>
      </Content>
      <section>
        <h1>Test image category</h1>
      </section>
      <Footer />
    </Container >
  );
}
export default CategoryPage;

const HeadingInfo = ({ subheading, heading, description, ...props }) => (
  <div>
    {subheading ? <Subheading>{subheading}</Subheading> : null}
    <HeadingTitle>{heading}</HeadingTitle>
    <Description>{description}</Description>
  </div>
);
