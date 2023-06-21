import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsMoon } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import bellIcon from '../../assets/header-imgs/bell.svg';
import avatar from '../../assets/header-imgs/avatar.svg';

export function Header() {
	const [theme, setTheme] = useState(
		localStorage.getItem('theme') !== 'dark' ? 'light' : 'dark'
	);
	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		localStorage.setItem('theme', theme);
	}, [theme]);
	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};
	return (
		<header className='flex ml:justify-between pt-8 justify-center items-center min-[400]:p-1 px-5'>
			<div className='text-center items-center flex ml:gap-5'>
				<div className='relative'>
					<input
						type='text'
						className='bg-white ease-in duration-200 dark:bg-elements-bg py-2.5 px-7.5 w-48 ml:w-64 h-12.5 rounded-lg font-poppins placeholder:text-placeholder-input 
					focus:outline-none focus:border-purple-button focus:border-2 transition-none
        focus: dark:text-white 
        placeholder-input 
        drop-shadow-lg ml-2.5 
				ml:ml-0
				ml:pl-12
				border-2
				border-transparent
        outline-none 
        pl-10
        pr-2
        '
						placeholder='Search Here'
					/>
					<div className='absolute left-3 top-0 h-full flex justify-center items-center'>
						<AiOutlineSearch
							size={24}
							className='text-gray-500 dark:text-white ease-in duration-300'
						/>
					</div>
				</div>
			</div>

			<div className='flex'>
				<button
					type='button'
					onClick={handleThemeSwitch}
					className='mx-2.5 h-4.75 w-4.75'
				>
					{theme === 'dark' ? (
						<FiSun color='white' size={19} />
					) : (
						<BsMoon color='white' size={19} />
					)}
				</button>
				<button type='button' className='mr-3.5 w-4 h-4.5'>
					<img src={bellIcon} alt='notifications' />
				</button>
				<Link to='/Profile'>
					<img src={avatar} alt='' />
				</Link>
			</div>
		</header>
	);
}
