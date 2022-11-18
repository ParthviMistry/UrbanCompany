import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";

const Card = tw.div`h-full w-1/4 flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`,
]);

const TextInfo = tw.div`sm:px-10 sm:py-4`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;
const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const TestCard = ({ category }) => {
  console.log("here");
  return category.map((cat) => {
    return (
      <Card onClick={() => console.log("click")}>
        <TextInfo>
          <TitleReviewContainer>
            <Title>{cat.title}</Title>
            <RatingsInfo>
              <StarIcon />
            </RatingsInfo>
          </TitleReviewContainer>
          <Description>{cat.description}</Description>
          <Description style={{ fontWeight: "bold" }}>View more...</Description>
        </TextInfo>
      </Card>
    );
  });
};

export default TestCard;
