import styled, { keyframes } from 'styled-components'

const svgLoaderAnimation = keyframes`
  0 % {
    transform: rotateZ(0deg);
  }
  100 % {
    transform: rotateZ(360deg)
  }
`

const circleAnimation = keyframes`
  0% {
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dashoffset: 123;
  }
`

export const Svg = styled.svg`
  width: 100px;
  animation: 2s linear infinite ${svgLoaderAnimation};
`
export const Circle = styled.circle`
  max-width: 100px;
  fill: transparent;
  stroke: #36F7C8;
  stroke-width: 5;
  stroke-dasharray: 126;
  stroke-dashoffset: 125;
  stroke-linecap: round;
  transform-origin: 50% 50%;
  animation: 1.4s ease-in-out infinite both alternate ${circleAnimation};
`
export const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
`
