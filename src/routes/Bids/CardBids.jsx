import bidIcon from '../../assets/bidsImgs/artwork.svg';

export function CardBind({ amount, category, bg }) {
	const bgColor = `${bg} py-5 px-5 rounded-full`;
	return (
		<div className='flex gap-5 bg-white dark:bg-elements-bg rounded-3xl drop-shadow-lg lg:pl-5 lg:py-1 lg:px-24'>
			<div className='flex py-5 pl-5 gap-5  lg:gap-6 '>
				<div className={bgColor}>
					<img src={bidIcon} alt='' />
				</div>
				<div className='flex flex-col justify-center'>
					<h1 className='text-2xl'>{amount}</h1>
					<p className='text-sm text-placeholder-input'>{category}</p>
				</div>
			</div>
		</div>
	);
}
