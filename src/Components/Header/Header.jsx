import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import LogoImg from '../../assets/header-imgs/logo.svg';
import modeIcon from '../../assets/header-imgs/mode.svg';
import bellIcon from '../../assets/header-imgs/bell.svg';
import avatar from '../../assets/header-imgs/avatar.svg';
import searchIcon from '../../assets/header-imgs/search.svg';
import LogoWhite from '../../assets/header-imgs/logowhite.svg';

export function Header() {
	const [theme, setTheme] = useState('light');
	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);
	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};
	return (
		<header className='flex pt-8 justify-center items-center min-[400]:p-1 '>
			<div className='text-center'>
				<Link to='/'>
					<img
						src={theme === 'dark' ? LogoImg : LogoWhite}
						alt='logo'
						className='w-10.75 h-10.75 '
					/>
				</Link>
			</div>
			<div className='relative'>
				<input
					type='text'
					className='bg-white dark:bg-elements-bg py-2.5 px-7.5 w-48 h-12.5 rounded-lg font-poppins placeholder:text-placeholder-input 
        focus: text-white 
        placeholder-input 
        drop-shadow-lg ml-2.5 
        outline-none 
        pl-9
        pr-2
        '
					placeholder='Search Here'
				/>
				<div className='absolute left-3 top-0 h-full flex justify-center items-center'>
					<faMagnifyingGlass />
				</div>
			</div>
			<button
				type='button'
				onClick={handleThemeSwitch}
				className='mx-2.5 h-4.75 w-4.75'
			>
				<img src={modeIcon} alt='icon-mode' />
			</button>
			<button type='button' className='mr-3.5 w-4 h-4.5'>
				<img src={bellIcon} alt='notifications' />
			</button>
			<Link to='/Profile'>
				<img src={avatar} alt='' />
			</Link>
		</header>
	);
}
