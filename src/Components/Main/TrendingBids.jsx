import { useEffect, useState } from 'react';
import { Card } from '../Card/Card';

export function TrendingBids() {
	const backgroundWhenButtonIsSelected = {
		all: `left-[-11px] px-5 py-2.5`,
		eth: 'left-[24px] px-6 py-2.5',
		book: 'left-[67px] pl-3 pr-12 py-2.5',
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
	function selectButtonBook() {
		setButtonSelected(backgroundWhenButtonIsSelected.book);
	}
	useEffect(() => {
		console.log(buttonSelected);
	}, [buttonSelected]);

	return (
		<div>
			<nav className='flex text-sm gap-20 my-12 text-white justify-center'>
				<div>
					<h2 className='font-semibold'>Trending Bids</h2>
				</div>
				<ul className='flex gap-5 relative z-1'>
					<div
						className={`absolute w-2 h-2 bg-purple-button rounded-full transition-left ease-in-out delay-50 ${buttonSelected}`}
					/>
					<li className='z-1'>
						<button
							type='button'
							className='rounded-2xl'
							onClick={() => selectButtonAll()}
						>
							All
						</button>
					</li>
					<li className='z-1'>
						<button
							type='button'
							href='.'
							className='rounded-2xl z-1'
							onClick={() => selectButtonEth()}
						>
							ETH
						</button>
					</li>
					<li className='z-1'>
						<button
							type='button'
							href='.'
							className='rounded-2xl z-1'
							onClick={() => selectButtonBook()}
						>
							Book
						</button>
					</li>
				</ul>
			</nav>
			<div>
				{cardsRender.map((value) => (
					<Card key={value} />
				))}
			</div>
		</div>
	);
}
