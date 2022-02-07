import type { NextPage } from 'next';
import Countdown from '../components/Countdown';
import SubscribeForm from '../components/SubscribeForm';
import { MailIcon } from '@heroicons/react/outline';

const Home: NextPage = () => {
	return (
		<div className='flex flex-col h-screen space-y-24 justify-center w-96'>
			<h1 className='font-semibold text-6xl'>Villa Life</h1>
			<Countdown />
			<h2 className='font-semibold text-2xl'>
				Healthcare is changing with time
			</h2>
			<p>
				It is going to be more sophisticated and simple. Stay tuned.
				Coming soon.
			</p>
			<SubscribeForm />
			<div className='flex flex-col'>
				<span className='inline-flex'>
					<MailIcon className='h-4' /> hello@stayhiup.com
				</span>
			</div>
		</div>
	);
};

export default Home;
