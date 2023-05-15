import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OnBoardingPage from './pages/OnBoardingPage';
import FaceGamePage from './pages/FaceGamePage';
import TextGamePage from './pages/TextGamePage';
import MyFaceGamePage from './pages/MyFaceGamePage';
import ResultPage from './pages/ResultPage';
import WrongQuestionsPage from './pages/WrongQuestionsPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<OnBoardingPage />} />
      <Route path="/face-game" element={<FaceGamePage />} />
      <Route path="/text-game" element={<TextGamePage />} />
      <Route path="/myface-game" element={<MyFaceGamePage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/wrongs" element={<WrongQuestionsPage />} />
    </Routes>
  );
};

export default Router;
