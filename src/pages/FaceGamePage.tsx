import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../components/GamePage/Timer';
import { useRecoilState } from 'recoil';
import { scoreState, wrongQuestionState, questionState } from '../states';
import * as Style from '../css/GamePageStyle';
import { baseURL } from '../api/client';
import axios from 'axios';
import { motion } from 'framer-motion';
import ImageDisplay from '../components/GamePage/ImageDisplay';

const FaceGamePage = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useRecoilState(questionState);
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
        console.log(response.data.data);
        setQuestions(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handelAnswerButton = (e: React.MouseEvent<HTMLElement>) => {
    if (
      //정답이면
      Number((e.target as HTMLElement).id) === questions[currentQuestion].emotionNum
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Style.FaceGameContainer>
        <Style.BackBtn onClick={() => navigate(-1)}>⬅</Style.BackBtn>
        <Style.GameName>표정으로 감정 맞추기</Style.GameName>
        <Timer />
        <Style.Current>{currentQuestion + 1}번 문제</Style.Current>
        {questions.length > 0 && (
          <ImageDisplay pixels={questions[currentQuestion].pixels} />
        )}
        <Style.ChoiceContainer>
          <Style.Choice onClick={handelAnswerButton} id="0">
            화남
          </Style.Choice>
          <Style.Choice onClick={handelAnswerButton} id="1">
            역겨움
          </Style.Choice>
          <Style.Choice onClick={handelAnswerButton} id="2">
            두려움
          </Style.Choice>
          <Style.Choice onClick={handelAnswerButton} id="3">
            기쁨
          </Style.Choice>
          <Style.Choice onClick={handelAnswerButton} id="4">
            슬픔
          </Style.Choice>
          <Style.Choice onClick={handelAnswerButton} id="5">
            놀람
          </Style.Choice>
          <Style.Choice onClick={handelAnswerButton} id="6">
            중립
          </Style.Choice>
        </Style.ChoiceContainer>
      </Style.FaceGameContainer>
    </motion.div>
  );
};

export default FaceGamePage;
