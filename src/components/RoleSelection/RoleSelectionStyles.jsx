import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: transparent;
  border: 2px solid black;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }

  h1 {
    font-size: 24px;
    color: black;
    font-weight: bold;
    letter-spacing: 2px;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;
export const Container = styled.div`
  width: 100%;
  border: 2px solid black;
  box-sizing: border-box;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

export const BackToHomepageLink = styled.div`
  margin-bottom: 20px;

  button {
    background-color: transparent;
    color: black;
    font-size: 14px;
    padding: 10px 20px;
    border: 2px solid #63f636;
    cursor: pointer;

    &:hover {
      background-color: transparent;
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      font-size: 12px;
      padding: 8px 16px;
    }
  }
`;

export const RoleSelectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const RoleButton = styled.button`
  margin-top: 20px;
  padding: 15px 30px;
  font-size: 16px;
  text-transform: uppercase;
  border: 2px solid ${(props) => (props.selected ? "#e55983" : "#e55983")};
  background-color: ${(props) => (props.selected ? "#e55983" : "transparent")};
  color: ${(props) => (props.selected ? "white" : "#e55983")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.selected ? "#d04c73" : "#fce4ec")};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 12px 24px;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  margin-bottom: 50px;
  background-color: #e55983;
  color: black;
  font-size: 16px;
  border: none;
  padding: 15px 30px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
    color: #e91e63;
    border-color: #e55983;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 12px 24px;
  }
`;
