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
				<div className='columns-4 text-3xl md:text-5xl'>
					<div className='flex flex-col space-y-1 items-center'>
						<span className='font-semibold'>
							{days < 10 ? `0${days}` : days}
						</span>
						<span className='text-sm uppercase'>days</span>
					</div>
					<div className='flex flex-col space-y-1 items-center'>
						<span className='font-semibold'>
							{hours < 10 ? `0${hours}` : hours}
						</span>
						<span className='text-sm uppercase'>hrs</span>
					</div>
					<div className='flex flex-col space-y-1 items-center'>
						<span className='font-semibold'>
							{minutes < 10 ? `0${minutes}` : minutes}
						</span>
						<span className='text-sm uppercase'>mins</span>
					</div>

					<div className='flex flex-col space-y-1 items-center'>
						<span
							suppressHydrationWarning={true}
							className='font-semibold'
						>
							{seconds < 10 ? `0${seconds}` : seconds}
						</span>
						<span className='text-sm uppercase'>secs</span>
					</div>
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
