const Feedback = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
  onTotal,
}) => {
  return (
    <div className="feedback">
      <h3>Please leave feedback</h3>

      <button
        type="button"
        onClick={() => {
          onIncrementGood();
          onTotal();
        }}
      >
        Good
      </button>
      <button
        type="button"
        onClick={() => {
          onIncrementNeutral();
          onTotal();
        }}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={() => {
          onIncrementBad();
          onTotal();
        }}
      >
        Bad
      </button>
    </div>
  );
};

export default Feedback;
