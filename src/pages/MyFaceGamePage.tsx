import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import fileupload from '../img/fileupload.png';

const MyFaceGamePage = () => {
  const fileInput = React.useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const navigate = useNavigate();
  const handleInputBtn = (e: React.MouseEvent<HTMLElement>) => {
    fileInput.current.click();
  };
  const handleChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result || null); // 파일의 컨텐츠
        resolve();
      };
    });
  };

  const handleResultBtn = () => {
    //api 연결
    if (imageSrc) navigate('/result2'); // 사진 입력, 전송되었을 때만
    else alert('사진을 첨부하세요.');
  };

  return (
    <MyFaceGameContainer>
      <BackBtn onClick={() => navigate(-1)}>⬅</BackBtn>
      <GameName>얼굴 입력-감정 매칭 게임</GameName>
      {imageSrc ? (
        <Img src={imageSrc} alt="uploadImg" onClick={handleInputBtn} />
      ) : (
        <Img src={fileupload} alt="uploadImg" onClick={handleInputBtn} />
      )}
      <ResultBtn onClick={handleResultBtn}>결과 보기</ResultBtn>
      <input
        type="file"
        accept="image/*"
        ref={fileInput}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </MyFaceGameContainer>
  );
};

const MyFaceGameContainer = styled.div`
  width: 450px;
  height: 100vh;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const BackBtn = styled.button`
  width: 50px;
  height: 50px;
  font-size: 20px;
  margin-right: auto;
  background-color: transparent;
  color: black;
  &:hover {
    color: red;
  }
`;

const GameName = styled.div`
  font-size: 30px;
`;

const ResultBtn = styled.button`
  width: 80%;
  height: 70px;
  background-color: pink;
  border-radius: 20px;
  font-size: 30px;
  position: absolute;
  bottom: 50px;
`;

const Img = styled.img`
  width: 80%;
  height: 350px;
  border-radius: 30px;
  margin-top: 50px;
  object-fit: cover;
  border: 2px solid;
`;

export default MyFaceGamePage;
