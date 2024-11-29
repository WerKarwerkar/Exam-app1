import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  padding: 20px;
  background-color: transparent;
  border: 2px solid black;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-top: 30px;
    padding: 10px;
  }

  h1 {
    font-size: 24px;
    color: black;
    font-weight: bold;
    letter-spacing: 2px;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const MessageContainer = styled.div`
  margin: 20px auto;
  max-width: 100%;
  text-align: center;
  margin-top: 50px;
  font-size: 16px;
  background-color: transparent;
  border: 2px solid black;
  color: black;
  line-height: 2;
  padding: 40px;

  span {
    text-decoration: underline;
    text-decoration-color: #63f636;
  }
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-color: #63f636;
  }
`;
