import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const H1 = styled.h1`
  margin-bottom: 10px;
`;
const Payment = () => {

    const [news, setnews] = useState([]);
    console.log(news);
    useEffect(() => {
      const getnews = async () => {
        try {
          const res = await axios.get("http://localhost:4000/api/payments");
          setnews(res.data);
        } catch (err) {}
      };
      getnews();
    }, []);
  
    const delete_news = (event) => {
      let Id = event.target.id;
      fetch(`http://localhost:4000/api/payments/${Id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      window.location.reload();
    };
  
    let b = 1;

  return (
    <>
    <Container>
    <H1>Payments List :</H1>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>UserName</th>
          <th>Address</th>
          <th>Contact No.</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {news.map((items) => (
          <tr>
            <td>{b++}</td>
            <td>{items._id}</td>
            <td>{items.username}</td>
            <td>{items.address}</td>
            <td>{items.contact}</td>
            <td><span
                class="material-symbols-outlined"
                style={{ cursor: "pointer" }}
                id={items._id}
                onClick={delete_news}
              >
                delete
              </span></td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Container>
</>
  );
}

export default Payment