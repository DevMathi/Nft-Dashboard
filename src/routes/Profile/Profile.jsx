import { Header } from '../../Components/Header/Header';
import { NavMenu } from '../../Components/NavMenu/NavMenu';
import { RoutesTitle } from '../RoutesTitle';
import padlockImg from '../../assets/profile-imgs/padlock.svg';
import verifyIcon from '../../assets/profile-imgs/verify-icon.svg';
import avatar from '../../assets/avatar/avatarTop.svg';
import { ProfileFeed } from './ProfileFeed';
import { BoughtCard } from './BoughtCard';

export function Profile() {
	const usersFollowing = [1, 2, 3, 4, 5];
	return (
		<div className='lg:pl-10'>
			<div className='ml:px-16'>
				<Header />
				<RoutesTitle
					route='Profile'
					title='Profile'
					welcomeMsg='Profile Page'
				/>
			</div>
			<div className='px-5 pb-20 dark:text-white ml:px-16'>
				<div className='bg-white dark:bg-elements-bg flex flex-col px-5 py-7 rounded-3xl drop-shadow-lg'>
					<div className='mb-3'>
						<img src={avatar} alt='' className=' rounded-full border-2' />
					</div>
					<div className='mb-10'>
						<h1 className='font-semibold text-lg'>Welcome, Jhon Smith</h1>
						<p className='text-sm'>
							Looks like you are not verified yet. Verify yourself to use the
							full potential of Xtrader.
						</p>
					</div>
					<div className='flex flex-col gap-8'>
						<div className='flex gap-3 items-center'>
							<div className='text-center bg-bids-green p-2 rounded-full'>
								<img src={verifyIcon} alt='' />
							</div>
							<h2 className='text-sm text-purple-button'>Verify account</h2>
						</div>
						<hr className='border-1 border-border-color' />
						<div className='flex gap-3 items-center'>
							<div className='bg-purple-button p-2 rounded-full'>
								<img src={padlockImg} alt='' />
							</div>
							<h2 className='text-sm text-purple-button'>
								Two-factor Authentication ( 2FA )
							</h2>
						</div>
					</div>
				</div>
				<div>
					<h1 className='my-8'>Following</h1>
					{usersFollowing.map((value) => (
						<ProfileFeed key={value} />
					))}
				</div>
				<h2 className='my-8 font-semibold text-lg'>My Bought</h2>
				<div className='px-5 mt-12 pb-14 sm:flex sm:justify-between sm:flex-wrap'>
					{usersFollowing.map((value) => (
						<BoughtCard key={value} />
					))}
				</div>
			</div>
			<NavMenu />
		</div>
	);
}
