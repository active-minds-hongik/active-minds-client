import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import { useRecoilState } from 'recoil';
import { scoreState, wrongQuestionState } from '../states';
import { RxFace } from 'react-icons/rx';
import { GoTextSize } from 'react-icons/go';
import { BsFillCameraFill } from 'react-icons/bs';

const OnBoardingPage = () => {
  const navigate = useNavigate();
  const [, setCurrentScore] = useRecoilState(scoreState);
  const [, setWrongQuestion] = useRecoilState(wrongQuestionState);

  useEffect(() => {
    setCurrentScore(0);
    setWrongQuestion([]);
  }, []);

  return (
    <Container>
      <Header />
      <Title>Active Minds</Title>
      <ServiceText>
        이 게임을 통해 표정을 인식하고 해석하는 능력과 언어 능력을 발전시켜
        일상생활에서 더욱 원활하게 의사소통할 수 있습니다.
      </ServiceText>
      <GameContainer>
        <GameStartButton onClick={() => navigate('/face-game')}>
          <RxFace size={40} />
          &nbsp;&nbsp;표정으로 감정 맞추기
        </GameStartButton>
        <GameStartButton onClick={() => navigate('/text-game')}>
          <GoTextSize size={40} />
          &nbsp;&nbsp;문장 읽고 감정 맞추기
        </GameStartButton>
        <GameStartButton onClick={() => navigate('/myface-game')}>
          <BsFillCameraFill size={40} />
          &nbsp;&nbsp;내 얼굴로 감정 맞추기
        </GameStartButton>
      </GameContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 450px;
  height: 100vh;
  background-color: white;
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
  background-color: #66c84e;
  margin: 10px;
  border-radius: 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ServiceText = styled.div`
  margin: 40px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-top: 30px;
`;

export default OnBoardingPage;
