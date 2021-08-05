import React from 'react';
import styled from 'styled-components';
import { AiOutlineCheckCircle } from 'react-icons/ai';

// image
import bgCurveImg from './img/bg.svg';

function PricingCard({ plan, price, color }) {
	return (
		<Root>
			<Head color={color}>
				<h4>{plan}</h4>
				<p className="price"> $ {price} </p>
				<p className="year">per year</p>
			</Head>
			<Content>
				<ul>
					<li>
						<span>
							<AiOutlineCheckCircle />
						</span>
						Carefully crafted components
					</li>
					<li>
						<span>
							<AiOutlineCheckCircle />
						</span>
						Amazing page examples
					</li>
					<li>
						<span>
							<AiOutlineCheckCircle />
						</span>
						Super friendly support team
					</li>
					<li>
						<span>
							<AiOutlineCheckCircle />
						</span>
						Awesome support
					</li>
				</ul>
				<a href="/#">Get Started</a>
				<ImgBox>
					<img src={bgCurveImg} alt="" />
				</ImgBox>
			</Content>
		</Root>
	);
}

const Root = styled.div`
	box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
	padding: 24px 20px 50px;
	border-radius: 8px;
	position: relative;
	overflow: hidden;
	background-color: #fff;
	flex: 0 1 377px;
	padding: 2em;
`;

const Head = styled.div`
	color: #121212;
	font-weight: 600;
	margin-bottom: 20px;

	h4 {
		font-size: 20px;
		position: relative;
		padding-bottom: 8px;

		&:before {
			position: absolute;
			content: '';
			width: 72px;
			height: 4px;
			bottom: 0;
			left: 0;
			right: 0;
			background-color: ${(props) => props.color};
			margin: 0 auto;
		}
	}

	p.price {
		font-size: 64px;
		color: #121212;
		margin-top: 32px;
		font-weight: 600;
	}

	p.year {
		font-size: 20px;
		color: #6c6c6c;
		margin-top: 3px;
		font-weight: 100;
	}
`;

const Content = styled.div`
	ul {
		max-width: 330px;
		margin: 0 auto;
		list-style: none;
		text-align: left;
	}

	li {
		span {
			color: #0067f4;
			padding-right: 15px;
		}
		line-height: 24px;
		color: #121212;
		margin-top: 16px;
	}

	a {
		margin-top: 31px;
		text-decoration: none;
		background-color: #0067f4;
		border-radius: 50px;
		color: #fff;
		border-color: #0067f4;
		display: inline-block;
		font-weight: 700;
		text-align: center;
		white-space: nowrap;
		vertical-align: middle;
		user-select: none;
		border: 2px solid transparent;
		padding: 0 32px;
		font-size: 16px;
		line-height: 46px;
		cursor: pointer;
		z-index: 5;
		transition: all .4s ease-out 0s;
		position: relative;
		text-transform: uppercase;
	}
`;

const ImgBox = styled.div`
	position: absolute;
	bottom: -60px;
	left: 0;
	right: 0;
	height: 200px;
	width: 100%;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export default PricingCard;
