import React from 'react';
import Image from 'next/image';

export default function Locations() {
	return (
		<div className='inline-flex justify-between w-full max-w-xl px-4 text-lg md:text-2xl font-cursive space-x-2'>
			<div className='flex flex-col items-center space-y-4'>
				<Image
					alt='barbados'
					src='/barbados.png'
					width={125}
					height={125}
				/>
				<h2>Barbados</h2>
			</div>
			<div className='flex flex-col items-center space-y-4'>
				<Image
					alt='st martin'
					src='/stmartin.png'
					width={125}
					height={125}
				/>
				<h2>St. Martin</h2>
			</div>
			<div className='flex flex-col items-center space-y-4'>
				<Image
					alt='mexico'
					src='/mexico.png'
					width={125}
					height={125}
				/>
				<h2>Mexico</h2>
			</div>
		</div>
	);
}
