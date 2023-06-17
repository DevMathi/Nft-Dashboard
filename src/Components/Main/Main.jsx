import { MainCard } from './MainCard';
import { TopNft } from './TopNft';
import { TrendingBids } from './TrendingBids';
import { Header } from '../Header/Header';

export function Main() {
	return (
		<div>
			<div className='ml:px-16'>
				<Header />
			</div>
			<main className='px-5 mt-12 pb-14 ml:px-16 '>
				<div className='sm:px-13 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center'>
					<MainCard />
					<TopNft />
				</div>
				<TrendingBids />
			</main>
		</div>
	);
}
