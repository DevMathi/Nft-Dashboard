import avatarImg from '../../assets/avatar/avatarTop.svg';

export function Activities() {
	return (
		<div className='bg-white dark:bg-elements-bg px-5 flex items-center py-5 rounded-xl'>
			<img src={avatarImg} alt='avatar-icon' />
			<div className='ml-5'>
				<h1 className='font-semibold dark:text-white'>Papaya</h1>
				<p className='dark:text-white'>Purchase by you for 0.05 ETH</p>
			</div>
			<div className='ml-14'>
				<span className='text-placeholder-input'>12 mins ago</span>
			</div>
		</div>
	);
}
