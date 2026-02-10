import { useEffect, useState } from "react";
import { fetchComparison } from "../api";
import Insights from "./Insights";
import FollowerChart from "./FollowerChart";

function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Fetch data from backend when page loads
  useEffect(() => {
    fetchComparison("mybrand", "brandx")
      .then((response) => {
        setData(response);
      })
      .catch(() => {
        setError("Failed to load data from backend");
      });
  }, []);

  // Error state
  if (error) {
    return <p>{error}</p>;
  }

  // Loading state
  if (!data) {
    return <p>Loading analytics...</p>;
  }

  // Get latest follower counts
  const userFollowers =
    data.user[data.user.length - 1].followers;

  const competitorFollowers =
    data.competitor[data.competitor.length - 1].followers;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Social Media Performance & Competitor Analysis</h2>

      {/* Follower numbers */}
      <p>
        <strong>Your Followers:</strong> {userFollowers}
      </p>

      <p>
        <strong>Competitor Followers:</strong> {competitorFollowers}
      </p>

      {/* Follower Growth Trend Chart */}
      <FollowerChart
        userData={data.user}
        competitorData={data.competitor}
      />

      {/* AI Insights */}
      <Insights insights={data.insights} />

      <p style={{ marginTop: "10px", fontStyle: "italic" }}>
        Insights are generated using rule-based analysis on recent trends.
      </p>
    </div>
  );
}

export default Dashboard;
