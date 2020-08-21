import styled from 'styled-components';

export const StickyBottomContainer = styled.div`
    display: ${props => props.show ? "block" : "none"};
    position: sticky;
    bottom: 0;
    height: 50px;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0),#ffffff);
    z-index: 9;
`;