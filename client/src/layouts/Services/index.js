import React from 'react';
import styled from 'styled-components';
import { HiOutlineLightningBolt } from 'react-icons/hi';
import { IoBarChartOutline, IoBulbOutline } from 'react-icons/io5';
import { BiBrush } from 'react-icons/bi';

// images
import image1 from './img/pic1.png';

function OurServices() {
	return (
		<Container>
			<Wrapper>
				<Content>
					<TitlePara titleFontSize="50px" paraFontsize="16px" className="header">
						<h4>Crafted For</h4>
						<p>
							Stop wasting time and money designing and managing a website that doesn’t get results. Happiness
							guaranteed!
						</p>
					</TitlePara>
					<div className="boxes">
						<PBox>
							<div className="icon">
								<HiOutlineLightningBolt />
							</div>
							<TitlePara titleFontSize="24px" paraFontsize="14px" className="services">
								<h4>Startup</h4>
								<p>Short description for the ones who look for something new.</p>
							</TitlePara>
						</PBox>
						<PBox>
							<div className="icon">
								<IoBarChartOutline />
							</div>
							<TitlePara titleFontSize="24px" paraFontsize="14px" className="services">
								<h4>SaaS Business</h4>
								<p>Short description for the ones who look for something new.</p>
							</TitlePara>
						</PBox>
						<PBox>
							<div className="icon">
								<BiBrush />
							</div>
							<TitlePara titleFontSize="24px" paraFontsize="14px" className="services">
								<h4>Agency</h4>
								<p>Short description for the ones who look for something new.</p>
							</TitlePara>
						</PBox>
						<PBox>
							<div className="icon">
								<IoBulbOutline />
							</div>
							<TitlePara titleFontSize="24px" paraFontsize="14px" className="services">
								<h4>App Landing</h4>
								<p>Short description for the ones who look for something new.</p>
							</TitlePara>
						</PBox>
					</div>
				</Content>
				<ImgBox>
					<img src={image1} alt="Services" />
				</ImgBox>
			</Wrapper>
		</Container>
	);
}

const Container = styled.section`
	padding-top: 120px;
	padding-bottom: 120px;
	position: relative;

	@media (max-width: 1400px) {
		padding-top: 60px;
		padding-bottom: 60px;
	}
`;

const Wrapper = styled.div`
	margin: 0 auto;
	display: flex;
	width: 80%;
	flex-wrap: wrap;
	justify-content: center;
	gap: 35px;
	align-items: center;

	@media (max-width: 600px) {
		width: 95%;
	}
`;

const Content = styled.div`
	flex: 0 1 40%;

	@media (max-width: 1400px) {
		flex: 0 1 80%;
	}

	.boxes {
		display: flex;
		flex-wrap: wrap;
	}

	@media (max-width: 600px) {
		flex: 0 1 100%;
		.boxes {
			flex-direction: column;
		}
	}
`;

const TitlePara = styled.div`
	padding: 10px;

	h4 {
		font-size: ${(props) => props.titleFontSize};
		font-weight: 600;
		color: #121212;
	}

	p {
		font-size: ${(props) => props.paraFontsize};
		line-height: 24px;
		color: #6c6c6c;
		margin-top: 24px;
	}

	&.header {
		margin-bottom: 25px;
	}
`;

const PBox = styled.div`
	flex: 0 1 50%;
	display: flex;

	p {
		margin-top: 14px;
	}

	.icon {
		color: #0067f4;
		height: 100%;
		width: 200px;
		font-size: 4em;
		padding: 10px;
	}
`;

const ImgBox = styled.div`
	flex: 0 1 40%;

	img {
		width: 100%;
		object-fit: cover;
	}
`;
export default OurServices;
