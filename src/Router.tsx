import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuPage from './pages/menu';
import LoginScreen from './pages/login';
import StartupList from './pages/startupList';
import SignUpScreen from './pages/signup';
import BookMark from 'pages/bookMark';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/startupList" element={<StartupList />} />
        <Route path="/bookMark" element={<BookMark />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
