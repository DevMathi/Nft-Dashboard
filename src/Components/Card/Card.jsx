import cardImg from '../../assets/card-imgs/nftPurple.svg';

export function Card() {
	return (
		<div className='bg-white ease-in duration-300 dark:bg-elements-bg rounded-2xl my-5 p-5 pb-70'>
			<div>
				<img
					src={cardImg}
					alt='topNftImage'
					className='min-w-full rounded-3xl'
				/>
			</div>
			<h2 className='font-semibold text-lg dark:text-white my-5'>
				Liquid Wave
			</h2>
			<div className='flex flex-col'>
				<div className='text-sm dark:text-white flex justify-between'>
					<p>Auction time</p>
					<p>Current Bid</p>
				</div>
				<div className='text-end my-2.5'>
					<span className='text-purple-button text-sm '>0.05 ETH</span>
				</div>
				<div className='text-blue-light flex justify-between'>
					<span>3h 1m 50s</span>
					<span>0.15ETH</span>
				</div>
			</div>
			<div className='flex justify-center mt-7'>
				<button
					type='button'
					className='bg-purple-button px-16 py-3.5 rounded-xl text-white font-semibold text-sm'
				>
					Place a Bid
				</button>
			</div>
		</div>
	);
}
