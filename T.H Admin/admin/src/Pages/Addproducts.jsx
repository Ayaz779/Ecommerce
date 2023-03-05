import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Addproducts = () => {
  const [title1, setTitle] = useState("");
  const [desc1, setDesc] = useState("");
  const [img1, setImg] = useState("");
  const [category1, setCategory] = useState("");
  const [category4, setCategory3] = useState("");
  const [size1, setSize] = useState("");
  const [size3, setSize2] = useState("");
  const [color1, setColor] = useState("");
  const [color3, setColor2] = useState("");
  const [price1, setPrice] = useState("");
  // category1.push(category4);
  var ref = [category1, category4];
  var ref1 = [size1, size3];
  var ref2 = [color1, color3];

  const update = {
    title: title1,
    desc: desc1,
    img: img1,
    categories: ref,
    size: ref1,
    color: ref2,
    price: price1,
  };
  console.log(update);
  let navigate = useNavigate();
  const handlesignup = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    navigate("/Home");
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Title>Add Product :</Title>
          <Form>
            <Input
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Description"
              onChange={(e) => setDesc(e.target.value)}
            />
            <Input
              placeholder="Image Url"
              onChange={(e) => setImg(e.target.value)}
            />
            <Input
              placeholder="Category 1"
              onChange={(e) => setCategory(e.target.value)}
            />
            <Input
              placeholder="Category 2"
              onChange={(e) => setCategory3(e.target.value)}
            />
            <Input
              placeholder="Size 1"
              onChange={(e) => setSize(e.target.value)}
            />
            <Input
              placeholder="Size 2"
              onChange={(e) => setSize2(e.target.value)}
            />
            <Input
              placeholder="Color 1"
              onChange={(e) => setColor(e.target.value)}
            />
            <Input
              placeholder="Color 2"
              onChange={(e) => setColor2(e.target.value)}
            />
            <Input
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordanc with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button onClick={handlesignup}>Add Product</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Addproducts;
