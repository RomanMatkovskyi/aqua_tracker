import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 16px;
  width: 100%;
  border-radius: 30px;
  padding: 24px 16px 67px;
  background-color: var(--background);
`;

export const Logo = styled(Link)`
  display: block;
  margin-bottom: 74px;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  line-height: 111%;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: var(--main);
`;

export const PreTitle = styled.p`
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: 0.06em;
  color: var(--main-text);
`;

export const MainTitle = styled.h1`
  margin-bottom: 32px;
  font-size: 38px;
  line-height: 100%;
  letter-spacing: -0.01em;
  color: var(--main);
`;

export const SignUpBtn = styled(Link)`
  margin-right: 10px;
  border-radius: 30px;
  padding: 14px 19px;
  background-color: var(--accent);
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.01em;
  text-align: center;
  color: var(--main);
`;

export const SignInBtn = styled(Link)`
  border: 1px solid var(--main);
  border-radius: 30px;
  padding: 13px 28px;
  background-color: transparent;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.01em;
  text-align: center;
  color: var(--main);
`;
