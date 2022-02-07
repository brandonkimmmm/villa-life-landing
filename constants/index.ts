import { DateTime } from 'luxon';

export const RELEASE_DATE = process.env.RELEASE_DATE
	? DateTime.fromJSDate(new Date(process.env.RELEASE_DATE))
	: DateTime.fromJSDate(new Date('5/24/2022'));
