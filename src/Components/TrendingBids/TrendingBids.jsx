import { useEffect, useRef, useState } from 'react';
import { Card } from '../Card/Card';

export function TrendingBids() {
	const [isSelected, setIsSelected] = useState('');
	const optionSelected = useRef();
	useEffect(() => {
		console.log(optionSelected.HTML);
	}, [optionSelected]);

	return (
		<div>
			<nav className='flex gap-20 my-12 text-white'>
				<h2 className='font-semibold'>Trending Bids</h2>
				<ul className='flex gap-2.5'>
					<li className={isSelected ? 'bg-purple-button' : ''}>
						<a href='.' ref={optionSelected} className='rounded-2xl'>
							All
						</a>
					</li>
					<li className={isSelected ? 'bg-purple-button' : ''}>
						<a href='.' ref={optionSelected}>
							Artwtok
						</a>
					</li>
					<li className={isSelected ? 'bg-purple-button' : ''}>
						<a href='.' ref={optionSelected}>
							Book
						</a>
					</li>
				</ul>
			</nav>
			<div>
				<Card />
			</div>
		</div>
	);
}
