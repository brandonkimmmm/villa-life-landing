import React from 'react';
import { RELEASE_DATE } from '../constants';
import ReactCountdown, { CountdownRenderProps } from 'react-countdown';

const renderer = ({
	days,
	hours,
	minutes,
	seconds,
	completed
}: CountdownRenderProps) => {
	if (completed) {
		return <h1 className='text-4xl font-semibold'>RELEASED!</h1>;
	} else {
		return (
			<div className='flex flex-col items-center space-y-4'>
				<h1 className='font-semibold text-2xl md:text-4xl'>
					Coming on {RELEASE_DATE.toFormat('LLL dd, yyyy')}
				</h1>
				<div className='inline-flex space-x-2 md:text-xl font-semibold'>
					<span>Days: {days}</span>
					<span>Hours: {hours}</span>
					<span>Minutes: {minutes}</span>
					<span suppressHydrationWarning={true}>
						Seconds: {seconds}
					</span>
				</div>
			</div>
		);
	}
};

export default function Countdown() {
	return (
		<ReactCountdown date={RELEASE_DATE.toJSDate()} renderer={renderer} />
	);
}
