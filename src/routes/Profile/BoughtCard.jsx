import cardImg from '../../assets/card-imgs/nftPurple.svg';
import avatar from '../../assets/avatar/avatarTopBig.svg';

export function BoughtCard() {
	return (
		<div className='bg-elements-bg p-5 flex flex-col gap-3 rounded-2xl mb-7'>
			<div className='relative'>
				<img src={cardImg} alt='cardImage' className='rounded-3xl ' />
				<img
					src={avatar}
					alt='AvatarImage'
					className='absolute right-12 -bottom-7'
				/>
			</div>
			<div>
				<h3 className='font-semibold text-lg'>Liquid Wave</h3>
			</div>
		</div>
	);
}
