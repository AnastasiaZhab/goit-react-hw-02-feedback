const Feedback = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
  onTotal,
  posFeed,
}) => {
  return (
    <div className="feedback">
      <button
        type="button"
        onClick={() => {
          onIncrementGood();
          onTotal();
          posFeed();
        }}
      >
        Good
      </button>
      <button
        type="button"
        onClick={() => {
          onIncrementNeutral();
          onTotal();
          posFeed();
        }}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={() => {
          onIncrementBad();
          onTotal();
          posFeed();
        }}
      >
        Bad
      </button>
    </div>
  );
};

export default Feedback;
