import React, { useState } from 'react';
import { DateTime, DurationObjectUnits } from 'luxon';
import { useInterval } from 'usehooks-ts';
import { RELEASE_DATE } from '../constants';

export default function Countdown() {
	const [duration, setDuration] = useState<DurationObjectUnits>({
		months: 0,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});

	const getRemainingTime = () => {
		const currentDate = DateTime.fromJSDate(new Date());
		return RELEASE_DATE.diff(currentDate, [
			'months',
			'days',
			'hours',
			'minutes',
			'seconds'
		]).toObject();
	};

	useInterval(() => {
		const duration = getRemainingTime();
		setDuration(duration);
	}, 1000);

	return (
		<div className='flex flex-col items-center space-y-3'>
			<h1 className='font-semibold text-3xl'>
				Coming on {RELEASE_DATE.toFormat('LLL dd, yyyy')}
			</h1>
			<div className='grid grid-flow-col gap-1 md:gap-5 text-center auto-cols-max text-sm'>
				<div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
					<span className='font-mono text-5xl countdown'>
						<span
							style={
								{
									'--value': duration.months
								} as React.CSSProperties
							}
						></span>
					</span>
					months
				</div>
				<div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
					<span className='font-mono text-5xl countdown'>
						<span
							style={
								{
									'--value': duration.days
								} as React.CSSProperties
							}
						></span>
					</span>
					days
				</div>
				<div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
					<span className='font-mono text-5xl countdown'>
						<span
							style={
								{
									'--value': duration.hours
								} as React.CSSProperties
							}
						></span>
					</span>
					hours
				</div>
				<div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content row-start-2 col-start-1 md:row-auto md:col-auto'>
					<span className='font-mono text-5xl countdown'>
						<span
							style={
								{
									'--value': duration.minutes
								} as React.CSSProperties
							}
						></span>
					</span>
					min
				</div>
				<div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content row-start-2 col-start-2 md:row-auto md:col-auto'>
					<span className='font-mono text-5xl countdown'>
						<span
							style={
								{
									'--value': Math.trunc(
										duration.seconds as number
									)
								} as React.CSSProperties
							}
						></span>
					</span>
					sec
				</div>
			</div>
		</div>
	);
}
