import { useState } from 'react';
import avatarImg from '../../assets/avatar/avatarTop.svg';

export function Creators() {
	const randomNumber = Math.floor(Math.random() * 10);
	const [followState, setFollowState] = useState(false);
	const changeFollowState = () => {
		setFollowState(!followState);
	};
	return (
		<div className='bg-white dark:bg-elements-bg  flex items-center py-4 rounded-xl justify-between px-3 basis-2/3 max-w-lg'>
			<div className='flex '>
				<div>
					<img src={avatarImg} alt='avatar-icon' />
				</div>
				<div
					className='
						ml-4 '
				>
					<h1 className='dark:text-white'>Papaya</h1>
					<p className='dark:text-white'>{randomNumber} items</p>
				</div>
			</div>

			<div>
				<button
					type='button'
					className='dark:text-white border-2 border-purple-button rounded-md px-3 hover:bg-purple-900 '
					onClick={changeFollowState}
				>
					{followState ? 'Unfollow' : 'Follow'}
				</button>
			</div>
		</div>
	);
}
