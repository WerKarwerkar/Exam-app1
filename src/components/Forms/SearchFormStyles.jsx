import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  background-color: transparent;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const SearchSubtitle = styled.h2`
  font-size: 16px;
  color: #e55983;
  letter-spacing: 1px;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #e55983;
  background-color: transparent;
  color: #e91e63;
  outline: none;
  box-sizing: border-box;
  text-align: left;

  &::placeholder {
    color: #e91e63;
    text-transform: uppercase;
    font-size: 12px;

    @media (max-width: 768px) {
      font-size: 10px;
    }
  }

  &:focus {
    border-color: #e91e63;
  }
`;

export const SearchButton = styled.button`
  background-color: #e55983;
  color: black;
  font-size: 14px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border: 2px solid transparent;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
    color: #e91e63;
    border-color: #e55983;
  }
`;
