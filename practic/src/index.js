import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Student from './Student';
import DetailPage from './DetailPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddStudent from './AddStudent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/animal" element={<Student />} />
            <Route path='/animal/:id' element={<DetailPage />} />
            <Route path='/AddStudent' element={<AddStudent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </>
);

