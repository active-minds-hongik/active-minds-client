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
  font-size: 20px;
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
`;

export const Current = styled.div`
  font-size: 30px;
`;
export const Question = styled.div`
  font-size: 20px;
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