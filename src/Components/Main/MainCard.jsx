import { Button } from '../Buttons/Button';

export function MainCard() {
	return (
		<div className='drop-shadow-lg '>
			<div className='bg-card-background bg-no-repeat rounded-3xl bg-cover'>
				<div className='rounded-3xl bg-center bg-cover-card-background-desk bg-no-repeat bg-cover  tb:p-2 '>
					<div className='p-3'>
						<h1 className=' font-semibold	font-poppins text-white text-2xl'>
							Discover, Collect, Sell <br />
							and Create your NFT
						</h1>
						<h2 className='font-poppins text-sm mt-2.5 text-white'>
							Digital marketplace for crypto collectibles
							<br />
							and non fungable tokens
						</h2>
						<div className='mt-10 '>
							<Button
								text='Explore'
								px='5 '
								py='2'
								color='bg-purple-button'
								anotherStyle='tb:px-8'
							/>
							<Button
								text='Create'
								px='5'
								py='2'
								color='bg-red-button'
								anotherStyle='tb:px-8'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
