import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import { useRecoilState } from 'recoil';
import { scoreState } from '../states';

const Result1Page = () => {
  const [currentScore, setCurrentScore] = useRecoilState(scoreState);
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <GameName>게임이름</GameName>
      <Score>{currentScore * 10}점</Score>
      <BtnContainer>
        <WrongQuestionsBtn onClick={() => navigate('/wrongs')}>
          틀린 문제 모아보기
        </WrongQuestionsBtn>
        <GoHomeBtn onClick={() => navigate('/')}>홈으로 돌아가기</GoHomeBtn>
      </BtnContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 450px;
  height: 100vh;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GameName = styled.div`
  font-size: 40px;
  margin-top: 30px;
`;
const Score = styled.div`
  font-size: 100px;
  margin-top: 10px;
`;
const GoHomeBtn = styled.button`
  width: 260px;
  height: 50px;
  margin: 10px;
  border-radius: 5px;
  font-size: 16px;
  background-color: pink;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
const WrongQuestionsBtn = styled(GoHomeBtn)``;

export default Result1Page;
