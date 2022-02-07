import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
	email: string;
};

export default function SubscribeForm() {
	const { register, handleSubmit } = useForm<FormData>({
		defaultValues: {
			email: ''
		}
	});
	const onSubmit = handleSubmit((data) => console.log(data));

	return (
		<form className='form-control items-center' onSubmit={onSubmit}>
			<label className='label'>
				<span className='label-text'>Subscribe to get updated!</span>
			</label>
			<div className='flex space-x-2'>
				<input
					className='w-full input input-primary input-bordered'
					placeholder='email'
					{...register('email')}
				/>
				<button type='submit' className='btn btn-primary'>
					Subscribe
				</button>
			</div>
		</form>
	);
}
