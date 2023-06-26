import { Header } from '../../Components/Header/Header';
import { NavMenu } from '../../Components/NavMenu/NavMenu';
import { CardBind } from './CardBids';
import { RoutesTitle } from '../RoutesTitle';
import { EthGraph } from '../../Components/Main/Graphics/EthGraph';
import { CircleGraph } from '../../Components/Main/Graphics/CircleGraph';

export function Bids() {
	return (
		<div className='lg:pl-20 lg:pr-14'>
			<Header />
			<div className='lg:flex lg:items-center justify-between lg:gap-48 text-white font-semibold text-lg '>
				<RoutesTitle title='Bids' route='Bids' welcomeMsg='Bids Page' />
				<h1 className='hidden lg:block'>ETH Price</h1>
				<h1 className='hidden lg:block'>Statistics</h1>
			</div>
			<div className='lg:flex gap-10'>
				<div className='px-5 dark:text-white lg:block'>
					<div className='flex flex-col gap-8  basis-2/4'>
						<CardBind amount='24k' category='Artworks' bg='bg-purple-button ' />
						<CardBind amount='24k' category='Auction' bg='bg-bids-green' />
						<CardBind amount='24k' category='Creators' bg='bg-bids-yellow' />
					</div>
				</div>
				<div className='hidden lg:flex gap-7 grow max-h-100'>
					<div className='hidden lg:flex basis-1/2'>
						<EthGraph styleGraph='bg-white dark:bg-elements-bg grow rounded-2xl flex items-center p-2' />
					</div>
					<div className='hidden lg:flex basis-1/2'>
						<CircleGraph styleGraph='flex items-center justify-center grow bg-white dark:bg-elements-bg rounded-2xl p-2 basis-1/2' />
					</div>
				</div>
			</div>
			<NavMenu />
			<div className='hidden lg:block lg:h-full py-14' />
		</div>
	);
}
