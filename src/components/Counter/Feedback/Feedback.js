import s from "./Feedback.module.css";

const Feedback = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
  onTotal,
  posFeed,
}) => {
  return (
    <div className={s.div}>
      <button
        type="button"
        className={s.button}
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
        className={s.button}
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
        className={s.button}
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
