import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './components/Landing';
import CreateAccount from './components/CreateAccount';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage isLogin={false} />} />
        <Route path="create/account" element={<CreateAccount />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
