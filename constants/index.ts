import { DateTime } from 'luxon';

export const RELEASE_DATE = process.env.NEXT_PUBLIC_RELEASE_DATE
	? DateTime.fromJSDate(
			new Date(process.env.NEXT_PUBLIC_RELEASE_DATE)
	  ).setZone('America/Toronto')
	: DateTime.fromJSDate(new Date('5/26/2022')).setZone('America/Toronto');

export const EMAIL_ADDRESS = process.env.NEXT_PUBLIC_EMAIL_ADDRESS || '';
export const FACEBOOK_LINK = process.env.NEXT_PUBLIC_FACEBOOK_LINK || '';
export const TWITTER_LINK = process.env.NEXT_PUBLIC_TWITTER_LINK || '';
export const INSTAGRAM_LINK = process.env.NEXT_PUBLIC_INSTAGRAM_LINK || '';
export const PINTEREST_LINK = process.env.NEXT_PUBLIC_PINTEREST_LINK || '';
