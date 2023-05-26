import './index.css';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';
import { NavMenu } from './Components/NavMenu/NavMenu';

export function App() {
	return (
		<>
			<Header />
			<Main />
			<NavMenu />
		</>
	);
}
