import React from 'react';
import styled from 'styled-components';
import { PlaceIcon } from '../icon';

const Container = styled.div`
position: relative;
`;

const InputBox = styled.input`
border: 1px solid #f1f1f2;
border-radius: 4px;
padding: 8px 12px;
margin: 0 4px;
width: 100%;
box-sizing: border-box;
padding-left: 32px;
`;


export const Input = (props) => (
    <Container>
        <PlaceIcon active style={{ position: "absolute", top: "4px", left: "8px" }} />
        <InputBox {...props} />
    </Container>
);