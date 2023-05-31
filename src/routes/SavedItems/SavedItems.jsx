import { Header } from '../../Components/Header/Header';
import { NavMenu } from '../../Components/NavMenu/NavMenu';
import { RoutesTitle } from '../RoutesTitle';
import { Card } from '../../Components/Card/Card';

export function SavedItems() {
	const cardsRender = [1, 2];
	return (
		<>
			<Header />
			<RoutesTitle route='Saved' welcomeMsg='Saved Page' title='Saved Items' />
			<div className='px-5 pb-20'>
				{cardsRender.map((value) => (
					<Card key={value} />
				))}
			</div>
			<NavMenu />
		</>
	);
}
