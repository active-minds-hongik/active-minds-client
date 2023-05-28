import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../components/GamePage/Timer';
import { useRecoilState } from 'recoil';
import { scoreState, wrongQuestionState, questionState } from '../states';
import * as Style from '../css/GamePageStyle';
import axios from 'axios';
import { baseURL } from '../api/client';
import { IQuestion } from '../interfaces/index';

const TextGamePage = () => {
  const navigate = useNavigate();
  // const [questions, setQuestions] = useRecoilState(questionState);
  const [currentScore, setCurrentScore] = useRecoilState(scoreState);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [wrongQuestion, setWrongQuestion] = useRecoilState(wrongQuestionState);

  const questions = [
    { id: '1', document: '문제1', label: 'positive' },
    { id: '2', document: '문제2', label: 'negative' },
    { id: '3', document: '문제3', label: 'positive' },
    { id: '4', document: '문제4', label: 'negative' },
  ];

  useEffect(() => {
    getTextAPI();
  }, []);

  const getTextAPI = async () => {
    await axios
      .get(`${baseURL}/text`, {
        headers: {
          'Content-Type': `application/json`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
    <Style.FaceGameContainer>
      <Style.BackBtn onClick={() => navigate(-1)}>⬅</Style.BackBtn>
      <Style.GameName>텍스트로 감정 맞추기</Style.GameName>
      <Timer />
      <Style.Current>{currentQuestion + 1}번 문제</Style.Current>
        <Style.Question>{questions[currentQuestion].document}</Style.Question>
      <Style.ChoiceContainer>
        <Style.Choice onClick={handelAnswerButton} id="positive">
          긍정
        </Style.Choice>
        <Style.Choice onClick={handelAnswerButton} id="negative">
          부정
        </Style.Choice>
      </Style.ChoiceContainer>
    </Style.FaceGameContainer>
  );
};

export default TextGamePage;
