import bidIcon from '../../assets/nav-imgs/bid.svg';
import collectionIcon from '../../assets/nav-imgs/collection.svg';
import dashboardIcon from '../../assets/nav-imgs/dashboard.svg';
import heartIcon from '../../assets/nav-imgs/heart.svg';
import profileIcon from '../../assets/nav-imgs/profile.svg';
import settingsIcon from '../../assets/nav-imgs/setting.svg';
import signOutIcon from '../../assets/nav-imgs/signout.svg';

export function NavMenu() {
	return (
		<nav className='fixed bottom-0 w-full'>
			<div className='bg-elements-bg flex items-center gap-9 py-5 w-full'>
				<button type='button' className='ml-7'>
					<img src={dashboardIcon} alt='dashboardIcon' />
				</button>
				<button type='button'>
					<img src={bidIcon} alt='bidIcon' />
				</button>
				<button type='button'>
					<img src={heartIcon} alt='heartIcon' />
				</button>
				<button type='button'>
					<img src={profileIcon} alt='profileIcon' />
				</button>
				<button type='button'>
					<img src={collectionIcon} alt='collectionIcon' />
				</button>
				<button type='button'>
					<img src={settingsIcon} alt='settingsIcon' />
				</button>
				<button type='button' className='mr-7'>
					<img src={signOutIcon} alt='signOutIcon' />
				</button>
			</div>
		</nav>
	);
}
