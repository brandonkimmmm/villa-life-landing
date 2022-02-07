import type { NextPage } from 'next';
import Countdown from '../components/Countdown';
import SubscribeForm from '../components/SubscribeForm';

const Home: NextPage = () => {
	return (
		<div className='flex flex-col h-screen'>
			<h1>Villa Life</h1>
			<Countdown />
			<h3>Healthcare is changing with time</h3>
			<p>
				It is going to be more sophisticated and simple. Stay tuned.
				Coming soon.
			</p>
			<SubscribeForm />
			<div>EMAIL</div>
		</div>
	);
};

export default Home;
