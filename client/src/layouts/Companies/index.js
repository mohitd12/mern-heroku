import React from 'react';
import styled from 'styled-components';

// images
import image1 from './img/pic1.png';
import image2 from './img/pic2.png';
import image3 from './img/pic3.png';
import image4 from './img/pic4.png';

function Companies() {
	return (
		<Container>
			<div>
				<img src={image1} alt="" />
				<img src={image2} alt="" />
				<img src={image3} alt="" />
				<img src={image4} alt="" />
			</div>
		</Container>
	);
}

const Container = styled.section`
	background-color: #f4f6f7;
	padding-top: 80px;
	padding-bottom: 80px;
	text-align: center;

	img {
		margin: 8px;
	}

	@media (max-width: 1400px) {
		padding-top: 60px;
		padding-bottom: 60px;
	}
`;

export default Companies;
