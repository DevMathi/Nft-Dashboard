import topNftImage from '../../assets/card-imgs/nft.svg';
import topAvatarImage from '../../assets/avatar/avatarTop.svg';
import onlineImg from '../../assets/card-imgs/online.svg';
import { Button } from '../Buttons/Button';

export function TopNft() {
	return (
		<div className='bg-white dark:bg-elements-bg rounded-2xl mt-5 p-5 pb-70 sm :flex gap-6'>
			<div>
				<img src={topNftImage} alt='topNftImage' />
			</div>
			<div>
				<div className='flex gap-3 items-center dark:text-white  mt-4 mb-4 '>
					<img src={topAvatarImage} alt='topAvatar' />
					<h3 className='font-semibold text-sm'>John Abraham</h3>
					<img src={onlineImg} alt='avatarOnlineIcon' />
				</div>
				<h2 className='text-lg font-semibold dark:text-white mb-5'>
					Birghten Lq
				</h2>
				<div className='flex flex-col gap-4 '>
					<div className='flex text-sm justify-between'>
						<p className='dark:text-white'>Auction time</p>
						<p className='dark:text-white'>
							Current Bid: <span className='text-purple-button'>0.05 ETH</span>
						</p>
					</div>
					<div className='flex justify-between'>
						<span className='text-blue-light'>3h 1m 50s</span>
						<span className='text-blue-light'>0.15 ETH</span>
					</div>
				</div>
				<div className='mt-10 flex justify-center'>
					<Button
						text='Place a Bid'
						px='5'
						py='2'
						anotherStyle='tb:px-10'
						color='bg-purple-button'
					/>
					<Button
						text='Details'
						px='7'
						py='2'
						color='bg-red-button'
						anotherStyle='tb:px-12'
					/>
				</div>
			</div>
		</div>
	);
}
