import type { NextPage } from 'next';
import Countdown from '../components/Countdown';
import SubscribeForm from '../components/SubscribeForm';
import SocialMediaLinks from '../components/SocialMediaLinks';
import Locations from '../components/Locations';

const Home: NextPage = () => {
	return (
		<div className='flex flex-col h-screen space-y-8 md:space-y-14 justify-center items-center'>
			<Countdown />
			<Locations />
			<SubscribeForm />
			<SocialMediaLinks />
		</div>
	);
};

export default Home;
