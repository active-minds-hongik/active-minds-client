import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ResultPage = () => {
  const navigate = useNavigate();

  return (
    <ResultContainer>
      <GameName>게임이름</GameName>
      <Score>점수</Score>
      <GoHomeBtn onClick={() => navigate('/')}>홈으로 돌아가기</GoHomeBtn>
      <WrongQuestionsBtn onClick={() => navigate('/wrongs')}>
        틀린 문제 모아보기
      </WrongQuestionsBtn>
      {/* 해당 게임 이름으로 이동 */}
      <ReGameBtn onClick={() => navigate('/')}>게임 다시하기</ReGameBtn>
    </ResultContainer>
  );
};

const ResultContainer = styled.div``;
const GameName = styled.div``;
const Score = styled.div``;
const GoHomeBtn = styled.button`
  width: 100px;
  height: 30px;
  margin: 10px;
  background-color: pink;
`;
const WrongQuestionsBtn = styled(GoHomeBtn)``;
const ReGameBtn = styled(GoHomeBtn)``;

export default ResultPage;
