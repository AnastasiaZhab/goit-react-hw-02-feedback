import s from "./Feedback.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.div}>
      {options.map((option) => (
        <button
          type="button"
          className={s.button}
          onClick={onLeaveFeedback}
          name={option}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
