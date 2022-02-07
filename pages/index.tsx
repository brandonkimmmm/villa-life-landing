import type { NextPage } from 'next';
import Countdown from '../components/Countdown';
import SubscribeForm from '../components/SubscribeForm';
import SocialMediaLinks from '../components/SocialMediaLinks';

const Home: NextPage = () => {
	return (
		<div className='flex flex-col h-screen space-y-24 justify-center items-center'>
			<h1 className='font-semibold text-6xl'>Villa Life</h1>
			<h2 className='font-semibold text-2xl'>
				Streamlined short term luxury rental coming soon!
			</h2>
			<Countdown />
			<SubscribeForm />
			<SocialMediaLinks />
		</div>
	);
};

export default Home;
