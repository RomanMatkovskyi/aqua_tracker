import { Link } from "react-router-dom";
import {
  Wrapper,
  FeedbackWrapper,
  AdvantageWrapper,
  HabitLink,
  StatisticsLink,
  RateLink,
} from "./Advantage.styled";
const Advantage = () => {
  return (
    <Wrapper>
      <FeedbackWrapper>
        <p>
          Our <span>happy</span> customers
        </p>
      </FeedbackWrapper>
      <AdvantageWrapper>
        <HabitLink>Habit drive</HabitLink>
        <StatisticsLink>View statistics</StatisticsLink>
        <RateLink>Personal rate setting</RateLink>
      </AdvantageWrapper>
    </Wrapper>
  );
};

export default Advantage;
