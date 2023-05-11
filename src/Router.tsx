import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OnBoardingPage from './pages/OnBoardingPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<OnBoardingPage />} />
    </Routes>
  );
};

export default Router;
