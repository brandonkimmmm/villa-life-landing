import React from 'react';
import { RELEASE_DATE } from '../constants';
import ReactCountdown, { CountdownRenderProps } from 'react-countdown';

const renderer = ({
	days,
	hours,
	minutes,
	completed
}: CountdownRenderProps) => {
	if (completed) {
		return <h1>Completed!</h1>;
	} else {
		return (
			<div className='inline-flex space-x-2'>
				<span className='text-xl font-semibold'>Days: {days}</span>
				<span className='text-xl font-semibold'>Hours: {hours}</span>
				<span className='text-xl font-semibold'>
					Minutes: {minutes}
				</span>
			</div>
		);
	}
};

export default function Countdown() {
	return (
		<div className='flex flex-col items-center space-y-4'>
			<h1 className='font-semibold text-4xl'>
				Coming on {RELEASE_DATE.toFormat('LLL dd, yyyy')}
			</h1>
			<ReactCountdown
				date={RELEASE_DATE.toJSDate()}
				renderer={renderer}
			/>
		</div>
	);
}
