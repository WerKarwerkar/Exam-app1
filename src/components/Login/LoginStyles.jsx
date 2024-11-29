import styled from "styled-components";

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
  box-sizing: border-box;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
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
    text-align: center;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const FormContainer = styled.form`
  background-color: transparent;
  padding: 40px;
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 20px;
  width: 100%;
  text-align:left;
  }
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: black;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid black;
  background-color: transparent;
  font-size: 14px;
  outline: none;
  color: black;
  box-sizing: border-box;

  &::placeholder {
    text-transform: uppercase;
    font-size: 10px;
    color: #e91e63;
    background-color: transparent;
  }

  &:focus {
    border-color: #e91e63;
  }
`;

export const SubmitButton = styled.button`
  background-color: #e55983;
  color: black;
  font-size: 14px;
  border: none;
  padding: 15px 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background-color: transparent;
    color: black;
    border: 2px solid #e55983;
  }
`;

export const BackToHomepageLink = styled.div`
  display: flex;
  justify-content: left;
  margin-bottom: 20px;

  button {
    background-color: transparent;
    color: black;
    font-size: 14px;
    padding: 10px 20px;
    border: 2px solid #63f636;
    cursor: pointer;
    transition: all 0.3s ease;

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

export const RegisterText = styled.div`
  text-align: center;
  font-size: 14px;
  color: black;
  margin-top: 20px;

  a {
    color: blue;
    text-decoration: underline;
    transition: color 0.3s ease;

    &:hover {
      color: #0056b3;
    }
  }
`;

export const ErrorText = styled.span`
  color: #ec1e1e;
  font-size: 12px;
  align-self: flex-start;
  display: block;
`;
