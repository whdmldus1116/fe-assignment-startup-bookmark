import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from './pages/login';
import SignUpScreen from './pages/signup';
import StartupScreen from './pages/startupList';
import BookmarkScreen from './pages/bookMark';
import MenuScreen from './pages/menu';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/menu" element={<MenuScreen />} />
        <Route path="/startupList" element={<StartupScreen />} />
        <Route path="/bookMark" element={<BookmarkScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
