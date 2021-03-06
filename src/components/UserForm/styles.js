import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 0;
  margin-left: 1rem;
  margin-right: 1rem;
`
export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: 0.3;
  }
`

export const Title = styled.h2`
  color: #404040;
  font-size: 1rem;
  font-weight: 500;
  padding: 8px 0;
`

export const Error = styled.div`
  color: red;
  font-size: 14px;
  margin-left: 1rem;
  margin-right: 1rem;
`
