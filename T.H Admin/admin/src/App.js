import './App.css';
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage';
import Addproducts from './Pages/Addproducts';
import Editproducts from './Pages/Editproducts';
import EditUsers from './Pages/EditUsers';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/Home' element={<Homepage/>}></Route>
        <Route path='/product' element={<Addproducts/>}></Route>
        <Route path='/edit-product' element={<Editproducts/>}></Route>
        <Route path='/edit-user' element={<EditUsers/>}></Route>
    </Routes>
    </>
  );
}

export default App;
