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
        plugins: {
            legend: {
                display: label 
            }
        }
    }

  return (
    <Line options={options} data={LineChartData} />
  )
}

export default LineChart