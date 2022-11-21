import React from "react";
import { useSelector } from "react-redux";
import tw from "twin.macro";
import styled from "styled-components";
import Header, {
  LogoLink,
  NavLinks,
  NavLink as NavLinkBase
} from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`;

const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6
`;

const Container = tw.div`relative -mx-8 -mt-8`;
const TwoColumn = tw.div`flex flex-col lg:flex-row bg-gray-100`;
const LeftColumn = tw.div`ml-8 mr-8 xl:pl-10 py-8`;

const handleLogout = () => {
  // const navigate = useNavigate();
  localStorage.clear();
  // navigate("/home");
  console.log("logout");
};

const MainHeader = () => {
  const token = useSelector((state) => state.auth.token);

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/">Home</NavLink>
      {/* <NavLink href="#">Blog</NavLink> */}
      {token ? (
        <NavLink
          type="button"
          className="btn loginButton"
          href="/"
          onClick={handleLogout}
        >
          Logout
        </NavLink>
      ) : (
        <NavLink type="button" className="btn loginButton" href="/login">
          Login
        </NavLink>
      )}
    </NavLinks>
  ];

  return (
    <Container>
      <TwoColumn>
        <LeftColumn>
          <StyledHeader links={navLinks} collapseBreakpointClass="sm" />
        </LeftColumn>
      </TwoColumn>
    </Container>
  );
};

export default MainHeader;
