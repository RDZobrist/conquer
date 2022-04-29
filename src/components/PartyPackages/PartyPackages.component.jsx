import React, { useState } from 'react';
import { Button, Heading, TextWrapper } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';

import {
	PartyPackagesSection,
	PartyPackagesWrapper,
	PartyPackagesContainer,
	PartyPackagesCardInfo,
	PartyPackagesCardPlan,
	PartyPackagesCardCost,
	PartyPackagesCardFeatures,
	PartyPackagesCardText,
	PartyPackagesCardFeature,
	PartyPackagesCard,
} from './PartyPackages.styles';
import { PartyPackagesData } from '../../data/PartyPackagesData';

const PartyPackages = () => {
	const [bookNowURL] = useState('https://airmadnesspos.com/airmadness/onlinesales1/tickets1.php');

  const handleBookNowClick = () => {
    window.location = bookNowURL;
    return null;
  };
	return (
		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
			<PartyPackagesSection id="PartyPackages">
				<PartyPackagesWrapper>
					<Heading>Your Birthday Party Headquarters</Heading>

					<TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
						Hollywood-Quality Special Effects  -  Live Actor Pre-shows - Industry Leading Puzzle Technology
					</TextWrapper>
					<PartyPackagesContainer>
						{PartyPackagesData.map((card, index) => (
							<PartyPackagesCard key={index}>
								<PartyPackagesCardInfo>
									<PartyPackagesCardPlan>{card.title}</PartyPackagesCardPlan>
									<PartyPackagesCardCost>{card.price}</PartyPackagesCardCost>
									<PartyPackagesCardText>{card.description}</PartyPackagesCardText>
									<PartyPackagesCardFeatures>
										{card.features.map((feature, index) => (
											<PartyPackagesCardFeature key={index}>
												{feature}
											</PartyPackagesCardFeature>
										))}
									</PartyPackagesCardFeatures>
									<Button onClick={handleBookNowClick}>Book This Party</Button>
								</PartyPackagesCardInfo>
							</PartyPackagesCard>
						))}
					</PartyPackagesContainer>
				</PartyPackagesWrapper>
			</PartyPackagesSection>
		</IconContext.Provider>
	);
}
export default PartyPackages;
