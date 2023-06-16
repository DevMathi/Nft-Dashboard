import { useState } from 'react';
import { Card } from '../Card/Card';
import { EthGraph } from './Graphics/EthGraph';
import { CircleGraph } from './Graphics/CircleGraph';

export function TrendingBids() {
	const backgroundWhenButtonIsSelected = {
		all: `left-[-11px] px-5 py-2.5`,
		eth: 'left-[24px] px-6 py-2.5',
		stt: 'left-[72px] pl-3 pr-7 py-2.5',
	};
	const [buttonSelected, setButtonSelected] = useState(
		backgroundWhenButtonIsSelected.all
	);
	const cardsRender = [1, 2, 3, 4, 5];
	function selectButtonAll() {
		setButtonSelected(backgroundWhenButtonIsSelected.all);
	}
	function selectButtonEth() {
		setButtonSelected(backgroundWhenButtonIsSelected.eth);
	}
	function selectButtonStt() {
		setButtonSelected(backgroundWhenButtonIsSelected.stt);
	}

	return (
		<div>
			<nav className='flex text-sm gap-20 my-12  justify-center'>
				<div>
					<h2 className='font-semibold text-xl dark:text-white'>
						{buttonSelected === backgroundWhenButtonIsSelected.all
							? 'Trending Bids'
							: ''}
						{buttonSelected === backgroundWhenButtonIsSelected.eth
							? 'ETH Price'
							: ''}
						{buttonSelected === backgroundWhenButtonIsSelected.stt
							? 'Statistics'
							: ''}
					</h2>
				</div>
				<ul className='flex gap-5 relative z-1'>
					<div
						className={`absolute w-2 h-2 bg-purple-button rounded-full transition-left ease-in-out delay-50 ${buttonSelected}`}
					/>
					<li className='z-1'>
						<button
							type='button'
							className={
								buttonSelected === backgroundWhenButtonIsSelected.all
									? 'rounded-2xl text-white dark:text-black'
									: 'rounded-2xl dark:text-white'
							}
							onClick={() => selectButtonAll()}
						>
							All
						</button>
					</li>
					<li className='z-1'>
						<button
							type='button'
							href='.'
							className={
								buttonSelected === backgroundWhenButtonIsSelected.eth
									? 'rounded-2xl text-white dark:text-black'
									: 'rounded-2xl dark:text-white'
							}
							onClick={() => selectButtonEth()}
						>
							ETH
						</button>
					</li>
					<li className='z-1'>
						<button
							type='button'
							href='.'
							className={
								buttonSelected === backgroundWhenButtonIsSelected.stt
									? 'rounded-2xl text-white dark:text-black'
									: 'rounded-2xl dark:text-white'
							}
							onClick={() => selectButtonStt()}
						>
							STT
						</button>
					</li>
				</ul>
			</nav>
			<div>
				{buttonSelected === backgroundWhenButtonIsSelected.eth ? (
					<EthGraph />
				) : (
					' '
				)}
				{buttonSelected === backgroundWhenButtonIsSelected.all ? (
					<div className='sm:flex sm:justify-between sm:flex-wrap'>
						{cardsRender.map((value) => (
							<Card key={value} />
						))}
					</div>
				) : (
					' '
				)}
				{buttonSelected === backgroundWhenButtonIsSelected.stt ? (
					<CircleGraph />
				) : (
					' '
				)}
			</div>
		</div>
	);
}
