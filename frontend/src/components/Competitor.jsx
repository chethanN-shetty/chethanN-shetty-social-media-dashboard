function Competitor({ data }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Competitor Comparison</h3>

      <p>Total Posts Analysed: {data.user.length}</p>
      <p>
        Content Types Used: Reel, Post, Carousel
      </p>
    </div>
  );
}

export default Competitor;
