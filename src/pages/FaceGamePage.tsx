import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FaceGamePage = () => {
  const navigate = useNavigate();
  // const [questions, setQuestions] = useState('');
  const [currentScore, setCurrentScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      choice: [
        { text: '보기1-1', isCorrect: true },
        { text: '보기1-2', isCorrect: false },
        { text: '보기1-3', isCorrect: false },
        { text: '보기1-4', isCorrect: false },
      ],
    },
    {
      choice: [
        { text: '보기2-1', isCorrect: false },
        { text: '보기2-2', isCorrect: true },
        { text: '보기2-3', isCorrect: false },
        { text: '보기2-4', isCorrect: false },
      ],
    },
    {
      choice: [
        { text: '보기3-1', isCorrect: false },
        { text: '보기3-2', isCorrect: false },
        { text: '보기3-3', isCorrect: true },
        { text: '보기3-4', isCorrect: false },
      ],
    },
  ];

  const handelNextButton = (isCorrect: boolean) => {
    if (isCorrect) {
      alert('정답');
    } else alert('오답');

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      navigate('/result');
    }
  };

  return (
    <FaceGameContainer>
      <BackBtn onClick={() => navigate(-1)}>⬅</BackBtn>
      <Current>
        {currentQuestion + 1} / {questions.length}
      </Current>
      {/* 이미지 url 넣기 */}
      <Img />
      <ChoiceContainer>
        {questions[currentQuestion].choice.map((answer: any, index: number) => (
          <>
            <Choice
              key={index}
              onClick={() => handelNextButton(answer.isCorrect)}
            >
              {answer.text}
            </Choice>
          </>
        ))}
      </ChoiceContainer>
      {/* <NextQuestionBtn onClick={handelNextButton}>
        다음 문제로 이동
      </NextQuestionBtn> */}
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
const BackBtn = styled.button`
  width: 50px;
  height: 50px;
  font-size: 20px;
  margin-right: auto;
  background-color: transparent;
  &:hover{
    color: red;
  }
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
  background-color: pink;
  &:hover {
    background-color: green;
  }
`;

const Img = styled.div`
  background-color: pink;
  width: 300px;
  height: 300px;
  margin-top: 30px;
`;

const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
`;

const NextQuestionBtn = styled.button``;

export default FaceGamePage;
