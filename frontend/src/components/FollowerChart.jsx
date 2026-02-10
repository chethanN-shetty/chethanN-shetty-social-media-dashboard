import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

function FollowerChart({ userData, competitorData }) {
  const labels = userData.map(item => item.date).reverse();

  const data = {
    labels,
    datasets: [
      {
        label: "Your Followers",
        data: userData.map(item => item.followers).reverse(),
        tension: 0.4,
      },
      {
        label: "Competitor Followers",
        data: competitorData.map(item => item.followers).reverse(),
        tension: 0.4,
      },
    ],
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h3>Follower Growth Trend</h3>
      <Line data={data} />
    </div>
  );
}

export default FollowerChart;
