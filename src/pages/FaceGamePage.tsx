import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Timer from '../components/GamePage/Timer';
import { useRecoilState } from 'recoil';
import { scoreState, wrongQuestionState, questionState } from '../states';
import { IQuestion } from '../interfaces';

const FaceGamePage = () => {
  const navigate = useNavigate();
  // const [questions, setQuestions] = useRecoilState(questionState);
  const [currentScore, setCurrentScore] = useRecoilState(scoreState);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [wrongQuestion, setWrongQuestion] = useRecoilState(wrongQuestionState);

  const questions = [
    { id: '1', imageURL: '사진1', label: '행복' },
    { id: '2', imageURL: '사진2', label: '슬픔' },
    { id: '3', imageURL: '사진3', label: '화남' },
    { id: '4', imageURL: '사진4', label: '무기력' },
  ];

  const handelAnswerButton = (e: React.MouseEvent<HTMLElement>) => {
    if (
      //정답이면
      (e.target as HTMLElement).id === questions[currentQuestion].label
    ) {
      setCurrentScore(currentScore + 1);
    } else {
      //오답이면
      setWrongQuestion([
        ...wrongQuestion,
        {
          id: questions[currentQuestion].id,
          myAnswer: (e.target as HTMLElement).id,
        },
      ]);
      console.log(wrongQuestion);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      navigate('/result1');
    }
  };

  return (
    <FaceGameContainer>
      <BackBtn onClick={() => navigate(-1)}>⬅</BackBtn>
      <GameName>표정으로 감정 맞추기</GameName>
      <Timer />
      <Current>{currentQuestion + 1}번 문제</Current>
      <Img src={questions[currentQuestion].imageURL} />
      <ChoiceContainer>
        <Choice onClick={handelAnswerButton} id="행복">
          행복
        </Choice>
        <Choice onClick={handelAnswerButton} id="슬픔">
          슬픔
        </Choice>
        <Choice onClick={handelAnswerButton} id="화남">
          화남
        </Choice>
        <Choice onClick={handelAnswerButton} id="무기력">
          무기력
        </Choice>
      </ChoiceContainer>
    </FaceGameContainer>
  );
};
const FaceGameContainer = styled.div`
  width: 450px;
  height: 100vh;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BackBtn = styled.div`
  width: 50px;
  height: 50px;
  font-size: 20px;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: red;
    cursor: pointer;
    transform: scale(1.4);
    transition: 0.3s;
  }
`;

const GameName = styled.div`
  font-size: 30px;
`;

const Current = styled.div`
  font-size: 30px;
`;
const Question = styled.div`
  font-size: 20px;
`;
const Choice = styled.button`
  width: 200px;
  height: 40px;
  margin: 10px;
  border-radius: 5px;
  font-size: 20px;
`;

const Img = styled.img`
  background-color: #66c84e;
  width: 300px;
  height: 300px;
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
`;

export default FaceGamePage;
