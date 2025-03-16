import styled from "styled-components";
import AdvantageImage from "../../assets/advantage.jpg";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  position: relative;
  width: 343px;
  height: 353px;
  border-radius: 30px;
  background-image: url(${AdvantageImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const FeedbackWrapper = styled.div`
  position: absolute;
  top: 209px;
  left: 16px;
  text-align: center;
  width: 160px;
  padding: 10px 14px;
  border-radius: 30px;
  background-color: var(--main-white);
  box-shadow: 0 4px 50px 0 rgba(0, 0, 0, 0.1);

  & p {
    font-weight: 700;
    font-size: 12px;
    line-height: 117%;
    color: var(--main);
  }

  & span {
    color: var(--accent);
  }
`;

export const AdvantageWrapper = styled.div`
  position: absolute;
  top: 265px;
  left: 159px;
  width: 168px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

export const HabitLink = styled(Link)`
  font-weight: 700;
  font-size: 8px;
  line-height: 100%;
  letter-spacing: -0.01em;
  text-align: center;
  color: var(--main-white);
  text-decoration: none;
  border-radius: 30px;
  padding: 9px 12px;
  background-color: var(--main);
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -10px;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: var(--accent);
  }
`;

export const StatisticsLink = styled(Link)`
  font-weight: 700;
  font-size: 8px;
  line-height: 100%;
  letter-spacing: -0.01em;
  text-align: center;
  color: var(--main);
  text-decoration: none;
  border-radius: 30px;
  padding: 9px 12px;
  background-color: var(--accent);
`;

export const RateLink = styled(Link)`
  font-weight: 700;
  font-size: 8px;
  line-height: 100%;
  letter-spacing: -0.01em;
  text-align: center;
  color: var(--main);
  text-decoration: none;
  border-radius: 30px;
  padding: 9px 12px;
  background-color: var(--main-white);
`;
