import { useState } from 'react';
import { Card } from '../Card/Card';

export function TrendingBids() {
	const [buttonSelected, setButtonSelected] = useState('');
	const cardsRender = [1, 2, 3, 4, 5];
	const backgroundWhenButtonIsSelected = `bg-purple-button rounded-full  transition-[padding]	 duration-300	px-3`;
	function selectButton(text) {
		setButtonSelected(text);
	}

	return (
		<div>
			<nav className='flex gap-20 my-12 text-white justify-between'>
				<h2 className='font-semibold'>Trending Bids</h2>
				<ul className='flex gap-2.5'>
					<li
						className={
							buttonSelected === 'All' ? backgroundWhenButtonIsSelected : ''
						}
					>
						<button
							type='button'
							className='rounded-2xl  click: bg-none'
							onClick={() => selectButton('All')}
						>
							All
						</button>
					</li>
					<li
						className={
							buttonSelected === 'Artwork' ? backgroundWhenButtonIsSelected : ''
						}
					>
						<button
							type='button'
							href='.'
							onClick={() => selectButton('Artwork')}
						>
							Artwork
						</button>
					</li>
					<li
						className={
							buttonSelected === 'Book' ? backgroundWhenButtonIsSelected : ''
						}
					>
						<button type='button' href='.' onClick={() => selectButton('Book')}>
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
