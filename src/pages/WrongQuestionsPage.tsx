import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/layout/Header';
import { useNavigate } from 'react-router-dom';
import { wrongQuestionState, questionState } from '../states';
import { useRecoilState } from 'recoil';
import { IQuestion, IWrongQuestion } from '../interfaces';

const WrongQuestionsPage = () => {
  const navigate = useNavigate();
  const [wrongQuestion] = useRecoilState<IWrongQuestion[]>(wrongQuestionState);
  // const [questions, setQuestions] = useRecoilState(questionState);

  // 나중엔 recoil에서 가져올 거임
  const questions = [
    { id: '1', imageURL: '사진1', label: '행복' },
    { id: '2', imageURL: '사진2', label: '슬픔' },
    { id: '3', imageURL: '사진3', label: '화남' },
    { id: '4', imageURL: '사진4', label: '무기력' },
  ];

  useEffect(() => {
    console.log(wrongQuestion);
  }, []);

  return (
    <Container>
      <Header />
      <Title>틀린 문제</Title>
      <ScrollContainer>
        {questions.map(({ id, imageURL, label }: IQuestion) => {
          const wrongQuestionItem = wrongQuestion.find(
            (item) => item.id === id,
          );
          if (!wrongQuestionItem) {
            // 맞은 문제는 포함 안 시킴
            return null;
          }
          return (
            <AnswerContainer key={id}>
              <Img />
              <TextContainer>
                <Answer>정답: {label}</Answer>
                <UserAnswer>
                  내가 고른 답: {wrongQuestionItem.myAnswer}
                </UserAnswer>
              </TextContainer>
            </AnswerContainer>
          );
        })}
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
  width: 80%;
  height: 200px;
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: space-around;
  margin: 10px 0px;
  background-color: beige;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Img = styled.img`
  width: 130px;
  height: 130px;
  background-color: #66c84e;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export default WrongQuestionsPage;
