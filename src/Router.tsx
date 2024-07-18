import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MenuPage from './pages/menu';
import LoginScreen from './pages/login';
import StartupList from './pages/startupList';
import SignUpScreen from './pages/signup';
import BookMark from './pages/bookMark';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/startupList" element={<StartupList />} />
        <Route path="/bookMark" element={<BookMark />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
