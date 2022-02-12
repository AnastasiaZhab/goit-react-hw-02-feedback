import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={s.div}>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span className={s.total}>Total: {total}</span>
      <span className={s.feedback}>
        Positive feedback: {Math.round(positivePercentage)} %
      </span>
    </div>
  );
};

export default Statistics;
