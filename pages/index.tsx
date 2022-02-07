import type { NextPage } from 'next';
import Countdown from '../components/Countdown';
import SubscribeForm from '../components/SubscribeForm';
import SocialMediaLinks from '../components/SocialMediaLinks';
import { RELEASE_DATE } from '../constants';

const Home: NextPage = () => {
	return (
		<div className='flex flex-col h-screen space-y-20 justify-center items-center'>
			<div className='flex flex-col space-y-8'>
				<h1 className='font-semibold text-7xl'>Villa Life</h1>
				<h2 className='font-semibold text-2xl'>
					Coming on {RELEASE_DATE.toFormat('LLL dd, yyyy')}
				</h2>
			</div>
			<Countdown />
			<SubscribeForm />
			<SocialMediaLinks />
		</div>
	);
};

export default Home;
