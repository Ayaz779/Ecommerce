import React, { useState,useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";

const Container = styled.div`
width: 100%;
height: 60vh;
display: flex;
flex-direction: column;
align-items:center;
justify-content:space-evenly;
`;
const H1 = styled.h1`
    margin-bottom: 10px;
`;

const UserList = () => {

  let navigate = useNavigate();

    const [users, setUsers] = useState([]);

    useEffect(() => {
      const getUsers = async () => {
        try {
          const res = await axios.get("http://localhost:4000/api/users");
          setUsers(res.data);
        } catch (err) {}
      };
      getUsers();
    }, []);

    const deleteUser = (event)=>{
      let Id = event.target.id;
      fetch(`http://localhost:4000/api/users/${Id}`, {
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


    const updateUser = (event)=>{
      navigate(`/edit-user?${event.target.id}`);
    }

    let b=1;
  return (
    <>
    <Container>
    <H1>User List :</H1>
    <Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>#</th>
        <th>User Name</th>
        <th>Email</th>
        <th>Password</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    {users.map((items) => (
              <tr>
                <td>{b++}</td>
                <td>{items.username}</td>
                <td>{items.email}</td>
                <td>{items.password}</td>
                <td>
                  <span class="material-symbols-outlined" style={{cursor:"pointer"}} id={items._id} onClick={updateUser}>edit</span>,
                  <span class="material-symbols-outlined" style={{cursor:"pointer"}} id={items._id} onClick={deleteUser}>delete</span>
                </td>
              </tr>
            ))}
    </tbody>
  </Table>
  </Container>
  </>
  )
}

export default UserList