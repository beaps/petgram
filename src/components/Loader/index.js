import React from 'react'
import { Svg, Circle, SvgContainer } from './styles'

export const Loader = props => (
  <SvgContainer>
    <Svg viewBox='0 0 100 20' {...props}>
      <Circle cx={50} cy={0} r={20} />
    </Svg>
  </SvgContainer>
)
