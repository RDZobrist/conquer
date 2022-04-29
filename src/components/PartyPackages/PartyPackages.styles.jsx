import styled from 'styled-components';

export const PartyPackagesSection = styled.div`
	padding: 180px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #101522;
`;

export const PartyPackagesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;

	@media screen and (max-width: 960px) {
		margin: 0 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const PartyPackagesContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	> div {
		margin: 1.8rem;
	}

	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		> div {
			width: 90%;
		}
	}
`;

export const PartyPackagesCard = styled.div`
	&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
	}
`;

export const PartyPackagesCardInfo = styled.div`
	background: #242424;
	box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
	width: 25vw;
	text-decoration: none;
	border-radius: 4px;
	height: 100%;

	display: flex;
	flex-direction: column;
	padding: 24px;
	color: #fff;
	margin: auto;
	> button {
		margin-top: auto;

		&:hover {
			color: black;
			background: white;
			transition: background 0.3s ease;
		}
	}

	@media screen and (max-width: 768px) {
		width: 90%;

		&:hover {
			transform: none;
		}
	}
`;

export const PartyPackagesCardPlan = styled.h3`
	margin-bottom: 5px;
	font-size: 2.2rem;
`;

export const PartyPackagesCardCost = styled.h4`
	font-size: 1.2rem;
`;

export const PartyPackagesCardText = styled.p`
	font-size: 1.1rem;
	margin: 0.33rem 0 1.3rem;
	color: #a9b3c1;
`;

export const PartyPackagesCardFeatures = styled.ul`
	margin: 12px 0 24px;
	list-style: none;
	display: flex;
	flex-direction: column;
	color: #a9b3c1;
`;

export const PartyPackagesCardFeature = styled.li`
	margin-bottom: 1rem;
	display: flex;
	font-size: 0.94rem;

	&:before {
		content: '🎉';
		margin-right: 0.4rem;
	}
`;
