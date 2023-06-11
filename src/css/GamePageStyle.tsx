import styled from 'styled-components';


export const FaceGameContainer = styled.div`
  width: 450px;
  height: 100vh;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BackBtn = styled.div`
  width: 50px;
  height: 50px;
  font-size: 30px;
  margin-top: 10px;
  margin-left: 10px;
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

export const GameName = styled.div`
  font-size: 30px;
  color: #4ab12f;
  font-weight: 700;
`;

export const Current = styled.div`
  font-size: 30px;
`;
export const Question = styled.div`
  font-size: 20px;
  background-color: #f5f5db;
  width: 350px;
  min-height: 100px;
  border-radius: 20px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 20px;
`;
export const Choice = styled.button`
  width: 150px;
  height: 60px;
  margin: 10px;
  border-radius: 10px;
  font-size: 20px;
`;

export const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ProgressBarContainer = styled.div`
  width: 80%;
  height: 20px;
  background-color: #b4b8ba;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const ProgressBarFiller = styled.div`
  height: 100%;
  border-radius: 10px;
  background-color: #66c84e;
  transition: width 0.2s ease-in-out;
`;

export const QNum = styled.div`
  font-size: 23px;
  margin-left: auto;
  margin-right: 50px;
  font-weight: 600;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 450px;
`;
