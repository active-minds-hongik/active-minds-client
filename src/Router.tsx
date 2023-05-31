import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OnBoardingPage from './pages/OnBoardingPage';
import FaceGamePage from './pages/FaceGamePage';
import TextGamePage from './pages/TextGamePage';
import MyFaceGamePage from './pages/MyFaceGamePage';
import Result1Page from './pages/Result1Page';
import Result2Page from './pages/Result2Page';
import WrongQuestionsPage from './pages/WrongQuestionsPage';
import { AnimatePresence } from 'framer-motion';

const Router = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<OnBoardingPage />} />
        <Route path="/face-game" element={<FaceGamePage />} />
        <Route path="/text-game" element={<TextGamePage />} />
        <Route path="/myface-game" element={<MyFaceGamePage />} />
        <Route path="/result1" element={<Result1Page />} />
        <Route path="/result2" element={<Result2Page />} />
        <Route path="/wrongs" element={<WrongQuestionsPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Router;
