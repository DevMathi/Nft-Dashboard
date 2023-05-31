import { Header } from '../../Components/Header/Header';
import { NavMenu } from '../../Components/NavMenu/NavMenu';
import { CardBind } from './CardBids';
import { RoutesTitle } from '../RoutesTitle';

export function Bids() {
	return (
		<>
			<Header />
			<RoutesTitle title='Bids' route='Bids' welcomeMsg='Bids Page' />
			<div className='px-5 pb-20'>
				<div className='flex gap-5 flex-col'>
					<CardBind amount='24k' category='Artworks' bg='bg-purple-button' />
					<CardBind amount='24k' category='Auction' bg='bg-bids-green' />
					<CardBind amount='24k' category='Creators' bg='bg-bids-yellow' />
					<CardBind amount='24k' category='Canceled' bg='bg-bids-red' />
				</div>
			</div>
			<NavMenu />
		</>
	);
}
