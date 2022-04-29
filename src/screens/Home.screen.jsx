import React from 'react';
import { Content } from '../components/Content/Content.component';
import Features from '../components/Features/Features';
import Header from '../components/Header/Header.component';
import EscapeRoomsCarousel from '../components/EscapeRoomsCarousel/Carousel.component';
import { sectionOne, sectionTwo, sectionThree, sectionFour } from '../data/ContetData';
import ReviewsCarousel from '../components/ReviewsCarousel/Carousel.component';
// Header Feature Content Carousel

const Home = () => {
	return (
		<>
			<Header />
			<Features />
			<Content {...sectionOne} />
			<Content  {...sectionTwo} />
			<EscapeRoomsCarousel />
			<Content {...sectionThree} />
			<ReviewsCarousel />
			<Content {...sectionFour} />



		</>
	);
};

export default Home;
