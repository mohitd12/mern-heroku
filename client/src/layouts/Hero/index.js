import React from 'react';
import styled from 'styled-components';
import { FiPlay } from 'react-icons/fi';

// images
import bgImage from './img/bg.jpg';
import bgCurved from './img/bg-curve.svg';

function Hero() {
	return (
		<Container>
			<Wrapper>
				<div className="bg-cover">
					<img src={bgImage} alt="..." />
				</div>
				<div className="bg-curved">
					<img src={bgCurved} alt="..." />
				</div>
				<Content>
					<h3>Handcrafted Landing Page for Startups and SaaS Businesses</h3>
					<p>
						A simple, customizable, and, beautiful SaaS business focused landing page to make your project closer to
						launch!
					</p>
					<div className="link__wrap">
						<a className="contact" href="/#">
							get in touch
						</a>
						<a className="video" href="/#">
							watch the video
							<span>
								<FiPlay />
							</span>
						</a>
					</div>
				</Content>
			</Wrapper>
		</Container>
	);
}

const Container = styled.div`
	height: 88vh;
	width: 100vw;
	z-index: 1;

	@media (max-width: 1200px) {
		height: 100vh;
	}
`;

const Wrapper = styled.div`
	height: 100%;
	position: relative;

	&:before {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			rgba(232, 237, 255, 0.9),
			rgba(239, 254, 255, 0.9) 50%,
			rgba(254, 255, 244, 0.3) 68%,
			rgba(255, 255, 255, 0.12)
		);
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.bg-cover {
		overflow: hidden;
		height: 100%;
		pointer-events: none;
	}

	.bg-curved {
		overflow: hidden;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 20%;
		pointer-events: none;
	}
`;

const Content = styled.div`
	text-align: center;
	position: absolute;
	top: 22%;
	left: 50%;
	transform: translateX(-50%);
	max-width: 680px;

	h3 {
		font-size: 44px;
		line-height: 55px;
		color: #121212;
		font-weight: 600;
		padding: 1px;
	}

	p {
		font-size: 20px;
		line-height: 32px;
		color: #6c6c6c;
		margin-top: 16px;
	}

	.link__wrap {
		display: flex;
		justify-content: center;
		gap: 15px;
		padding: 2em;

		a {
			text-decoration: none;
			font-size: 18px;
			font-weight: 500;
			display: block;
			text-transform: uppercase;
			padding: 0 32px;
			line-height: 50px;
			border-radius: 50px;
			box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
			border: 0;
			line-height: 52px;
			background: linear-gradient(to right, #0067f4 0%, #2bdbdc 50%, #0067f4 100%);
			background-size: 200% auto;
			color: #fff;
			transition: all .4s ease-out 0s;
			width: 250px;

			svg {
				margin-left: 7px;
				vertical-align: -2px;
			}

			&:hover {
				background-position: right center;
				box-shadow: 0 3px 25px 0 rgb(0 0 0 / 16%);
			}
		}

		a.video {
			background: #fff;
			color: #0067f4;
			&:hover {
				background-position: right center;
				box-shadow: 0 3px 25px 0 rgb(0 0 0 / 16%);
				color: #0067f4;
			}
		}
	}

	@media (max-width: 1200px) {
		h3 {
			font-size: 38px;
			line-height: 50px;
		}
		p {
			font-size: 15px;
			line-height: 30px;
		}
	}

	@media (max-width: 650px) {
		top: 15%;
		width: 400px;

		h3 {
			font-size: 33px;
			line-height: 50px;
		}

		p {
			line-height: 30px;
		}

		.link__wrap {
			flex-direction: column;
			align-items: center;

			a {
				font-size: 14px;
				width: 220px;

				svg {
					margin-left: 2px;
					vertical-align: -2px;
				}
			}
		}
	}

	@media (max-width: 450px) and (min-width: 300px) {
		width: 90%;

		h3 {
			font-size: 33px;
			line-height: 50px;
		}

		p {
			line-height: 30px;
		}

		.link__wrap {
			flex-direction: column;
			align-items: center;

			a {
				font-size: 14px;
				width: 220px;

				svg {
					margin-left: 2px;
					vertical-align: -2px;
				}
			}
		}
	}
`;

export default Hero;
