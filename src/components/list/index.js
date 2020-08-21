import React from 'react';
import styled from 'styled-components';

export const ListContainer = styled.div`
display: flex;
flex-direction: column;
`;

const ListContent = styled.div`
padding: 12px 0;
border-bottom: 1px solid #f1f1f2;

:first-child {
  margin-top: 12px;
}
`;

export const ListItem = (props) => (
  <ListContent>
    <h3>{props.title}</h3>
    {props.children}
  </ListContent>
);