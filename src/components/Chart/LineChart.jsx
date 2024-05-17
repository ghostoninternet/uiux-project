import { Line } from "react-chartjs-2"
import { LineChartData } from "../../api/LineChartData";
import {Chart,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
} from 'chart.js'

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function LineChart({label = false}) {
    const options = {
            layout: {
                padding: 0
            },
            plugins: {
                legend: {
                    display: label,
                    position: 'bottom',
                    labels: {
                        font: {
                            size: '20',
                            weight: '700',
                        } 
                },
        
            }
        }
    }
  return (
    <Line options={options} data={LineChartData} />
  )
}

export default LineChart