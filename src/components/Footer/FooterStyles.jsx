import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  border: 2px solid black;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    text-align: center;
    padding: 20px;
  }
`;

export const Logo = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 75px;
    width: auto;
    padding-left: 20px;
    padding-right: 20px;

    @media (max-width: 768px) {
      height: 40px;
      padding: 0;
    }
  }

  @media (max-width: 768px) {
    grid-column: 1 / 2;
    grid-row: 1;
  }
`;

export const FooterNavigation = styled.div`
  grid-column: 2 / 5;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  p {
    text-decoration: none;
    color: black;
    font-size: 16px;
    margin-bottom: 15px;
    margin-top: 15px;
    align-self: center;

    @media (max-width: 768px) {
      font-size: 12px;
      margin: 5px 0;
    }
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 16px;
    line-height: 1;
    margin-bottom: 15px;
    margin-top: 15px;
    align-self: center;

    &:hover {
      border-bottom: 2px solid #60f931;
    }

    @media (max-width: 768px) {
      font-size: 12px;
      margin: 5px 0;
    }
  }

  @media (max-width: 768px) {
    grid-column: 1 / 2;
    grid-template-columns: 1fr;
    grid-template-rows: auto;

    div {
      align-items: center;
      text-align: center;
    }
  }
`;
