import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';

const ResultPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <GameName>게임이름</GameName>
      <Score>점수</Score>
      <BtnContainer>
        <WrongQuestionsBtn onClick={() => navigate('/wrongs')}>
          틀린 문제 모아보기
        </WrongQuestionsBtn>
        {/* 해당 게임 이름으로 이동 */}
        <ReGameBtn onClick={() => navigate('/')}>게임 다시하기</ReGameBtn>
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
const ReGameBtn = styled(GoHomeBtn)``;

export default ResultPage;
