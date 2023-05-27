import { MainCard } from './MainCard';
import { TopNft } from './TopNft';
import { TrendingBids } from './TrendingBids';

export function Main() {
	return (
		<main className='px-5 mt-12 pb-14'>
			<MainCard />
			<TopNft />
			<TrendingBids />
		</main>
	);
}
