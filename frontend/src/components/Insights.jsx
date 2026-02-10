function Insights({ insights }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>AI Insights</h3>
      <ul>
        {insights.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Insights;
