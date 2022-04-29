import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
	AnchorLink
} from './NavbarStyles.js';
import { useLocation, useHistory } from 'react-router-dom';
import { data } from '../../data/NavbarData';

const Navbar = () => {
	const [show, setShow] = useState(false);

	let history = useHistory();
	let location = useLocation();

	const handleClick = () => {
		setShow(!show);
	};

	const scrollTo = (id) => {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

	const closeMobileMenu = (to, id, page, section) => {
			
		if ((id && location.pathname === '/') && section && !page) {
			scrollTo(id);
		}

		history.push(to);
		setShow(false);
	};

	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<Nav>
				<NavbarContainer style={{ marginTop: '10vh' }}>
					<NavLogo to="/">
						<NavIcon style={{ height: '120px', width: '120px', marginRight: '5vw' }} src="./assets/conquer-logo-1.png" alt="logo" />
					</NavLogo>
					<MobileIcon onClick={handleClick}>
						{show ? <FaTimes /> : <CgMenuRight />}
					</MobileIcon>
					<NavMenu show={show}>
						{data.map((el, index) => (
							
							<NavItem key={index}>
							<NavLinks onClick={() => closeMobileMenu(el.to, el.id, el.page, el.section)}>
								{el.text}
							</NavLinks>
						</NavItem>
							
						
							
						))

}
						
						<AnchorLink href='https://airmadnesspos.com/airmadness/onlinewaiver/waiver.php' style={{textDecoration: 'none'}}>Waiver</AnchorLink>


					</NavMenu>

				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	);
};

export default Navbar;
