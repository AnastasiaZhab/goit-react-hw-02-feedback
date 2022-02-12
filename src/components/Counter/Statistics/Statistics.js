import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positiveFeed }) => {
  return (
    <div className={s.statistics}>
      <h3>Statistics</h3>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Total: {total}</span>
      <span>Positive feedback: {Math.round(positiveFeed)} %</span>
    </div>
  );
};

export default Statistics;
