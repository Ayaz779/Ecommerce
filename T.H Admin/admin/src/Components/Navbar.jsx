import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import { Tablet } from "../responsive";
import { Pc } from "../responsive";
import logo from "../Pics/logo.jpeg";

const Container = styled.div`
  background: #e1dddd;
`;

const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  align-items: center;
  ${mobile({flexDirection:"column"})}
`;

const Image = styled.img`
  width: 45px;
  height: 45px;
`;

const Center = styled.div`
  flex: 2;
  text-align: left;
`;

const Logo = styled.h1`
  font-style: italic;
  margin: 10px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-style: 14px;
  cursor: pointer;
  margin-left: 25px;
`;
const Button1 = styled.button`
  display: none;
`;
const Button2 = styled.button`
  background: none;
  border: none;
  color: blue;
`;

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Image src={logo} />
          <Center>
            <Logo>
              <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
                TRADING_HUB
              </Link>
            </Logo>
          </Center>
          <Right>
            <MenuItem>
              <Link to={"/Home"} style={{ textDecoration: "none" }}>
                HOME
              </Link>
            </MenuItem>
            {/* <MenuItem>
              <Link to={"/Products"} style={{ textDecoration: "none" }}>
                PRODUCTS
              </Link>
              PRODUCTS
            </MenuItem> */}
            <MenuItem>
              <Link to={"/product"} style={{ textDecoration: "none" }}>
                ADD_PRODUCTS
              </Link>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
