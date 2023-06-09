import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/layout/Header';
import { useNavigate } from 'react-router-dom';
import { wrongQuestionState, questionState } from '../states';
import { useRecoilState } from 'recoil';
import { IQuestion, IWrongQuestion } from '../interfaces';
import ImageDisplay from '../components/GamePage/ImageDisplay';

const WrongQuestionsPage = () => {
  const navigate = useNavigate();
  const [wrongQuestion] = useRecoilState<IWrongQuestion[]>(wrongQuestionState);
  const [questions, setQuestions] = useRecoilState(questionState);

  useEffect(() => {
    console.log(wrongQuestion);
  }, []);

  return (
    <Container>
      <Header />
      <Title>틀린 문제</Title>
      <ScrollContainer>
        {questions.map(
          ({ id, pixels, document, label, emotionNum }: IQuestion) => {
            const wrongQuestionItem = wrongQuestion.find(
              (item) => item.id === id,
            );
            if (!wrongQuestionItem) {
              // 맞은 문제는 포함 안 시킴
              return null;
            }

            let emotionText;
            switch (emotionNum) {
              case 0:
                emotionText = '화남';
                break;
              case 1:
                emotionText = '역겨움';
                break;
              case 2:
                emotionText = '두려움';
                break;
              case 3:
                emotionText = '기쁨';
                break;
              case 4:
                emotionText = '슬픔';
                break;
              case 5:
                emotionText = '놀람';
                break;
              case 6:
                emotionText = '중립';
                break;
              default:
                emotionText = '';
                break;
            }

            let userAnswerText;
            switch (wrongQuestionItem.myAnswer) {
              case '0':
                userAnswerText = '화남';
                break;
              case '1':
                userAnswerText = '역겨움';
                break;
              case '2':
                userAnswerText = '두려움';
                break;
              case '3':
                userAnswerText = '기쁨';
                break;
              case '4':
                userAnswerText = '슬픔';
                break;
              case '5':
                userAnswerText = '놀람';
                break;
              case '6':
                userAnswerText = '중립';
                break;
              default:
                userAnswerText = '';
                break;
            }

            return (
              <AnswerContainer key={id}>
                {pixels ? (
                  <>
                    <ImageContainer>
                      <ImageDisplay pixels={pixels} />
                    </ImageContainer>
                    <TextContainer>
                      <Answer>정답: {emotionText}</Answer>
                      <UserAnswer>내가 고른 답: {userAnswerText}</UserAnswer>
                    </TextContainer>
                  </>
                ) : (
                  <Column>
                    <QuestionText>{document}</QuestionText>
                    <TextContainer>
                      <Answer>정답: {label === '0' ? '부정' : '긍정'}</Answer>
                      <UserAnswer>
                        내가 고른 답:{' '}
                        {wrongQuestionItem.myAnswer === '0' ? '부정' : '긍정'}
                      </UserAnswer>
                    </TextContainer>
                  </Column>
                )}
              </AnswerContainer>
            );
          },
        )}
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
`;

const Answer = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
  color: #0287d3;
  font-weight: 600;
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
  width: 90%;
  height: 200px;
  display: flex;
  align-items: center;
  margin: 10px 0px;
  background-color: beige;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 20px;
`;

const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  background-color: #66c84e;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-right: 20px;
`;

const QuestionText = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  width: 360px;
  background-color: #66c84e;
  border-radius: 8px;
  padding: 10px;
  font-weight: 700;
  word-break: keep-all;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export default WrongQuestionsPage;
