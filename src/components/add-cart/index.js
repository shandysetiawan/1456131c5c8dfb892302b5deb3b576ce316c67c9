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

export const AddCartButton = (props) => (
	<Container fullWidth>
		<p>
			<span >1 Item(s) | Rp 130.000</span>
			<span>Termasuk ongkos kirim</span>
		</p>
		<div>
			<ShopCartIcon />
			<ArrowCartIcon />
		</div>
	</Container >
);