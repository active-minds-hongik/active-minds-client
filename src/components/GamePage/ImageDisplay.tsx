import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ImageDisplay = ({ pixels }: any) => {
  const canvasRef = useRef(null);
  const imageSize = 48;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const pixelValues = pixels.split(' ').map(Number);

    for (let i = 0; i < imageSize; i++) {
      for (let j = 0; j < imageSize; j++) {
        const pixelIndex = i * imageSize + j;
        const pixelValue = pixelValues[pixelIndex];
        context.fillStyle = `rgb(${pixelValue},${pixelValue},${pixelValue})`;
        context.fillRect(j, i, 1, 1);
      }
    }
  }, [pixels]);

  return (
    <div>
      <Picture ref={canvasRef} width={imageSize} height={imageSize} />
    </div>
  );
};

const Picture = styled.canvas`
  width: 150px;
  background-size: cover;
  border-radius: 20px;
`;

export default ImageDisplay;
