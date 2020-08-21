import React from 'react';
import styled from 'styled-components';
import { Button } from '../button';
import { ArrowCartIcon, ShopCartIcon } from '../icon';

const Container = styled(Button)`
background-color:#a23530;
display:flex;
padding: 10px;
border-radius: 5px;
justify-content: space-between;
color:#e2e4e4;
`;

const TextContainer = styled.div`
display:flex;
flex-direction:column;
`;

const IconContainer = styled.div`
display:flex;
fill: #fff;
`;

export const AddCartButton = (props) => (
	<Container fullWidth>
		<TextContainer>
			<span style={{ fontWeight: "bold" }}>1 Item(s) | Rp 130.000</span>
			<span style={{ fontSize: 12 }}>Termasuk ongkos kirim</span>
		</TextContainer>
		<IconContainer>
			<ShopCartIcon />
			<ArrowCartIcon />
		</IconContainer>
	</Container >
);