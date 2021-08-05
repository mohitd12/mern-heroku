import React from 'react';
import styled from 'styled-components';

function TextField({
	type = 'text',
	value,
	placeholder,
	name,
	errorMessage = false,
	textarea = false,
	rows = 5,
	onChange
}) {
	return (
		<Root className={textarea ? 'textarea' : 'input'}>
			{textarea ? (
				<TextArea value={value} placeholder={placeholder} name={name} rows={rows} onChange={onChange} />
			) : (
				<Input type={type} value={value} placeholder={placeholder} name={name} onChange={onChange} />
			)}
			<span> {errorMessage && name + ' is required.'} </span>
		</Root>
	);
}

const Root = styled.div`
	width: 100%;
	height: auto;

	span {
		font-size: 13px;
		margin-left: 2px;
		margin-top: 5px;
		color: red;
	}
`;

const Input = styled.input`
	outline: none;
	border: 1px solid #cbced1;
	border-radius: 5px;
	padding: 15px;
	background-color: #fff;
	font-size: 16px;
	width: 100%;

	&:placeholder {
		opacity: 0.8;
	}
`;

const TextArea = styled.textarea`
	border: 1px solid #cbced1;
	border-radius: 5px;
	padding: 15px 12px;
	background-color: #fff;
	font-size: 16px;
	width: 100%;
	resize: none;

	&:placeholder {
		opacity: 0.8;
	}
`;

export default TextField;
