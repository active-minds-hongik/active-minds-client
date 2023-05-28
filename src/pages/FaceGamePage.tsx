import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../components/GamePage/Timer';
import { useRecoilState } from 'recoil';
import { scoreState, wrongQuestionState, questionState } from '../states';
import * as Style from '../css/GamePageStyle';
import { baseURL } from '../api/client';
import axios from 'axios';

const FaceGamePage = () => {
  const navigate = useNavigate();
  // const [questions, setQuestions] = useRecoilState(questionState);
  const [currentScore, setCurrentScore] = useRecoilState(scoreState);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [wrongQuestion, setWrongQuestion] = useRecoilState(wrongQuestionState);

  useEffect(() => {
    getFaceAPI();
  }, []);

  const getFaceAPI = async () => {
    await axios
      .get(`${baseURL}/emotion`, {
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
    <Style.FaceGameContainer>
      <Style.BackBtn onClick={() => navigate(-1)}>⬅</Style.BackBtn>
      <Style.GameName>표정으로 감정 맞추기</Style.GameName>
      <Timer />
      <Style.Current>{currentQuestion + 1}번 문제</Style.Current>
      <Style.Img src={questions[currentQuestion].imageURL} />
      <Style.ChoiceContainer>
        <Style.Choice onClick={handelAnswerButton} id="행복">
          행복
        </Style.Choice>
        <Style.Choice onClick={handelAnswerButton} id="슬픔">
          슬픔
        </Style.Choice>
        <Style.Choice onClick={handelAnswerButton} id="화남">
          화남
        </Style.Choice>
        <Style.Choice onClick={handelAnswerButton} id="무기력">
          무기력
        </Style.Choice>
      </Style.ChoiceContainer>
    </Style.FaceGameContainer>
  );
};

export default FaceGamePage;
