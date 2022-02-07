import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
	email: string;
};

export default function SubscribeForm() {
	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors }
	} = useForm<FormData>({
		defaultValues: {
			email: ''
		}
	});
	const onSubmit = handleSubmit((data) => console.log(data));

	return (
		<form>
			<label>Email</label>
			<input {...register('email')} />
			<button type='submit'>Subscribe</button>
		</form>
	);
}
