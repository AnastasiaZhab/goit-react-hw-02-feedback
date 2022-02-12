import { Component } from "react/cjs/react.production.min";
import s from "./Counter.module.css";
import Feedback from "./Feedback/Feedback";
import Statistics from "./Statistics/Statistics";

class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  handleIncrementGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  handleIncrementNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleIncrementBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    this.setState((prevState) => ({
      total: prevState.total + 1,
    }));
  };
  countPositiveFeedbackPercentage() {}

  render() {
    return (
      <div className={s.counter}>
        <Feedback
          onIncrementGood={this.handleIncrementGood}
          onIncrementNeutral={this.handleIncrementNeutral}
          onIncrementBad={this.handleIncrementBad}
          onTotal={this.countTotalFeedback}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
        />
      </div>
    );
  }
}

export default Counter;
