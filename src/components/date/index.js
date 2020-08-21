import styled from "styled-components";

export const DateWrapper = styled.div`
    display: flex;
    overflow-x: scroll;
`;

export const Date = styled.div`
display: flex;
flex-direction: column; 
align-items: center;
margin-right: 8px; 
padding: 10px;
font-size: 12px;
color: ${props => props.disabled && "#e2e4e4"};

:focus {
    border-radius: 50%;
    background-color: #424749;
    color: #fff;
}
`;
