import { Header } from '../../Components/Header/Header';
import { NavMenu } from '../../Components/NavMenu/NavMenu';
import { RoutesTitle } from '../RoutesTitle';
import avatarImg from '../../assets/settingsImgs/avatar.svg';

export function Settings() {
	return (
		<>
			<Header />
			<RoutesTitle route='Settings' title='Setting' welcomeMsg='Setting Page' />
			<div className='px-5 pb-20'>
				<h2 className='font-semibold text-lg mb-5'>User profile</h2>
				<div className='bg-elements-bg rounded-2xl p-5'>
					<div className='flex flex-col gap-3'>
						<h3 className='font-semilbold'>Full Name</h3>
						<input
							type='text'
							className='outline-none bg-transparent rounded-md border-x-gray-500 border-2 py-1'
						/>
					</div>
					<div className='mt-5 flex items-center gap-3'>
						<div className='bg-blue bg-bg-avatar p-3 rounded-full'>
							<img src={avatarImg} alt='avatarImage' />
						</div>
						<div className='flex flex-col'>
							<h3 className='text-sm font-semibold'>John Smith</h3>
							<p className='text-xs'>Welcome Setting Page</p>
						</div>
					</div>
					<button
						type='button'
						className='py-2 px-5 rounded-xl bg-purple-button mt-5 hover:brightness-75'
					>
						Save
					</button>
				</div>
				<h3 className='my-7 font-semibold'>Update Profile</h3>
				<div className='bg-elements-bg rounded-2xl p-5'>
					<div className='flex flex-col gap-3'>
						<h3 className='font-semilbold'>Email</h3>
						<input
							type='text'
							className='outline-none bg-transparent rounded-md border-x-gray-500 border-2 py-1'
						/>
					</div>
					<div className='flex flex-col gap-3 mt-5'>
						<h3 className='font-semilbold'>Password</h3>
						<input
							type='text'
							className='outline-none bg-transparent rounded-md border-x-gray-500 border-2 py-1'
						/>
					</div>
					<button
						type='button'
						className='py-2 px-5 rounded-xl bg-purple-button mt-5 hover:brightness-75'
					>
						Save
					</button>
				</div>
				<h3 className='my-7 font-semibold'>Personal Information</h3>
				<div className='bg-elements-bg rounded-2xl p-5'>
					<div className='flex flex-col gap-3'>
						<h3 className='font-semilbold'>Info</h3>
						<input
							type='text'
							className='outline-none bg-transparent rounded-md border-x-gray-500 border-2 py-1'
						/>
					</div>
					<div className='flex flex-col gap-3 mt-5'>
						<h3 className='font-semilbold'>Info</h3>
						<input
							type='text'
							className='outline-none bg-transparent rounded-md border-x-gray-500 border-2 py-1'
						/>
					</div>
					<button
						type='button'
						className='py-2 px-5 rounded-xl bg-purple-button mt-5 hover:brightness-75'
					>
						Save
					</button>
				</div>
			</div>
			<NavMenu />
		</>
	);
}
