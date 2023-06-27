import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);
export function EthGraph({ styleGraph }) {
	const data = {
		labels: ['', '', ' ', '', '', '', ''],
		datasets: [
			{
				fill: true,
				label: 'ETH Price',
				data: [0, 100, 180, 150, 140, 200, 250, 300, 350],
				borderColor: '#6F4FF2',
				backgroundColor: '#704ff230',
			},
		],
	};
	const options = {
		responsive: true,
		layout: {
			padding: 20,
			autoPadding: true,
		},
		plugins: {
			legend: {
				display: false,
				position: 'top',
			},
			title: {
				display: true,
				text: 'ETH Price',
				color: 'white',
				font: { weight: 'bold' },
				position: 'top',
				padding: 0,
			},
		},
	};
	return (
		<div className={styleGraph}>
			<Line data={data} options={options} />
		</div>
	);
}
