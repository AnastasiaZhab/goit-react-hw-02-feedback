import { Component } from "react/cjs/react.production.min";
import "./App.css";
import Feedback from "./components/Counter/Feedback/Feedback";
import Statistics from "./components/Counter/Statistics/Statistics";
import Section from "./components/Counter/Section/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
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
  countPositiveFeedbackPercentage = () => {
    this.setState((prevState) => ({
      positivePercentage: (100 / prevState.total) * prevState.good,
    }));
  };

  render() {
    return (
      <Section children={(Feedback, Statistics)}>
        <Feedback
          onIncrementGood={this.handleIncrementGood}
          onIncrementNeutral={this.handleIncrementNeutral}
          onIncrementBad={this.handleIncrementBad}
          onTotal={this.countTotalFeedback}
          posFeed={this.countPositiveFeedbackPercentage}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.state.total}
          positivePercentage={this.state.positivePercentage}
        />
      </Section>
    );
  }
}

export default App;
