import React from 'react';
import './style.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './Component/Login.jsx';
import VendorPage from './Component/VendorPage.jsx';
import UserPage from './Component/UserPage.jsx';
import LoginFailed from './Component/LoginFailed.jsx';
import Update from './Component/Update.jsx';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/vendor-page" element={<VendorPage />} />
          <Route exact path="/user-page" element={<UserPage />} />
          <Route exact path="/login-failed" element={<LoginFailed />} />
          <Route exact path="/update-product" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
