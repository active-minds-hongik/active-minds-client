import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import fileupload from '../img/fileupload.png';
import { BsFillCameraFill } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { modalState, CapturedImgState, emotionState } from '../states';
import CameraModal from '../components/GamePage/CameraModal';
import { motion } from 'framer-motion';
import axios from 'axios';
import { baseURL } from '../api/client';
import { uploadImage } from '../api/upload';

const MyFaceGamePage = () => {
  const fileInput = React.useRef(null);
  const [imageSrc, setImageSrc] = useRecoilState<any>(CapturedImgState);
  const [isOpened, setIsOpened] = useRecoilState<boolean>(modalState);
  const [emotion, setEmotion] = useRecoilState<any>(emotionState);
  const navigate = useNavigate();
  const handleInputBtn = (e: React.MouseEvent<HTMLElement>) => {
    fileInput.current.click();
  };

  const [stream, setStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    requestCameraAccess();
  }, []);

  const requestCameraAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setStream(stream);
    } catch (error) {
      console.log('카메라 접근 권한을 허용해야 합니다.', error);
      alert('카메라 접근 권한을 허용해야 합니다.');
    }
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

  const handleResultBtn = async () => {
    if (imageSrc) {
      const formData = new FormData();
      formData.append('image', imageSrc);

      try {
        const result: any = await uploadImage(formData);

        if (
          result ==
          'Face could not be detected. Please confirm that the picture is a face photo or consider to set enforce_detection param to False.'
        ) {
          alert('얼굴이 잘 보이게 사진을 다시 촬영해주세요.');
          window.location.reload();
        } else {
          setEmotion(result);
          navigate('/result2');
        }
      } catch (error) {
        console.log('Error uploading image:', error);
      }
    } else {
      alert('사진을 첨부하세요.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MyFaceGameContainer isOpened={isOpened}>
        <BackBtn onClick={() => navigate(-1)}>⬅</BackBtn>
        <GameName>내 얼굴로 감정 맞추기</GameName>
        {imageSrc ? (
          <Img src={imageSrc} alt="uploadImg" onClick={handleInputBtn} />
        ) : (
          <Img src={fileupload} alt="uploadImg" onClick={handleInputBtn} />
        )}
        <CameraBtn
          onClick={() => {
            setIsOpened(!isOpened);
            setImageSrc(null);
          }}
        >
          <CameraIcon size={50} />
          사진 찍기
        </CameraBtn>
        <ResultBtn onClick={handleResultBtn}>결과 보기</ResultBtn>
        <input
          type="file"
          accept="image/*"
          ref={fileInput}
          onChange={handleChange}
          style={{ display: 'none' }}
        />
        <ModalContainer>{isOpened ? <CameraModal /> : null}</ModalContainer>
      </MyFaceGameContainer>
    </motion.div>
  );
};

const MyFaceGameContainer = styled.div<{ isOpened: boolean }>`
  width: 450px;
  height: 100vh;
  /* background-color: whitesmoke; */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: ${(props) =>
    props.isOpened ? 'rgba(76, 76, 76, 0.7)' : 'whitesmoke'};
`;

const BackBtn = styled.div`
  width: 50px;
  height: 50px;
  font-size: 30px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: auto;
  color: black;
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
  color: #4ab12f;
  font-weight: 700;
`;

const ResultBtn = styled.button`
  width: 80%;
  height: 70px;
  border-radius: 20px;
  font-size: 30px;
  position: absolute;
  bottom: 80px;
`;

const Img = styled.img`
  width: 80%;
  height: 350px;
  border-radius: 30px;
  margin-top: 50px;
  object-fit: cover;
  border: 2px solid;
  background-color: white;
`;

const CameraIcon = styled(BsFillCameraFill)`
  margin-right: 10px;
`;

const CameraBtn = styled.button`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 10px;
  width: 200px;
  margin-top: 20px;
`;

const ModalContainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100px;
`;

export default MyFaceGamePage;
