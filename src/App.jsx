import './index.css';
import { createContext } from 'react';
import { Home } from './routes/Home';

export function App() {
	const states = createContext();
	return (
		<states.Provider value={states}>
			<Home />
		</states.Provider>
	);
}
