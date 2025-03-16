import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  border-radius: 30px;
  padding: 24px 16px 30px;
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
