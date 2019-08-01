import styled from 'styled-components'

export const Button = styled.button`
  background: #FFEB3B;;
  border-radius: 3px;
  color: #464646;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled] {
    opacity: 0.3;
  }
`
