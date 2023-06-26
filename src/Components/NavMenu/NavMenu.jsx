import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import bidIcon from '../../assets/nav-imgs/bid.svg';
import collectionIcon from '../../assets/nav-imgs/collection.svg';
import heartIcon from '../../assets/nav-imgs/heart.svg';
import profileIcon from '../../assets/nav-imgs/profile.svg';
import settingsIcon from '../../assets/nav-imgs/setting.svg';
import LogoImg from '../../assets/header-imgs/logo.svg';

export function NavMenu() {
	return (
		<nav className='fixed bottom-0 w-full z-10 lg:h-full lg:left-0 lg:flex lg:w-auto'>
			<div className='bg-white ease-in duration-300 dark:bg-elements-bg flex items-center justify-center gap-9 py-5 w-full tb:py-2 tb:justify-between sm:justify-around lg:flex-col lg:items-center lg:gap-11 lg:justify-start lg:px-2 lg:py-8'>
				<button type='button' className='ml-7 lg:ml-0'>
					<Link to='/Bids'>
						<img src={bidIcon} alt='bidIcon' />
					</Link>
				</button>
				<button type='button'>
					<Link to='/SavedItems'>
						<img src={heartIcon} alt='heartIcon' />
					</Link>
				</button>
				<button type='button'>
					<Link to='/Profile'>
						<img src={profileIcon} alt='profileIcon' />
					</Link>
				</button>
				<button type='button' className='hidden tb:block'>
					<Link to='/'>
						<img src={LogoImg} alt='logo' />
					</Link>
				</button>
				<button type='button'>
					<Link to='/'>
						<AiOutlineHome size={19} color='#65646A' />
					</Link>
				</button>
				<button type='button'>
					<Link to='/Collections'>
						<img src={collectionIcon} alt='collectionIcon' />
					</Link>
				</button>
				<button type='button' className='mr-7 lg:mr-0'>
					<Link to='/Settings'>
						<img src={settingsIcon} alt='settingsIcon' />
					</Link>
				</button>
				<button type='button' className='hidden lg:block'>
					<BiLogOut size={24} color='#65646A' className='mt-80' />
				</button>
			</div>
		</nav>
	);
}
