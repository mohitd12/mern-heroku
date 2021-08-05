import React from 'react';
import styled from 'styled-components';

function Testimonial({ photo, name, post, description }) {
	return (
		<Root>
			<Wrapper>
				<div className="photo">
					<img src={photo} alt="" />
				</div>
				<div className="description">
					<p>{description}</p>
				</div>
				<div className="post">
					<h5> {name} </h5>
					<p> {post} </p>
				</div>
			</Wrapper>
		</Root>
	);
}

const Root = styled.div`
	background-color: #fff;
	padding: 30px;
	margin: 20px;
	box-shadow: 0 0 20px 0 rgb(0 0 0 / 10%);
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;

	.photo {
		margin: 0 auto;
		background-color: #eee;
		border-radius: 50%;
		height: 110px;
		width: 110px;
		overflow: hidden;

		img {
			overflow: hidden;
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}

	.description {
		padding: 2em;
		border-bottom: 1px solid #cbced1;
	}

	.post {
		text-transform: capitalize;

		h5 {
			font-size: 18px;
			font-weight: 600;
			color: #121212;
			margin-top: 24px;
		}

		p {
			font-size: 14px;
			line-height: 24px;
			color: #a4a4a4;
		}
	}
`;

export default Testimonial;
