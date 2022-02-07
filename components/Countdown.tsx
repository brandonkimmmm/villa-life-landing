import React from 'react';

export default function Countdown() {
	return (
		<div className='grid grid-flow-col gap-5 text-center auto-cols-max'>
			<div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
				<span className='font-mono text-5xl countdown'>
					<span
						style={{ '--value': 15 } as React.CSSProperties}
					></span>
				</span>
				days
			</div>
			<div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
				<span className='font-mono text-5xl countdown'>
					<span
						style={{ '--value': 15 } as React.CSSProperties}
					></span>
				</span>
				hours
			</div>
			<div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
				<span className='font-mono text-5xl countdown'>
					<span
						style={{ '--value': 15 } as React.CSSProperties}
					></span>
				</span>
				min
			</div>
			<div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
				<span className='font-mono text-5xl countdown'>
					<span
						style={{ '--value': 60 } as React.CSSProperties}
					></span>
				</span>
				sec
			</div>
		</div>
	);
}
