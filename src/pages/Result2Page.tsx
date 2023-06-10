import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import { useRecoilValue } from 'recoil';
import { emotionState } from '../states';

const Result2Page = () => {
  const navigate = useNavigate();
  const emotion = useRecoilValue<string>(emotionState);

  return (
    <Container>
      <Header />
      <GameName>감정 매칭 게임 결과</GameName>
      <Answer>AI가 예측한 감정은</Answer>
      <AnswerText>{emotion}</AnswerText>
      <Answer>입니다!</Answer>

      <BtnContainer>
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
const Answer = styled.div`
  font-size: 30px;
  margin-top: 10px;
  text-align: center;
`;

const AnswerText = styled(Answer)`
  color: blue;
  font-weight: 700;
`;

const GoHomeBtn = styled.button`
  width: 260px;
  height: 50px;
  margin: 10px;
  border-radius: 5px;
  font-size: 16px;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export default Result2Page;
