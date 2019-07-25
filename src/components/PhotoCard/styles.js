import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Article = styled.article`
  min-height: 200px;
`

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Button = styled.button`
  min-width: 50%;
  min-height: 30px;
  margin-bottom: 1rem;
  position: relative;
`

export const SvgContainer = styled.span`
  display: inline-block;
  padding: 0.5rem;
  background: white;
  border: 2px solid #F9D90D;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  position: absolute;
  top: -19px;
  left: 17px;
  & svg {
    color: #6FEE90;
    position: absolute;
    left: 4px;
    top: 5px;
  }
`

export const LikesContainer = styled.span`
  position: absolute;
  top: 3px;
  left: 55px;
  text-align: left;
  color: #313131;
`
