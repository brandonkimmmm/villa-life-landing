import React from 'react';
import Image from 'next/image';

export default function Locations() {
	return (
		<div className='inline-flex justify-between w-full max-w-xl'>
			<div className='flex flex-col items-center space-y-4'>
				<Image
					alt='barbados'
					src='/barbados.png'
					width={125}
					height={125}
				/>
				<h2 className='font-cursive text-2xl'>Barbados</h2>
			</div>
			<div className='flex flex-col items-center space-y-4'>
				<Image
					alt='st martin'
					src='/stmartin.png'
					width={125}
					height={125}
				/>
				<h2 className='font-cursive text-2xl'>St. Martin</h2>
			</div>
			<div className='flex flex-col items-center space-y-4'>
				<Image
					alt='mexico'
					src='/mexico.png'
					width={125}
					height={125}
				/>
				<h2 className='font-cursive text-2xl'>Mexico</h2>
			</div>
		</div>
	);
}
