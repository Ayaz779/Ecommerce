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

const EditUsers = () => {

    let navigate = useNavigate();
    const [username3, setUsername] = useState("");
    const [email3, setEmail] = useState("");
    const [password3, setPassword] = useState("");
  
    const update = {
      username: username3,
      email: email3,
      password: password3,
    };
    const url = window.location.href;
    var id1 = (url.slice(url.indexOf("?")+1));
    const handleupdate = (e)=>{
        e.preventDefault();
        fetch(`http://localhost:4000/api/users/${id1}`, {
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
              placeholder="Username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
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

export default EditUsers