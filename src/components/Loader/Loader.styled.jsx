import styled from '@emotion/styled';
import { GiAbstract066 } from 'react-icons/gi';

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
`;

export const Spinner = styled(GiAbstract066)`
  width: 32px;
  height: 32px;
  color: #2196f3;

  animation: icon-spin 2s infinite linear;

  margin-top: 5px;

  @keyframes icon-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`;
