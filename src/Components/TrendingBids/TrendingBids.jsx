import { useState } from 'react';
import { Card } from '../Card/Card';

export function TrendingBids() {
	const [buttonSelected, setButtonSelected] = useState('');
	const cardsRender = [1, 2, 3, 4, 5];
	const backgroundWhenButtonIsSelected = `bg-purple-button rounded-full  transition-all ease-linear	 duration-700	px-2`;
	function selectButton(text) {
		setButtonSelected(text);
	}

	return (
		<div>
			<nav className='flex text-sm gap-20 my-12 text-white'>
				<div>
					<h2 className='font-semibold'>Trending Bids</h2>
				</div>
				<ul className='flex gap-1'>
					<li
						className={
							buttonSelected === 'All' ? backgroundWhenButtonIsSelected : 'px-1'
						}
					>
						<button
							type='button'
							className='rounded-2xl'
							onClick={() => selectButton('All')}
						>
							All
						</button>
					</li>
					<li
						className={
							buttonSelected === 'Artwork'
								? backgroundWhenButtonIsSelected
								: 'px-1'
						}
					>
						<button
							type='button'
							href='.'
							className='rounded-2xl'
							onClick={() => selectButton('Artwork')}
						>
							Artwork
						</button>
					</li>
					<li
						className={
							buttonSelected === 'Book'
								? backgroundWhenButtonIsSelected
								: 'px-1'
						}
					>
						<button
							type='button'
							href='.'
							className='rounded-2xl'
							onClick={() => selectButton('Book')}
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
