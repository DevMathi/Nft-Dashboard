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
export function EthGraph() {
	const data = {
		labels: ['', '', ' ', '', '', '', ''],
		datasets: [
			{
				fill: true,
				label: 'Dataset 2',
				data: [0, 100, 180, 150, 140, 200, 250, 300, 350],
				borderColor: '#6F4FF2',
				backgroundColor: '#704ff230',
			},
		],
	};
	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: false,
				position: 'top',
			},
			title: {
				display: false,
				text: 'Chart.js Line Chart',
			},
		},
	};
	return (
		<div>
			<div className='bg-elements-bg rounded-2xl pb-4 px-3 py-8 mb-4'>
				<div>
					<Line data={data} options={options} />
				</div>
			</div>
		</div>
	);
}
