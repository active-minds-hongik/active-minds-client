import React from 'react';
import styled from 'styled-components';
import Header from '../components/layout/Header';
import { useNavigate } from 'react-router-dom';

const WrongQuestionsPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <Title>틀린 문제</Title>
      <ScrollContainer>
        <AnswerContainer>
          <Img />
          <TextContainer>
            <Answer>정답: 해피</Answer>
            <UserAnswer>내가 고른 답: 새드</UserAnswer>
          </TextContainer>
        </AnswerContainer>
        <AnswerContainer>
          <Img />
          <TextContainer>
            <Answer>정답: 해피</Answer>
            <UserAnswer>내가 고른 답: 새드</UserAnswer>
          </TextContainer>
        </AnswerContainer>
        <AnswerContainer>
          <Img />
          <TextContainer>
            <Answer>정답: 해피</Answer>
            <UserAnswer>내가 고른 답: 새드</UserAnswer>
          </TextContainer>
        </AnswerContainer>
        <AnswerContainer>
          <Img />
          <TextContainer>
            <Answer>정답: 해피</Answer>
            <UserAnswer>내가 고른 답: 새드</UserAnswer>
          </TextContainer>
        </AnswerContainer>
      </ScrollContainer>
      <GoHomeBtn onClick={() => navigate('/')}>홈으로 돌아가기</GoHomeBtn>
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
  justify-content: center;
`;

const Title = styled.div`
  font-size: 40px;
  margin-top: 30px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const Answer = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

const UserAnswer = styled.div`
  font-size: 20px;
`;
const GoHomeBtn = styled.button`
  width: 260px;
  height: 50px;
  margin: 20px;
  border-radius: 5px;
  font-size: 16px;
  background-color: pink;
`;

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  height: 70vh;
  width: 100%;
`;

const AnswerContainer = styled.div`
  border: 1px solid;
  width: 80%;
  height: 200px;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-around;
  margin: 10px 0px;
`;

const Img = styled.div`
  width: 130px;
  height: 130px;
  background-color: pink;
`;

export default WrongQuestionsPage;
