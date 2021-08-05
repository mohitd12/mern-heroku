import React from 'react';
import styled from 'styled-components';

// components
import PricingCard from '../../components/PricingCard';

function Pricing() {
	return (
		<Container>
			<Wrapper>
				<div>
					<h3>Our Pricing</h3>
					<p>
						Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!
					</p>
				</div>
				<CardWrap>
					<PricingCard plan="Basic" price="199" color="#2bdbdc" />
					<PricingCard plan="Pro" price="399" color="#0067f4" />
					<PricingCard plan="Enterprise" price="799" color="#0067f4" />
				</CardWrap>
			</Wrapper>
		</Container>
	);
}

const Container = styled.section`
	background-color: #f4f6f7;
	padding-top: 120px;
	padding-bottom: 120px;
	position: relative;

	@media (max-width: 1400px) {
		padding-top: 60px;
		padding-bottom: 60px;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	text-align: center;
	margin: 0 auto;

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
`;

const CardWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 18px;
	margin-top: 25px;
	padding: 10px;
`;

export default Pricing;
