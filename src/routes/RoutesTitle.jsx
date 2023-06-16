import { Link } from 'react-router-dom';

export function RoutesTitle({ title, route, welcomeMsg }) {
	return (
		<div className='flex  dark:text-white flex-col mt-12 gap-1 mb-8 px-5'>
			<div>
				<h1 className='font-semibold text-2xl '>{title}</h1>
			</div>
			<div className='flex gap-5 justify-between'>
				<p className='text-sm'>Welcome {welcomeMsg}</p>
				<div className='flex gap-3'>
					<Link
						to='/'
						className='text-sm hover:text-white ease-in duration-200 text-blue-light'
					>
						Home
					</Link>
					<span className='font-extrabold text-sm'>{'>'}</span>
					<span className='underline decoration-2 text-sm text-blue-light'>
						{route}
					</span>
				</div>
			</div>
		</div>
	);
}
