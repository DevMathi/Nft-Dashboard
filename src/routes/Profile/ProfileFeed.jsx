import { useState } from 'react';
import avatar from '../../assets/avatar/avatarTop.svg';

export function ProfileFeed() {
	const [followStatus, setFollowStatus] = useState(true);
	const greenButton = `bg-green-500 rounded-full text-black text-sm font-semibold p-1`;
	const redButton = `bg-bids-red rounded-full text-white-100 text-sm font-semibold p-1`;
	function changeButtonColor() {
		setFollowStatus(!followStatus);
	}
	return (
		<div className='bg-elements-bg flex gap-4 py-5 px-5 rounded-xl items-center justify-between drop-shadow-lg my-5'>
			<div className='flex gap-3'>
				<img src={avatar} alt='AvatarImage' />
				<div>
					<h1 className='font-semibold'>Papaya</h1>
					<p>60 items</p>
				</div>
			</div>
			<div className='flex items-center'>
				<button
					type='button'
					className={followStatus ? greenButton : redButton}
					onClick={changeButtonColor}
				>
					{followStatus ? 'Follow' : 'Unfollow'}
				</button>
			</div>
		</div>
	);
}
