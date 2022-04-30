import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaSnapchatGhost  } from 'react-icons/fa';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle(FaFacebook),
		url: 'https://www.facebook.com/conquerescaperooms/'
	},
	{
		name: 'Instagram',
		icon: iconStyle(FaInstagram),
		url: 'https://www.instagram.com/conquerescaperooms/'
	},
	{
		name: 'YouTube',
		icon: iconStyle(FaYoutube),
		url: 'https://www.youtube.com/channel/UCC9KdNvhYYQ6RhbFWbE8WhA'
	},
	{
		name: 'Twitter',
		icon: iconStyle(FaTwitter),
		url: 'https://twitter.com/conquerrooms'
	},
	{
		name: 'SnapChat',
		icon: iconStyle(FaSnapchatGhost),
		url: 'https://snapchat.com/add/conquerescapes'
	},
];

export const footerData = [
	{
		title: 'Hours',
		links: ['Reviews', 'Reviews', 'Reviews', 'Reviews'],
	},
	{
		title: 'Events',
		links: ['Reviews', 'Reviews', 'Reviews', 'Reviews'],
	},
	{
		title: 'Media',
	},
	
];
