import React from 'react';
import {
	RiMailSendLine,
	RiFacebookLine,
	RiTwitterLine,
	RiInstagramLine,
	RiPinterestLine
} from 'react-icons/ri';
import {
	EMAIL_ADDRESS,
	FACEBOOK_LINK,
	INSTAGRAM_LINK,
	PINTEREST_LINK,
	TWITTER_LINK
} from '../constants';

export default function SocialMediaLinks() {
	return (
		<div className='inline-flex space-x-2'>
			<a href={`mailto:${EMAIL_ADDRESS}`}>
				<RiMailSendLine size={24} />
			</a>
			<a href={`${FACEBOOK_LINK}`} target='_blank' rel='noreferrer'>
				<RiFacebookLine size={24} />
			</a>
			<a href={`${TWITTER_LINK}`} target='_blank' rel='noreferrer'>
				<RiTwitterLine size={24} />
			</a>
			<a href={`${INSTAGRAM_LINK}`} target='_blank' rel='noreferrer'>
				<RiInstagramLine size={24} />
			</a>
			<a href={`${PINTEREST_LINK}`} target='_blank' rel='noreferrer'>
				<RiPinterestLine size={24} />
			</a>
		</div>
	);
}
