import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 2px solid black;
  box-sizing: border-box;
  padding: 20px;
  background-color: transparent;
  margin-bottom: 50px;
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
    margin-top: 50px;
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
      font-size: 14px;
    }
  }
`;

export const AvatarSection = styled.div`
  text-align: center;
  margin-bottom: 20px;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid black;
    object-fit: cover;
  }

  form {
    margin-top: 30px;

    input {
      padding: 10px;
      width: 40%;
      border: 2px solid #e55983;
      color: black;
      background-color: transparent;

      @media (max-width: 768px) {
        font-size: 10px;
      }

      &::placeholder {
        color: #e55983;
      }

      &:focus {
        border: 2px solid #e55983;
        outline: none;
      }
    }

    button {
      padding: 10px 10px;
      border: 2px solid transparent;
      background-color: #e55983;
      color: black;
      font-size: 14px;
      cursor: pointer;
      text-align: center;
      transition: all 0.3s ease;

      @media (max-width: 768px) {
        font-size: 10px;
      }

      &:hover {
        background-color: transparent;
        color: #e55983;
        border: 2px solid #e55983;
      }
    }
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Customer_BookinList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  width: 80%;
  margin: 0 auto;
  border: 2px solid black;
  font-size: 16px;
  color: black;
  text-align: center;

  h3 {
    grid-column: 1 / -1;
    text-align: center;
    font-size: 18px;
    margin-bottom: 10px;
    text-decoration: underline;
    text-decoration-color: #63f636;
    text-underline-offset: 4px;
  }

  p {
    margin: 5px 0;
  }

  h4 {
    grid-column: 1 / -1;
    text-align: center;

    span {
      color: #c84135;
      text-decoration: underline;
      text-decoration-color: #c84135;
    }
  }

  button {
    grid-column: 1 / -1;
    padding: 10px 10px;
    border: 2px solid #e55983;
    background-color: transparent;
    color: black;
    cursor: pointer;
    width: 30%;
    margin: 0 auto;
    transition: all 0.3s ease;

    &:hover {
      background-color: #e55983;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;

    p {
      text-align: center;
    }
  }
`;

export const Manager_BookinList = styled.div`
  padding: 15px;
  border: 2px solid black;
  font-size: 16px;
  font-weight: bold;
  color: black;
  text-align: center;

  h3 {
    font-size: 18px;
    text-transform: uppercase;
    text-decoration: underline;
    text-decoration-color: #63f636;
    text-underline-offset: 4px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  button {
    grid-column: 1 / -1;
    padding: 10px 10px;
    border: 2px solid #e55983;
    background-color: transparent;
    color: black;
    cursor: pointer;
    width: 30%;
    margin: 0px auto;
    transition: all 0.3s ease;

    &:hover {
      background-color: #e55983;
    }
  }
`;

export const SeeAllButton = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  color: black;
  font-size: 14px;
  border: 2px solid #63f636;
  cursor: pointer;
  text-align: center;
  margin: 20px auto;
  width: 40%;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 8px 16px;
    margin: 10px auto;
  }

  &:hover {
    background-color: transparent;
    border: 2px solid #e55983;
  }
`;

export const Info = styled.p`
  color: black;
`;

export const UserTitle = styled.h2`
  color: black;
  border: 2px solid #63f636;
  width: 30%;
  margin: 40px auto;
  text-align: center;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Status = styled.p``;
