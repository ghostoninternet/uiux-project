import { Bar } from 'react-chartjs-2';
import { BarChartData } from '../../api/BarChartData';
import {Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

Chart.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);

function BarChart() {
  return (
    <Bar options={{
        plugins: {
            legend: {
                display: false 
            },
        }
    }} data={BarChartData} />
  )
}

export default BarChart