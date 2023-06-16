import { Header } from '../../Components/Header/Header';
import { NavMenu } from '../../Components/NavMenu/NavMenu';
import { RoutesTitle } from '../RoutesTitle';
import { Card } from '../../Components/Card/Card';

export function SavedItems() {
	const cardsRender = [1, 2, 3, 4, 5, 6];
	return (
		<>
			<div className='ml:px-16'>
				<Header />
				<RoutesTitle
					route='Saved'
					welcomeMsg='Saved Page'
					title='Saved Items'
				/>
			</div>
			<div className='px-5 mt-12  pb-14 ml:px-16 sm:flex sm:justify-between sm:flex-wrap'>
				{cardsRender.map((value) => (
					<Card key={value} />
				))}
			</div>
			<NavMenu />
		</>
	);
}
