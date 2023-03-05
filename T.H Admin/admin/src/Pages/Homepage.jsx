import React from 'react'
import Cards from '../Components/Cards';
import Navbar from '../Components/Navbar';
import News from '../Components/News';
import Payment from '../Components/Payment';
import ProductList from '../Components/ProductList';
import UserList from '../Components/UserList';

const Homepage = () => {
  return (
    <>
    <Navbar/>
    <Cards/>
    <ProductList/>
    <UserList/>
    <News/>
    <Payment/>
    </>
  );
}

export default Homepage