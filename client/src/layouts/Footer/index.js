import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

import TextField from '../../components/TextField';
import Button from '../../components/Button';

import image1 from './img/logo.svg';

function Footer() {
	const [ values, setValues ] = React.useState({
		email: ''
	});

	const handleChange = (e) => {
		setValues({
			email: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('form submitted ', values);
	};

	return (
		<Container>
			<Wrapper>
				<Head>
					<img src={image1} alt="logo" />
					<h2>
						<FaFacebookF />
					</h2>
					<h2>
						<FaTwitter />
					</h2>
					<h2>
						<FaInstagramSquare />
					</h2>
					<h2>
						<FaLinkedin />
					</h2>
				</Head>
				<Content>
					<div>
						<ul>
							<li className="title">Company</li>
							<li>
								<a href="/#">About</a>
							</li>
							<li>
								<a href="/#">Contact</a>
							</li>
							<li>
								<a href="/#">Career</a>
							</li>
						</ul>
					</div>
					<div>
						<ul>
							<li className="title">Product & Services</li>
							<li>
								<a href="/#">Products</a>
							</li>
							<li>
								<a href="/#">Business</a>
							</li>
							<li>
								<a href="/#">Developer</a>
							</li>
						</ul>
					</div>
					<div>
						<ul>
							<li className="title">Help & Support</li>
							<li>
								<a href="/#">Support Center</a>
							</li>
							<li>
								<a href="/#">FAQ</a>
							</li>
							<li>
								<a href="/#">Terms & Conditions</a>
							</li>
						</ul>
					</div>
					<div>
						<ul>
							<li className="title">Subscribe Newsletter</li>
						</ul>
						<StyledForm onSubmit={handleSubmit}>
							<TextField type="email" placeholder="Your Email" value={values.email} onChange={handleChange} />
							<Button>Subscribe</Button>
						</StyledForm>
						<ul>
							<li>Subscribe weekly newsletter to stay upto date. We don’t send spam.</li>
						</ul>
					</div>
				</Content>
			</Wrapper>
		</Container>
	);
}

const Container = styled.footer`
	background-color: #f4f6f7;
	padding-top: 60px;
	padding-bottom: 60px;
`;

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 75%;
	display: flex;
	flex-direction: column;
	padding: 16px;
`;

const Head = styled.div`
	display: flex;
	gap: 25px;
	align-items: center;
	margin-bottom: 15px;

	h2 {
		font-size: 24px;
		color: #6c6c6c;
		cursor: pointer;
	}
`;

const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: space-between;

	div {
		flex: 0 1 320px;
	}

	ul {
		list-style: none;
	}

	li {
		line-height: 34px;
	}

	li a {
		text-decoration: none;
		font-size: 16px;
		color: #121212;
		margin-top: 16px;
		transition: all .3s ease-out 0s;
	}

	li.title {
		font-size: 14px;
		font-weight: 700;
		color: #6c6c6c;
		margin-bottom: 8px;
	}
`;

const StyledForm = styled.form`
	position: relative;

	.input {
		overflow: hidden;
		input {
			border-radius: 50px;
		}
	}

	.button {
		position: absolute;
		top: 50%;
		right: 5px;
		transform: translateY(-50%);

		button {
			font-size: 12px;
			padding: 2px 21px;
			line-height: 25px;
		}
	}
`;

export default Footer;
