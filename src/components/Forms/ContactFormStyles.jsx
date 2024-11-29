import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
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
    letter-spacing: 2px;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  border: 2px solid black;
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

    @media (max-width: 768px) {
      font-size: 12px;
    }

    &:hover {
      background-color: transparent;
      text-decoration: underline;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  width: 100%;
  max-width: 700px;
  text-align: left;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  text-align: left;
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: black;
  display: block;

  @media (max-width: 768px) {
    font-size: 12px;
  }
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
    color: #e91e63;
    text-transform: uppercase;
    font-size: 10px;
    @media (max-width: 768px) {
      font-size: 8px;
    }
  }
  &:focus {
    border-color: #e91e63;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 2px solid black;
  background-color: transparent;
  font-size: 14px;
  outline: none;
  color: black;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 10px;
  }

  &::placeholder {
    color: #e91e63;
    text-transform: uppercase;
    font-size: 10px;

    @media (max-width: 768px) {
      font-size: 8px;
    }
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
  border: 2px solid transparent;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  &:hover {
    background-color: transparent;
    color: #e91e63;
    border-color: #e55983;
  }
`;

export const ErrorText = styled.span`
  color: #ec1e1e;
  font-size: 12px;
  align-self: flex-start;
`;
