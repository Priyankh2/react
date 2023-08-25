import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header';
import Content from './Content';
import UseState from './UseState';
import CardView from './CardView';
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './Loading';
import Calculator from './Calculator';
import Api2 from './Api2';
import Detailpage from './Detailpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
     {/* <div className="container"> 
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Loading />} />
            <Route path="/content" element={<Content />} />
            <Route path="/CardView" element={<CardView />} />
          </Route>
        </Routes>
      </BrowserRouter> 
     </div>  */}
    {/* <Display/>  */}
    {/* <Calculator/> */}
    
    {/* <BrowserRouter>
    <Routes>
      <Route index element={<Api2/>}/>
        <Route path='animal/:id' element={<Detailpage/>}/>
    </Routes>
    </BrowserRouter> */}
    {/* <UseState/> */}
    {/* <CardView/> */}
    {/* <Header/> */}
    {/* <Layout/> */}
  </>
);


