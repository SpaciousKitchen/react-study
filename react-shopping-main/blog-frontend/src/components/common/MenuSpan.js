import styled, { css } from 'styled-components';

import palette from '../../lib/styles/palette';
const spanStyle = css`
  font-size: 16px;
  font-weight: bold;

  &:hover {
    color: ${palette.pink[0]};
  }
`;

export const SpanStyle = styled.span`
  ${spanStyle}
`;
