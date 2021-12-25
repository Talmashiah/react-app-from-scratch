import {css} from 'styled-components';

export const Box = css`
  display: flex;
  ${({size = 100}) => size && css`
    width: ${size}px;
    height: ${size}px;
  `}
  ${({color = 'aqua'}) => color && css`
    background-color: ${color};
  `}
`;