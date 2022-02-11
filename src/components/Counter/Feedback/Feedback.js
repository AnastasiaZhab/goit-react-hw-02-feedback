const Feedback = ({ onIncrementGood, onIncrementNeutral, onIncrementBad }) => {
  return (
    <div className="feedback">
      <h3>Please leave feedback</h3>

      <button type="button" onClick={onIncrementGood}>
        Good
      </button>
      <button type="button" onClick={onIncrementNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onIncrementBad}>
        Bad
      </button>
    </div>
  );
};

export default Feedback;
