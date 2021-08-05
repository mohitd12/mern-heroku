import React from 'react';
import styled from 'styled-components';

function Button({ type = 'submit', children, color = '#fff' }) {
	return (
		<div className="button">
			<StyledButton color={color}> {children} </StyledButton>
		</div>
	);
}

const StyledButton = styled.button`
	border: none;
	outline: none;
	padding: 12px;
	border-radius: 50px;
	background-color: #005ad5;
	font-weight: 700;
	white-space: nowrap;
	vertical-align: middle;
	user-select: none;
	border: 2px solid transparent;
	padding: 0 32px;
	font-size: 16px;
	line-height: 46px;
	/* color: #0067f4; */
	cursor: pointer;
	z-index: 5;
	transition: all .4s ease-out 0s;
	position: relative;
	text-transform: uppercase;

	color: ${(props) => props.color};

	@media (max-width: 767px) {
		font-size: 14px;
		padding: 0 20px;
		line-height: 40px;
	}
`;

export default Button;
