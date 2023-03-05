import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import styled from "styled-components";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const H1 = styled.h1`
  margin: 50px 0px;
`;

const ProductList = () => {
  let navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/products");
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  const deleteProduct = (event) => {
    let Id = event.target.id;
    fetch(`http://localhost:4000/api/products/${Id}`, {
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

  const update = (event) => {
    navigate(`/edit-product?${event.target.id}`);
  };

  let a=1;

  return (
    <>
      <Container>
        <H1>Product List :</H1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Categories</th>
              <th>Size</th>
              <th>Color</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((items) => (
              <tr>
                <td>{a++}</td>
                <td>{items.title}</td>
                <td>{items.desc}</td>
                <td>{items.categories}</td>
                <td>{items.size}</td>
                <td>{items.color}</td>
                <td>{items.price}</td>
                <td>
                  <span
                    class="material-symbols-outlined"
                    style={{ cursor: "pointer" }}
                    id={items._id}
                    onClick={update}
                  >
                    edit
                  </span>
                  ,
                  <span
                    class="material-symbols-outlined"
                    style={{ cursor: "pointer" }}
                    id={items._id}
                    onClick={deleteProduct}
                  >
                    delete
                  </span>
                </td>
              </tr>
            ))}
            {/* <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan={2}>Larry the Bird</td>
        <td>@twitter</td>
      </tr> */}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default ProductList;
