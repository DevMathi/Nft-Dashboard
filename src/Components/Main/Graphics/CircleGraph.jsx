import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
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
export function CircleGraph({ styleGraph }) {
	const graphStyle = `${styleGraph}`;
	return (
		<div className={graphStyle}>
			<Doughnut data={data} />
		</div>
	);
}
