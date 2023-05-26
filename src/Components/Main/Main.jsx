import { MainCard } from '../MainCard/MainCard';
import { TopNft } from '../TopNft/TopNft';
import { TrendingBids } from '../TrendingBids/TrendingBids';

export function Main() {
	return (
		<main className='px-5 mt-12'>
			<MainCard />
			<TopNft />
			<TrendingBids />
		</main>
	);
}
