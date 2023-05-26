import { Button } from '../Buttons/Button';

export function MainCard() {
	return (
		<div className='drop-shadow-lg'>
			<div className='bg-card-background bg-no-repeat rounded-xl bg-cover '>
				<div className='rounded-xl bg-center bg-cover-card-background bg-no-repeat'>
					<div className='p-4'>
						<h1 className=' font-semibold	font-poppins text-white text-2xl'>
							Discover, Collect, Sell <br />
							and Create your NFT
						</h1>
						<h2 className='font-poppins text-sm mt-2.5 text-white'>
							Digital marketplace for crypto collectibles
							<br />
							and non fungable tokens
						</h2>
						<div className='mt-10'>
							<Button text='Explore' px='5' py='2' color='bg-purple-button' />
							<Button text='Explore' px='5' py='2' color='bg-red-button' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
