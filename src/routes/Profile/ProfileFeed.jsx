import avatar from '../../assets/avatar/avatarTop.svg';

export function ProfileFeed() {
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
					className=' bg-bids-red rounded-full  text-sm font-semibold p-1'
				>
					Unfollow
				</button>
			</div>
		</div>
	);
}
