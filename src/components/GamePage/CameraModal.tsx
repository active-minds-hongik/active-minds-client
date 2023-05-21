import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import styled from 'styled-components';
import { FaCamera } from 'react-icons/fa';
import { BiReset } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';
import { MdSaveAlt } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import { CapturedImgState, modalState } from '../../states';

function CameraModal() {
  // const [img, setImg] = useState(null);
  const [img, setImg] = useRecoilState(CapturedImgState);
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 400,
    height: 600,
    facingMode: 'user',
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
    console.log(imageSrc);
  }, [webcamRef]);

  const [isOpened, setIsOpened] = useRecoilState(modalState);

  const handleSave = () => {
    setIsOpened(false);
    // 화면에 띄우고 서버한테 보내기
  };

  return (
    <PhotoboothContainer>
      <HeaderBox>
        <CloseBtn
          onClick={() => {
            setIsOpened(false);
          }}
        >
          <GrFormClose />
        </CloseBtn>
      </HeaderBox>
      {img === null ? (
        <PhotoBooth>
          <Camera
            audio={false}
            mirrored={true}
            width={400}
            height={800}
            ref={webcamRef}
            screenshotFormat="image/png"
            videoConstraints={videoConstraints}
          />
          <CamBtn onClick={capture}>
            <FaCamera />
          </CamBtn>
        </PhotoBooth>
      ) : (
        <PhotoBooth>
          <Img src={img} alt="screenshot" />
          <BtnContainer>
            <ReBtn onClick={() => setImg(null)}>
              <BiReset />
            </ReBtn>
            <SaveBtn onClick={handleSave}>
              <MdSaveAlt />
            </SaveBtn>
          </BtnContainer>
        </PhotoBooth>
      )}
    </PhotoboothContainer>
  );
}

const PhotoboothContainer = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 10px;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
  background-color: white;
`;

const HeaderBox = styled.div`
  height: 28px;
  background: linear-gradient(to bottom, #d4d4d4, #a8a8a8);
  position: relative;
  display: flex;
  border-radius: 10px 10px 0px 0px;
`;

const CloseBtn = styled.div`
  background-color: #f04b4f;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  left: 15px;
  &:hover {
    cursor: pointer;
    background-color: black;
  }
`;

const Camera = styled(Webcam)<any>`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 572px;
  border-radius: 0px 0px 10px 10px;
`;

const CamBtn = styled.button`
  position: absolute;
  bottom: 20px;
  width: 70px;
  height: 70px;
  font-size: 35px;
  background-color: #a07d7d;
  color: white;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: gray;
    background-color: white;
  }
  &:active {
    background-color: red;
  }
`;

const Img = styled.img`
  border-radius: 0px 0px 10px 10px;
`;

const ReBtn = styled.button`
  position: absolute;
  bottom: 20px;
  right: 30px;
  width: 70px;
  height: 70px;
  font-size: 35px;
  background-color: #a07d7d;
  color: white;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: gray;
    background-color: white;
  }
  &:active {
    background-color: red;
  }
`;
const SaveBtn = styled.button`
  position: absolute;
  bottom: 20px;
  right: 160px;
  width: 70px;
  height: 70px;
  font-size: 35px;
  background-color: #a07d7d;
  color: white;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: gray;
    background-color: white;
  }
  &:active {
    background-color: red;
  }
`;

const PhotoBooth = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const BtnContainer = styled.div`
  position: relative;
`;

export default CameraModal;
