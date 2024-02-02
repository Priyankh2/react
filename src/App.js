import React from 'react';
import { Button, Flex } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Ragister from './pages/Ragister';
import { Toaster } from "react-hot-toast";
import axios from "axios";
function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/ragister' element={<Ragister />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;