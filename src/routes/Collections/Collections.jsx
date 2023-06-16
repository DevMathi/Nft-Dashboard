import { Header } from '../../Components/Header/Header';
import { NavMenu } from '../../Components/NavMenu/NavMenu';
import { Card } from '../../Components/Card/Card';
import { RoutesTitle } from '../RoutesTitle';

export function Collections() {
	const cardsRender = [1, 2, 3, 4, 5, 6];
	return (
		<>
			<div className='ml:px-16'>
				<Header />
				<RoutesTitle
					route='Collections'
					welcomeMsg='Collections Page'
					title='Collections'
				/>
			</div>
			<div className='px-5 mt-12 ml:px-16 sm:px-20 sm:flex sm:justify-between sm:flex-wrap'>
				{cardsRender.map((value) => (
					<Card key={value} />
				))}
			</div>
			<NavMenu />
		</>
	);
}
