import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { Section, Container } from '../../globalStyles';
import {
	ContentRow,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
} from '../../components/Content/Content.styles';
import { GalleryPhoto } from './Gallery.styles';
const Gallery = () => {
	const [bookNowURL] = useState('https://airmadnesspos.com/airmadness/onlinesales1/tickets1.php');


	const initial = { opacity: 0, y: 30 };
	const animation = useAnimation();

	const { inView } = useInView({ threshold: 0.2 });

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});
		}
	}, [inView, animation]);




	return (
	<Section inverse>
		<Container>
									<TextWrapper>
					<TopLine
						initial={initial}
						transition={{ delay: 0.3456, duration: 0.3456 }}
						animate={animation}
					>
						Gallery -- Four Industry-Leading Escape Rooms (2-12 players)
					</TopLine>
					<Heading
					transition={{ delay: 0.3456, duration: 0.3456 }}
					animate={animation}
					inverse
					mt={50}
				>

					</Heading>


				</TextWrapper>
				<Heading
					transition={{ delay: 0.3456, duration: 0.3456 }}
					animate={animation}
					inverse
					mt={50}
				>
					Escape Plan
				</Heading>
				<Subtitle
					transition={{ delay: 0.3456, duration: 0.3456 }}
					animate={animation}
					inverse
				>
					2 to 10 players.  Time limit: 60 minutes.</Subtitle>
				<ContentRow style={{ padding: 2.55, display: 'block' }}>
					<GalleryPhoto alt='Picture of Conquer Escape Room: Escape Plan' src='./assets/gallery-photo-18.webp' />

					<GalleryPhoto alt='Picture of Conquer Escape Room: Escape Plan' src='./assets/gallery-photo-20.webp' />

					<GalleryPhoto alt='Picture of Conquer Escape Room: Escape Plan' src='./assets/gallery-photo-21.webp' />
					<GalleryPhoto alt='Picture of Conquer Escape Room: Escape Plan' src='./assets/gallery-photo-22.webp' />
					<GalleryPhoto alt='Picture of Conquer Escape Room: Escape Plan' src='./assets/gallery-photo-23.webp' />
					<GalleryPhoto alt='Picture of Conquer Escape Room: Escape Plan' src='./assets/gallery-photo-24.webp' />
				</ContentRow>
				<Heading
					transition={{ delay: 0.3456, duration: 0.3456 }}
					animate={animation}
					inverse
					mt={50}
				>
					Recon: The Final Hour <br /><span style={{ color: 'red', display: 'bolck', fontSize: '1.9rem' }}>Live Zombie Experience</span>
				</Heading>
				<Subtitle
					transition={{ delay: 0.3456, duration: 0.3456 }}
					animate={animation}
					inverse
				>4 to 12  players can participate in Recon: The Final Hour. The time limit is 60 minutes.
				</Subtitle>
				<ContentRow style={{ padding: 2.55, display: 'block' }}>

					<GalleryPhoto alt='Picture of Conquer Escape Room: Recon--The Final Hour' src='./assets/gallery-photo-15.webp' />
					<GalleryPhoto alt='Picture of Conquer Escape Room: Recon--The Final Hour' src='./assets/gallery-photo-14.webp' />
					<GalleryPhoto alt='Picture of Conquer Escape Room: Recon--The Final Hour' src='./assets/gallery-photo-13.webp' />
					<GalleryPhoto alt='Picture of Conquer Escape Room: Recon--The Final Hour' src='./assets/gallery-photo-12.webp' />
					<GalleryPhoto alt='Picture of Conquer Escape Room: Recon--The Final Hour' src='./assets/gallery-photo-16.webp' />

					<GalleryPhoto alt='Picture of Conquer Escape Room: Recon--The Final Hour' src='./assets/gallery-photo-17.webp' />
				</ContentRow>
				<Heading
					transition={{ delay: 0.3456, duration: 0.3456 }}
					animate={animation}
					inverse
					mt={50}
				>
					Diamond Quest
				</Heading>
				<Subtitle
					transition={{ delay: 0.3456, duration: 0.3456 }}
					animate={animation}
					inverse
				>2 - 12 players can participate in Diamond Quest. The time limit is 60 minutes.
				</Subtitle>
				<ContentRow style={{ padding: 2.55, display: 'block', listStyle: 'none' }}>
					<GalleryPhoto alt='Picture of Conquer Escape Room: Diamond Quest' src='./assets/gallery-photo-19.webp' />
					<GalleryPhoto alt='Picture of Conquer Escape Room: Diamond Quest'  src='./assets/gallery-photo-2.webp' />

					<GalleryPhoto alt='Picture of Conquer Escape Room: Diamond Quest'  src='./assets/gallery-photo-1.webp' />
					<GalleryPhoto alt='Picture of Conquer Escape Room: Diamond Quest'  src='./assets/gallery-photo-3.webp' />
					<GalleryPhoto alt='Picture of Conquer Escape Room: Diamond Quest'  src='./assets/gallery-photo-4.webp' />
					<GalleryPhoto alt='Picture of Conquer Escape Room: Diamond Quest'  src='./assets/gallery-photo-5.webp' />

				</ContentRow>
				<Heading
					transition={{ delay: 0.3456, duration: 0.3456 }}
					animate={animation}
					inverse
					mt={50}
				>
					Hot Seat
				</Heading>
				<Subtitle
					transition={{ delay: 0.3456, duration: 0.3456 }}
					animate={animation}
					inverse
				>1 - 2 people can play this game. The time limit is 2 minutes.
				</Subtitle>
				<ContentRow style={{ padding: 2.55, display: 'block' }}>

					<GalleryPhoto alt='Picture of Conquer Escape Room: Hot Seat'  src='./assets/gallery-photo-11.webp' />

					<GalleryPhoto alt='Picture of Conquer Escape Room: Hot Seat' src='./assets/gallery-photo-8.webp' />
					<GalleryPhoto alt='Picture of Conquer Escape Room: Hot Seat' src='./assets/gallery-photo-6.webp' />
					<GalleryPhoto alt='Picture of Conquer Escape Room: Hot Seat' src='./assets/gallery-photo-7.webp' />
					<GalleryPhoto alt='Picture of Conquer Escape Room: Hot Seat' src='./assets/gallery-photo-9.webp' />
					<GalleryPhoto alt='Picture of Conquer Escape Room: Hot Seat' src='./assets/gallery-photo-10.webp' />


				</ContentRow>




		</Container>
		</Section>
		
	)
}



export default Gallery;