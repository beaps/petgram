import styled from 'styled-components'

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
