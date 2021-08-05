import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Carousel, { slidesToShowPlugin, slidesToScrollPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

// components
import TestimonialCard from '../../components/Testimonial';

function Testimonial() {
	const [ hits, setHits ] = React.useState(null);

	React.useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const res = await axios.get('/api/testimonial');

			setHits(res.data.data);
		} catch (err) {
			setHits([]);
		}
	};

	return (
		<Container>
			<Head>
				<h3>Testimonials</h3>
				<p>
					Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!
				</p>
			</Head>
			{hits &&
			hits.length && (
				<Carousel
					plugins={[
						'centered',
						'arrows',
						{
							resolve: slidesToShowPlugin,
							options: {
								numberOfSlides: 3
							}
						},
						{
							resolve: slidesToScrollPlugin,
							options: {
								numberOfSlides: 2
							}
						}
					]}
					breakpoints={{
						640: {
							plugins: [
								{
									resolve: slidesToShowPlugin,
									options: {
										numberOfSlides: 1
									}
								}
							]
						},
						900: {
							plugins: [
								{
									resolve: slidesToShowPlugin,
									options: {
										numberOfSlides: 2
									}
								}
							]
						}
					}}
				>
					{hits.map((n) => (
						<TestimonialCard key={n._id} name={n.name} photo={n.photo} post={n.post} description={n.description} />
					))}
				</Carousel>
			)}
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

	.BrainhubCarousel__container {
		width: 85%;
		overflow: hidden;
		margin: 0 auto;
	}
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
`;

const TestimonialWrap = styled.div`
	display: flex;
	flex-wrap: ;
`;

export default Testimonial;
