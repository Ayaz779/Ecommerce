import React, { useState,useEffect } from 'react'
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import axios from 'axios'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
    align-items:center;
    margin-top:50px;
`;

const Cards = () => {

    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
    const [news, setNews] = useState([]);
    const [payments, setPayments] = useState([]);

    useEffect(() => {
      const getProducts = async () => {
        try {
          const res = await axios.get("http://localhost:4000/api/products");
          setProducts(res.data);
        } catch (err) {}
      };
      getProducts();
    }, []);

    useEffect(() => {
        const getUsers = async () => {
          try {
            const res = await axios.get("http://localhost:4000/api/users");
            setUsers(res.data);
          } catch (err) {}
        };
        getUsers();
      }, []);

      useEffect(() => {
        const getNews = async () => {
          try {
            const res = await axios.get("http://localhost:4000/api/news");
            setNews(res.data);
          } catch (err) {}
        };
        getNews();
      }, []);

      useEffect(() => {
        const getPayments = async () => {
          try {
            const res = await axios.get("http://localhost:4000/api/payments");
            setPayments(res.data);
          } catch (err) {}
        };
        getPayments();
      }, []);


  return (
    <Container>

        <Card style={{ width: '18rem',backgroundColor:'yellow',marginTop:'20px' }}>
      <Card.Body>
        <Card.Title>Total Products:</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{products.length}</Card.Subtitle>
        <Card.Text>
          There are many products in E-commerce Website.The Amount of products will
          be given <b>( {products.length} )</b>, if you want to <b>( DELETE )</b> or <b>( EDIT )</b> any product just click on (Actions Icons)
          in the product table.
        </Card.Text>
        {/* <Card.Link href="#">Add Product</Card.Link>
        <Card.Link href="#">Edit Product</Card.Link> */}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem',backgroundColor:'lightblue',marginTop:'20px' }}>
      <Card.Body>
        <Card.Title>Total Users:</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{users.length}</Card.Subtitle>
        <Card.Text>
        There are many Users in E-commerce Website.The Amount of Users will
          be given <b>( {users.length} )</b>, if you want to <b>( DELETE )</b> or <b>( EDIT )</b> any product just click on (Actions Icons)
          in the user table.
        </Card.Text>
        {/* <Card.Link href="#">Edit Users</Card.Link>
        <Card.Link href="#">Delete Users</Card.Link> */}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem',backgroundColor:'red',marginTop:'20px' }}>
      <Card.Body>
        <Card.Title>Total NewsLetter:</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{news.length}</Card.Subtitle>
        <Card.Text>
        There are many NewsLetters in E-commerce Website.The Amount of news-letters will
          be given <b>( {news.length} )</b>, if you want to <b>( DELETE )</b> or <b>( EDIT )</b> any product just click on (Actions Icons)
          in the user table.
        </Card.Text>
        {/* <Card.Link href="#">Edit Users</Card.Link>
        <Card.Link href="#">Delete Users</Card.Link> */}
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem',backgroundColor:'lightgreen',marginTop:'20px' }}>
      <Card.Body>
        <Card.Title>Total Payments:</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{payments.length}</Card.Subtitle>
        <Card.Text>
        There are many NewsLetters in E-commerce Website.The Amount of news-letters will
          be given <b>( {payments.length} )</b>, if you want to <b>( DELETE )</b> or <b>( EDIT )</b> any product just click on (Actions Icons)
          in the user table.
        </Card.Text>
        {/* <Card.Link href="#">Edit Users</Card.Link>
        <Card.Link href="#">Delete Users</Card.Link> */}
      </Card.Body>
    </Card>

    </Container>
  )
}

export default Cards