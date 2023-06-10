import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../components/GamePage/Timer';
import { useRecoilState } from 'recoil';
import { scoreState, wrongQuestionState, questionState } from '../states';
import * as Style from '../css/GamePageStyle';
import axios from 'axios';
import { baseURL } from '../api/client';
import { IQuestion } from '../interfaces/index';
import { motion } from 'framer-motion';

const TextGamePage = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useRecoilState(questionState);
  const [currentScore, setCurrentScore] = useRecoilState(scoreState);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [wrongQuestion, setWrongQuestion] = useRecoilState(wrongQuestionState);

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

  const progressPercentage = ((currentQuestion) / questions.length) * 100; // 진행 상황 백분율 계산

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Style.FaceGameContainer>
        <Style.BackBtn onClick={() => navigate(-1)}>⬅</Style.BackBtn>
        <Style.GameName>텍스트로 감정 맞추기</Style.GameName>
        <Timer />
        <Style.Current>{currentQuestion + 1}번</Style.Current>
        <Style.QNum>{currentQuestion + 1}/10</Style.QNum>
        <Style.ProgressBarContainer>
          <Style.ProgressBarFiller
            style={{ width: `${progressPercentage}%` }}
          />
        </Style.ProgressBarContainer>
        <Style.Question>
          {questions.length > 0 && questions[currentQuestion].document}
        </Style.Question>
        <Style.ChoiceContainer>
          <Style.Choice onClick={handelAnswerButton} id="1">
            긍정
          </Style.Choice>
          <Style.Choice onClick={handelAnswerButton} id="0">
            부정
          </Style.Choice>
        </Style.ChoiceContainer>
      </Style.FaceGameContainer>
    </motion.div>
  );
};

export default TextGamePage;
