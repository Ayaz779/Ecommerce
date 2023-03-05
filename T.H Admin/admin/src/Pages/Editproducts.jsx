import React, { useState } from 'react'
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";

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

const Editproducts = () => {
    let navigate = useNavigate();
    const [title2, setTitle] = useState("");
    const [desc2, setDesc] = useState("");
    const [img2, setImg] = useState("");
    const [category2, setCategory] = useState([]);
    const [size2, setSize] = useState([]);
    const [color2, setColor] = useState([]);
    const [price2, setPrice] = useState("");
  
    const update = {
      title: title2,
      desc: desc2,
      img: img2,
      categories: category2,
      size: size2,
      color: color2,
      price: price2,
    };
    const url = window.location.href;
    var id1 = (url.slice(url.indexOf("?")+1));
    const handleupdate = (e)=>{
        e.preventDefault();
        fetch(`http://localhost:4000/api/products/${id1}`, {
          method: "PUT",
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
          navigate('/Home');
    }
  return (
    <>
    <Container>
        <Wrapper>
          <Title>Edit Product :</Title>
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
              placeholder="Category"
              onChange={(e) => setCategory(e.target.value)}
            />
            <Input
              placeholder="Size"
              onChange={(e) => setSize(e.target.value)}
            />
            <Input
              placeholder="Color"
              onChange={(e) => setColor(e.target.value)}
            />
            <Input
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordanc with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button onClick={handleupdate}>Edit Product</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  )
}

export default Editproducts