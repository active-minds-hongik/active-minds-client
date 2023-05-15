import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FaceGamePage = () => {
  const navigate = useNavigate();
  // const [questions, setQuestions] = useState('');
  const [currentScore, setCurrentScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const questions = [
    {
      question: '1번 문제',
      choice: [
        { text: '보기1-1', isCorrect: true },
        { text: '보기1-2', isCorrect: false },
        { text: '보기1-3', isCorrect: false },
        { text: '보기1-4', isCorrect: false },
      ],
    },
    {
      question: '2번 문제',
      choice: [
        { text: '보기2-1', isCorrect: false },
        { text: '보기2-2', isCorrect: true },
        { text: '보기2-3', isCorrect: false },
        { text: '보기2-4', isCorrect: false },
      ],
    },
    {
      question: '3번 문제',
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
      <BackBtn onClick={() => navigate(-1)}>⬅️</BackBtn>
      <Current>
        {currentQuestion} / {questions.length}
      </Current>
      <Question>{questions[currentQuestion].question}</Question>
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
      {/* <NextQuestionBtn onClick={handelNextButton}>
        다음 문제로 이동
      </NextQuestionBtn> */}
    </FaceGameContainer>
  );
};
const FaceGameContainer = styled.div``;
const BackBtn = styled.button``;
const Current = styled.div``;
const Question = styled.div``;
const Choice = styled.button`
  margin-right: 15px;
  background-color: pink;
  &:hover {
    background-color: green;
  }
`;
const NextQuestionBtn = styled.button``;

export default FaceGamePage;
