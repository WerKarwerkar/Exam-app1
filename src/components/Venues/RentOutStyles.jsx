import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 2px solid black;
  box-sizing: border-box;
  margin-bottom: 50px;
`;
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
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
      font-size: 18px;
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
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  .row-item {
    flex: 1;
  }

  @media (max-width: 600px) {
    .row-item {
      max-width: 100%;
    }
  }
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: black;
  display: block;
  text-align: left;
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

  &:focus {
    border-color: #e91e63;
  }

  &::placeholder {
    color: #e91e63;
    text-transform: uppercase;
    font-size: 10px;
  }
  &::value {
    text-transform: uppercase;
    color: black;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 2px solid black;
  background-color: transparent;
  font-size: 14px;
  font-family: Monaco, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

  outline: none;
  color: black;
  box-sizing: border-box;

  &:focus {
    border-color: #e91e63;
  }

  &::placeholder {
    color: #e91e63;
    text-transform: uppercase;
    font-size: 10px;
    font-family: Monaco, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  label {
    display: flex;
    align-items: center;
    font-size: 14px;
    text-transform: uppercase;
    color: black;
    cursor: pointer;

    input {
      appearance: none;
      width: 16px;
      height: 16px;
      margin-right: 8px;
      background-color: transparent;
      border: 2px solid #e91e63;
      cursor: pointer;

      &:checked {
        background-color: #e91e63;
        border-color: #e91e63;
      }

      &:focus {
        outline: none;
      }
    }
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
    color: #e91e63;
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

export const ErrorText = styled.span`
  color: #ec1e1e;
  font-size: 12px;
  align-self: flex-start;
  display: block;
`;

export const VenueBookingsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;
  width: 80%;
  margin: 0 auto;
  border: 2px solid black;
  font-size: 16px;
  color: black;
  text-align: center;
  margin-bottom: 50px;

  h2 {
    grid-column: 1;
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    text-decoration: underline;
    text-decoration-color: #63f636;
    text-underline-offset: 4px;
  }

  p {
    margin: 5px 0;
    text-align: left;

    strong {
      color: #e55983;
    }
  }

  hr {
    grid-column: 1;
    border: 1px solid #e55983;
    margin: 10px 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;

    p {
      text-align: center;
    }
  }
`;
