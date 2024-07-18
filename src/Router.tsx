import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuPage from './pages/menu';
import LoginScreen from './pages/login';
import StartupList from './pages/startupList';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/startupList" element={<StartupList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
