import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function CircleGraph({ styleGraph }) {
	const graphStyle = `${styleGraph}`;
	const data = {
		labels: ['Artwork Sold', 'Artwork Cancel'],
		datasets: [
			{
				data: [50, 50],
				backgroundColor: ['#6F4FF2', '#503d9e1c'],
				borderColor: ['white', 'white'],
				borderWidth: 1,
			},
		],
	};
	const options = {
		responsive: true,
		layout: {
			padding: 10,
			autoPadding: true,
		},
		plugins: {
			title: {
				display: true,
				text: 'Statistics',
				color: 'white',
				font: { weight: 'bold' },
				position: 'top',
				padding: 10,
			},
		},
	};
	return (
		<div className={graphStyle}>
			<Doughnut data={data} options={options} />
		</div>
	);
}
