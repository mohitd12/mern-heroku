import React from 'react';
import styled from 'styled-components';

// components
import TextField from '../../components/TextField';
import Button from '../../components/Button';

function Contact() {
	const [ values, setvalues ] = React.useState({
		name: '',
		email: '',
		subject: '',
		phone: '',
		message: ''
	});
	const [ errors, setErrors ] = React.useState({
		name: false,
		email: false,
		subject: false,
		phone: false,
		message: false
	});

	const handleChange = (e) => {
		setvalues((v) => ({
			...v,
			[e.target.name]: e.target.value
		}));
	};

	const handleValidationCheck = (e) => {
		function isString(val) {
			return val.length > 0;
		}

		const obj = {
			name: !isString(values.name),
			email: !isString(values.email),
			subject: !isString(values.subject),
			phone: !isString(values.phone),
			message: !isString(values.message)
		};

		setErrors(obj);
		return obj;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const values = Object.values(handleValidationCheck());

		if (values.includes(true)) {
			console.log('Oops!');
			return;
		}

		console.log('form submitted!');
	};

	return (
		<Container>
			<Wrapper>
				<Head>
					<h3>Get In Touch</h3>
					<p>
						Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!
					</p>
				</Head>
				<FormWrapper>
					<form onSubmit={handleSubmit}>
						<TextField
							value={values.name}
							onChange={handleChange}
							placeholder="Your Name"
							name="name"
							errorMessage={errors.name}
						/>
						<TextField
							value={values.email}
							onChange={handleChange}
							placeholder="Your Email"
							type="email"
							name="email"
							errorMessage={errors.email}
						/>
						<TextField
							value={values.subject}
							onChange={handleChange}
							placeholder="Subject"
							name="subject"
							errorMessage={errors.subject}
						/>
						<TextField
							value={values.phone}
							onChange={handleChange}
							placeholder="Phone"
							type="tel"
							name="phone"
							errorMessage={errors.phone}
						/>
						<TextField
							textarea
							value={values.message}
							onChange={handleChange}
							placeholder="Your Message"
							name="message"
							errorMessage={errors.message}
						/>
						<Button>Send message</Button>
					</form>
				</FormWrapper>
			</Wrapper>
		</Container>
	);
}

const Container = styled.section`
	padding-top: 80px;
	padding-bottom: 80px;

	@media (max-width: 1400px) {
		padding-top: 60px;
		padding-bottom: 60px;
	}
`;

const Wrapper = styled.div`
	width: 80%;
	margin: 0 auto;
`;

const Head = styled.div`
	text-align: center;

	h3 {
		font-size: 50px;
		font-weight: 600;
		color: #121212;
	}

	p {
		font-size: 16px;
		color: #6c6c6c;
		margin-top: 24px;
	}

	@media (max-width: 768px) {
		h3 {
			font-size: 30px;
			line-height: 40px;
		}
	}
`;

const FormWrapper = styled.div`
	max-width: 800px;
	margin: 50px auto;

	form {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 22px;

		.textarea {
			grid-column: 1 / span 2;
			min-height: 160px;
		}

		.button {
			text-align: center;
			grid-column: 1 / span 2;
		}
	}

	@media (max-width: 768px) {
		form {
			.input {
				grid-column: 1 / span 2;
			}
		}
	}
`;

export default Contact;
