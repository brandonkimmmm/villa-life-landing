import type { NextPage } from 'next';
import Countdown from '../components/Countdown';
import SubscribeForm from '../components/SubscribeForm';
import SocialMediaLinks from '../components/SocialMediaLinks';
import Locations from '../components/Locations';
import Image from 'next/image';

const Home: NextPage = () => {
	return (
		<div className='flex flex-col h-screen w-full py-4 space-y-8 md:space-y-14 justify-center items-center'>
			<img
				alt='logo'
				src='/logo.png'
				width={300}
				height={100}
				className='mx-auto'
			/>
			<Countdown />
			<Locations />
			<SubscribeForm />
			<SocialMediaLinks />
		</div>
	);
};

export default Home;
