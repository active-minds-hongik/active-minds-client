import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';


const OnBoardingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div>OnBoardingPage</div>
      <div>서비스 소개</div>
      <GameStartButton onClick={() => navigate('/face-game')}>
        표정-감정 매칭 게임
      </GameStartButton>
      <GameStartButton onClick={() => navigate('/text-game')}>
        텍스트-감정 매칭 게임
      </GameStartButton>
      <GameStartButton onClick={() => navigate('/myface-game')}>
        얼굴 입력-감정 매칭 게임
      </GameStartButton>
    </div>
  );
};

const GameStartButton = styled.button`
  width: 300px;
  height: 100px;
  background-color: pink;
  margin: 30px;
`;

export default OnBoardingPage;
