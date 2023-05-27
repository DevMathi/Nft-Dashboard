import { Link } from 'react-router-dom';
import bidIcon from '../../assets/nav-imgs/bid.svg';
import collectionIcon from '../../assets/nav-imgs/collection.svg';
import heartIcon from '../../assets/nav-imgs/heart.svg';
import profileIcon from '../../assets/nav-imgs/profile.svg';
import settingsIcon from '../../assets/nav-imgs/setting.svg';
import signOutIcon from '../../assets/nav-imgs/signout.svg';

export function NavMenu() {
	return (
		<nav className='fixed bottom-0 w-full'>
			<div className='bg-elements-bg flex items-center gap-9 py-5 w-full'>
				<button type='button' className='ml-7'>
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
				<button type='button'>
					<Link to='/Collections'>
						<img src={collectionIcon} alt='collectionIcon' />
					</Link>
				</button>
				<button type='button'>
					<Link to='/Settings'>
						<img src={settingsIcon} alt='settingsIcon' />
					</Link>
				</button>
				<button type='button' className='mr-7'>
					<img src={signOutIcon} alt='signOutIcon' />
				</button>
			</div>
		</nav>
	);
}
