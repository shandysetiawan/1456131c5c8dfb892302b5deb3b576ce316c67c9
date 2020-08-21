import styled, { css } from 'styled-components';

export const Container = styled.div`
${props => props.main
        ? css`
    display: flex; 
    flex-direction: column;
    
    > div {
        margin-bottom: 16px;

        :last-child {
            margin-bottom: 0;
        }
    }
    `
        : css`padding: 0 16px;
        
        :last-child {
            padding-bottom 8px;
        }
        `}
`;
