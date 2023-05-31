import { Header } from '../../Components/Header/Header';
import { NavMenu } from '../../Components/NavMenu/NavMenu';
import { Card } from '../../Components/Card/Card';
import { RoutesTitle } from '../RoutesTitle';

export function Collections() {
	const cardsRender = [1, 2];
	return (
		<>
			<Header />
			<RoutesTitle
				route='Collections'
				welcomeMsg='Collections Page'
				title='Collections'
			/>
			<div className='px-5 pb-20'>
				{cardsRender.map((value) => (
					<Card key={value} />
				))}
			</div>
			<NavMenu />
		</>
	);
}
