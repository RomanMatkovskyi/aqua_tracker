import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginCompWrapper = styled.div`
  border-radius: 30px;
  padding: 24px 16px 216px;
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

export const LoginFormTitle = styled.h2`
  margin-bottom: 32px;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: -0.01em;
  color: var(--main);
`;

export const FormTitle = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.01em;
  color: var(--main-text);
`;

export const FormInput = styled.input`
  width: 100%;
  margin-bottom: 16px;
  padding: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.01em;
  color: rgba(47, 47, 47, 0.6);
  border: 1px solid rgba(47, 47, 47, 0.2);
  border-radius: 15px;

  &.isLast {
    margin-bottom: 32px;
  }
`;

export const LoginBtn = styled.button`
  margin-bottom: 16px;
  padding: 16px 130px;
  font-weight: 700;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.01em;
  text-align: center;
  color: var(--main);

  cursor: pointer;
  border-radius: 30px;
  background-color: var(--accent);
  border: none;
  transition: background-color 0.5s ease-in-out;

  &:hover {
    background-color: var(--hover);
  }
`;

export const SignUpWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;

  & p {
    font-weight: 400;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.01em;
    color: rgba(47, 47, 47, 0.5);
  }
`;

export const SignUpLink = styled(Link)`
  font-weight: 700;
  text-decoration: underline;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.01em;
  color: var(--main-text);
`;
