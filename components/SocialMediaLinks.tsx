import React from 'react';
import {
	RiMailSendLine,
	RiFacebookLine,
	RiTwitterLine,
	RiInstagramLine,
	RiPinterestLine
} from 'react-icons/ri';

export default function SocialMediaLinks() {
	return (
		<div className='inline-flex space-x-2'>
			<RiMailSendLine size={24} />
			<RiFacebookLine size={24} />
			<RiTwitterLine size={24} />
			<RiInstagramLine size={24} />
			<RiPinterestLine size={24} />
		</div>
	);
}
