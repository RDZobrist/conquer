import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../../globalStyles';
import { HeaderVideo, HeaderSection, HeaderText, ButtonWrapper, HeaderButton } from './Header.styles';

const Header = () => {
	const [bookNowURL] = useState('https://airmadnesspos.com/airmadness/onlinesales1/tickets1.php');

  const handleBookNowClick = () => {
    window.location = bookNowURL;
    return null;
  };

  const handlePhoneNumberClick = () => {
    window.location = "tel:+1-605-702-4243";
    return null;
  };
	return (
		<HeaderSection>
			<HeaderVideo src="./assets/conquerBEST.mp4" autoPlay muted loop />
			<Container>
				<HeaderText>
					SOUTH DAKOTA'S PREMIER ESCAPE ROOMS<br/>
					Hollywood Quality Set Designs & Special Effects<br/>
				</HeaderText>
				<ButtonWrapper>
					
					<HeaderButton onClick={handlePhoneNumberClick}>(605) 702-4243</HeaderButton>
					<Link to="signup">
						<Button onClick={handleBookNowClick}>Book an Escape Room Now</Button>
					</Link>
				</ButtonWrapper>
			</Container>
		</HeaderSection>
	);
};

export default Header;
