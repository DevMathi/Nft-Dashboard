import { useRef, useState } from 'react';
import { Header } from '../../Components/Header/Header';
import { NavMenu } from '../../Components/NavMenu/NavMenu';
import { RoutesTitle } from '../RoutesTitle';
import avatarImg from '../../assets/settingsImgs/avatar.svg';

export function Settings() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const [userName, setUserName] = useState('John Smith');

	const inputEmail = useRef();

	const nameInput = useRef('');

	const [error, setError] = useState(false);

	const [lessThenZero, setLessThenZero] = useState(false);

	function setName() {
		if (nameInput.current.value.length > 10) {
			setError(true);
			setLessThenZero(false);
		} else if (nameInput.current.value.length === 0) {
			setLessThenZero(true);
			setError(false);
		} else {
			setLessThenZero(false);
			setError(false);
			setUserName(nameInput.current.value);
			nameInput.current.value = '';
		}
	}
	function changeModalVisibility() {
		setModalIsOpen(!modalIsOpen);
	}
	return (
		<>
			<Header />
			<RoutesTitle route='Settings' title='Setting' welcomeMsg='Setting Page' />
			<div className='px-5 pb-20 dark:text-white '>
				<div className='lg:grid lg:gap-11 lg:grid-cols-2 flex flex-col gap-5'>
					<div className='  bg-white dark:bg-elements-bg rounded-2xl p-5 lg:flex lg:flex-col lg:justify-around'>
						<h2 className='font-semibold text-lg mb-5'>User profile</h2>
						<div className='flex flex-col gap-3'>
							<h3 className='font-semilbold'>Full Name</h3>
							<input
								type='text'
								className='outline-none bg-transparent rounded-md border-gray-500 focus:outline-none focus:border-purple-button border-2 py-1 px-2'
								placeholder='Digite seu nome aqui'
								ref={nameInput}
							/>
							{error ? (
								<p className='text-xs text-red-400'>
									O nome deve conter no maximo 10 letras
								</p>
							) : (
								''
							)}
							{lessThenZero ? (
								<p className='text-xs text-red-400'>
									O nome deve conter no mínimo uma letra
								</p>
							) : (
								''
							)}
						</div>
						<div className='mt-5 flex items-center gap-3'>
							<div className='bg-blue bg-bg-avatar p-3 rounded-full'>
								<img src={avatarImg} alt='avatarImage' />
							</div>
							<div className='flex flex-col'>
								<h3 className='text-sm font-semibold'>{userName}</h3>
								<p className='text-xs'>Welcome Setting Page</p>
							</div>
						</div>
						<div>
							<button
								type='button'
								className='focus:outline-2 focus:outline-black py-2 px-5 rounded-xl bg-purple-button mt-5 hover:brightness-75 text-white'
								onClick={setName}
							>
								Save
							</button>
						</div>
					</div>
					<div className=' bg-white dark:bg-elements-bg rounded-2xl p-5 '>
						<h3 className='my-7 font-semibold '>Update Profile</h3>
						<div className='flex flex-col gap-3 '>
							<h3 className='font-semilbold'>Email</h3>
							<input
								type='text'
								className='px-2 outline-none bg-transparent rounded-md border-gray-500 focus:outline-none focus:border-purple-button border-2 py-1'
								ref={inputEmail}
							/>
						</div>
						<div className='flex flex-col gap-3 mt-5'>
							<h3 className='font-semilbold'>Password</h3>
							<input
								type='text'
								className='px-2 outline-none bg-transparent rounded-md focus:outline-none focus:border-purple-button border-gray-500 border-2 py-1'
							/>
						</div>
						<button
							type='button'
							className='focus:outline-2 focus:outline-black py-2 px-5 rounded-xl bg-purple-button mt-5 hover:brightness-75 text-white'
							onClick={changeModalVisibility}
						>
							Save
						</button>
					</div>
				</div>

				<h3 className='my-7 font-semibold'>Personal Information</h3>
				<div className=' bg-white dark:bg-elements-bg rounded-2xl p-5'>
					<div className='flex flex-col gap-3'>
						<h3 className='font-semilbold'>Info</h3>
						<input
							type='text'
							className='outline-none bg-transparent rounded-md focus:outline-none focus:border-purple-button border-gray-500 border-2 py-1 px-2'
						/>
					</div>
					<div className='flex flex-col gap-3 mt-5'>
						<h3 className='font-semilbold'>Info</h3>
						<input
							type='text'
							className='px-2 outline-none bg-transparent rounded-md focus:outline-none focus:border-purple-button border-gray-500 border-2 py-1'
						/>
					</div>
					<button
						type='button'
						className='py-2 px-5 focus:outline-2 focus:outline-black rounded-xl bg-purple-button mt-5 hover:brightness-75 text-white'
					>
						Save
					</button>
				</div>
			</div>
			<NavMenu />
		</>
	);
}
