import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import './index.css';
import { Bids } from './routes/Bids';
import { Collections } from './routes/Collections';
import { Home } from './routes/Home';
import { Profile } from './routes/Profile';
import { SavedItems } from './routes/SavedItems';
import { Settings } from './routes/Settings';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/Bids', element: <Bids /> },
			{ path: '/Collections', element: <Collections /> },
			{ path: '/Profile', element: <Profile /> },
			{ path: '/SavedItems', element: <SavedItems /> },
			{ path: '/Settings', element: <Settings /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
