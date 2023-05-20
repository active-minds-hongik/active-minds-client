import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import { useRecoilState } from 'recoil';
import { scoreState } from '../states';

const OnBoardingPage = () => {
  const navigate = useNavigate();
  const [currentScore, setCurrentScore] = useRecoilState(scoreState);

  useEffect(() => {
    setCurrentScore(0);
  }, []);

  return (
    <Container>
      <Header />
      <ServiceText>
        서비스 소개 서비스 소개 서비스 소개 서비스 소개서비스 소개 서비스 소개
        서비스 소개 서비스 소개 서비스 소개 서비스 소개서비스 소개 서비스 소개
        서비스 소개 서비스 소개 서비스 소개 서비스 소개서비스 소개 서비스 소개
        서비스 소개 서비스 소개 서비스 소개 서비스 소개서비스 소개 서비스 서비스
        서비스 소개 서비스 소개 서비스 소개 서비스 소개서비스 소개 소개 서비스
        서비스 소개 서비스 소개 서비스 소개 서비스 소개서비스 소개 소개 서비스
        서비스 소개 서비스 소개 서비스 소개 서비스 소개서비스 소개 소개 서비스
        서비스 소개 서비스 소개 서비스 소개 서비스 소개서비스 소개 소개서비스
        소개 소개서비스 소개
      </ServiceText>
      <GameContainer>
        <GameStartButton onClick={() => navigate('/face-game')}>
          표정-감정 매칭 게임
        </GameStartButton>
        <GameStartButton onClick={() => navigate('/text-game')}>
          텍스트-감정 매칭 게임
        </GameStartButton>
        <GameStartButton onClick={() => navigate('/myface-game')}>
          얼굴 입력-감정 매칭 게임
        </GameStartButton>
      </GameContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 450px;
  height: 100vh;
  background-color: whitesmoke;
`;

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const GameStartButton = styled.button`
  width: 250px;
  height: 80px;
  background-color: pink;
  margin: 10px;
  border-radius: 8px;
  font-size: 16px;
`;

const ServiceText = styled.div`
  margin: 40px;
`;

export default OnBoardingPage;
