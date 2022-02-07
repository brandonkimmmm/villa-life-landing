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
		<div className='grid grid-flow-col gap-5 text-center auto-cols-max'>
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
							{ '--value': duration.days } as React.CSSProperties
						}
					></span>
				</span>
				days
			</div>
			<div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
				<span className='font-mono text-5xl countdown'>
					<span
						style={
							{ '--value': duration.hours } as React.CSSProperties
						}
					></span>
				</span>
				hours
			</div>
			<div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
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
			<div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
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
	);
}
