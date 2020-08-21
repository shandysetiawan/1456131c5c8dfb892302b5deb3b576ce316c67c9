import { Button } from '../button';
import styled from 'styled-components';

export const ButtonGroup = styled.div`
display: flex;

> :first-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

> :last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
`;

export const ButtonGroupItem = styled(Button)`
background-color: #fff;
color: black;
border: 1px solid #f1f1f2;
outline: none;

:active, :focus {
  background-color: #424749;
  color: #fff;
}
`;