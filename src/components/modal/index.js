import React from 'react';
import styled from 'styled-components';
import { CloseIcon } from '../icon';

const ModalContainer = styled.div`
background-color: rgba(0,0,0,0.4);
position: fixed;
left: 0;
top: 0;
z-index: 9;
height: 100%;
width: 100%;
overflow: auto; 
`;

const ModalContent = styled.div`
position: absolute;
width: 100%; 
height: 80vh;
bottom: 0;
background-color: #fff;
border-top-left-radius: 8px;
border-top-right-radius: 8px;
`;

export const Modal = (props) =>
	<ModalContainer>
		<ModalContent>
			<CloseIcon floatRight />
			{props.children}
		</ModalContent>
	</ModalContainer>;