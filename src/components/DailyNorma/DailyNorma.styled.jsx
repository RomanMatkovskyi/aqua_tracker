import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
  border-radius: 30px;
  padding: 24px 16px 30px;
  background-color: var(--accent);
`;

export const Logo = styled(Link)`
  display: block;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  line-height: 111%;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: var(--main);
`;

export const BottleImg = styled.img`
  display: block;
  margin-top: 8px;
  margin-left: auto;
  margin-right: auto;
`;

export const NormaWrapper = styled.div`
  position: absolute;
  top: 122px;
  left: 16px;
  border-radius: 15px;
  padding: 12px;
  width: 102px;
  box-shadow: 0 4px 50px 0 rgba(0, 0, 0, 0.1);
  background-color: var(--main-white);

  & h2 {
    margin-bottom: 6px;
    font-size: 14px;
    line-height: 100%;
    color: var(--main);
  }

  & p {
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;
    color: rgba(47, 47, 47, 0.6);
  }
`;

export const SliderWrapper = styled.div`
  position: absolute;
  top: 225px;
  left: 73px;
  width: 198px;
  padding: 12px;
  border-radius: 15px;
  box-shadow: 0 4px 50px 0 rgba(0, 0, 0, 0.1);
  background-color: var(--main-white);

  & h2 {
    font-size: 14px;
    line-height: 100%;
    color: var(--main);
  }

  & input {
    width: 100%;
    margin-bottom: 8px;
  }
`;

export const AddWaterBtn = styled.button`
  position: absolute;
  right: 16px;
  bottom: 32px;
  width: 140px;
  padding: 14px 20px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.01em;
  text-align: center;
  color: var(--main-white);
  background-color: var(--main);
  border: none;
  cursor: pointer;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: color 0.2s ease-in-out;

  &::before {
    content: '+';
  }

  &:hover {
    color: var(--accent);
  }
`;
