import bidIcon from '../../assets/bidsImgs/artwork.svg';

export function CardBind({ amount, category, bg }) {
	const bgColor = `${bg} py-5 px-5 rounded-full`;
	return (
		<div className='flex gap-5 py-4 px-5 bg-elements-bg rounded-full drop-shadow-lg'>
			<div className={bgColor}>
				<img src={bidIcon} alt='' />
			</div>
			<div className='flex flex-col justify-center'>
				<h1>{amount}</h1>
				<p className='text-sm text-placeholder-input'>{category}</p>
			</div>
		</div>
	);
}
