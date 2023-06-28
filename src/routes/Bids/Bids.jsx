import { Header } from '../../Components/Header/Header';
import { NavMenu } from '../../Components/NavMenu/NavMenu';
import { CardBind } from './CardBids';
import { RoutesTitle } from '../RoutesTitle';
import { EthGraph } from '../../Components/Main/Graphics/EthGraph';
import { CircleGraph } from '../../Components/Main/Graphics/CircleGraph';
import { Activities } from './Activities';
import { Creators } from './Creators';

export function Bids() {
	const repeater = [1, 2, 3, 4];
	const topCreatosRepeater = [1, 2, 3, 4, 5, 6, 7, 8];
	return (
		<div className='lg:pl-20 lg:pr-14 pb-4'>
			<Header />
			<div className='lg:flex lg:items-center justify-between lg:gap-48 text-white font-semibold text-lg '>
				<RoutesTitle title='Bids' route='Bids' welcomeMsg='Bids Page' />
			</div>
			<div className='lg:flex gap-10'>
				<div className='px-5 dark:text-white lg:block'>
					<div className='flex flex-col gap-6 lg:gap-12  basis-2/4'>
						<CardBind amount='24k' category='Artworks' bg='bg-purple-button ' />
						<CardBind amount='24k' category='Auction' bg='bg-bids-green' />
						<CardBind amount='24k' category='Creators' bg='bg-bids-yellow' />
					</div>
				</div>
				<div className='hidden lg:flex gap-7 grow '>
					<div className='hidden lg:flex basis-1/2'>
						<EthGraph styleGraph='bg-white dark:bg-elements-bg grow rounded-2xl flex items-center ' />
					</div>
					<div className='hidden lg:flex basis-1/2'>
						<CircleGraph styleGraph='flex items-center justify-center grow bg-white dark:bg-elements-bg rounded-2xl p-2 basis-1/2 max-h-full' />
					</div>
				</div>
			</div>
			<div className='hidden lg:flex mt-8 pl-6 gap-16'>
				<div className='basis-2/4'>
					<div className='mb-11 pl-5 flex justify-between'>
						<h1 className='text-white'>Recent Activity</h1>
						<a href='.' className='text-purple-button hover:underline'>
							See More..
						</a>
					</div>
					<div className='flex flex-col gap-3'>
						{repeater.map(() => (
							<Activities />
						))}
					</div>
				</div>
				<div className='grow'>
					<div className='mb-11 pl-5 flex justify-between'>
						<h1 className='text-white'>Top Creators</h1>
					</div>
					<div className='flex flex-wrap gap-5'>
						{topCreatosRepeater.map(() => (
							<Creators />
						))}
					</div>
				</div>
			</div>
			<NavMenu />
		</div>
	);
}
