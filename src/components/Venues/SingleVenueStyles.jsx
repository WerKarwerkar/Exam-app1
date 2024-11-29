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
      font-size: 18px;
    }
  }
`;

export const VenueContainer = styled.div`
  display: flex;
  align-items: stretch;
  gap: 30px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const VenueImage = styled.div`
  img {
    width: calc(100% - 8px);
    height: auto;
    border: 4px solid #63f636;
    margin-bottom: 40px;
  }
`;

export const RightColumn = styled.div`
  flex: 1;
  padding: 20px;
  background-color: transparent;
  border: 2px solid #63f636;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const VenueDetails = styled.div``;

export const VenueTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
  margin-top: 15px;
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const Rating = styled.span`
  background-color: #e55983;
  color: black;
  padding: 5px 15px;
  font-size: 16px;
  font-weight: bold;
`;

export const Location = styled.div`
  font-size: 16px;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: left;
  color: black;

  a {
    color: black;

    &:hover {
      color: #e55983;
      text-decoration: underline;
    }
  }
`;

export const DescriptionText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: black;
  margin-bottom: 40px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: black;
  text-align: left;
  text-decoration: underline;
  text-decoration-color: #e55983;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 10px;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: black;
  margin-bottom: 20px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const Amenities = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  color: black;
  margin-top: 10px;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 768px) {
    margin-bottom: 0px;
    margin-top: 0px;
  }
`;

export const AmenitiesItem = styled.div`
  background-color: transparent;
  border: 2px solid #63f636;
  padding: 5px 15px;
  font-size: 14px;
`;

export const BookButton = styled.button`
  background-color: #e55983;
  color: black;
  font-size: 16px;
  padding: 10px 20px;
  border: 2px solid transparent;
  cursor: pointer;
  align-self: flex-end;
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
    color: #e55983;
    border: 2px solid #e55983;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-top: 20px;
  }
`;

export const DatePickerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  background-color: transparent;
  margin-top: 30px;
  width: 100%;
  box-sizing: border-box;
  outline: none;

  @media (max-width: 768px) {
    flex-direction: row;
    margin-top: 0px;
  }
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  flex: 1;
  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container input {
    width: calc(100% - 20px);
    color: black;
    border: 2px solid #e55983;
    padding: 10px;
    font-size: 14px;
    background-color: transparent;
    text-align: center;
    margin-bottom: 20px;

    &:focus {
      border: 2px solid #e55983;
      border-radius: 0;
      outline: none;
    }

    &::placeholder {
      color: #e55983;
    }
  }

  label {
    font-size: 14px;
    color: #e55983;
  }
`;

export const GuestsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const GuestsLabel = styled.label`
  font-size: 16px;
  color: black;
  text-align: left;
  flex: 0 0 auto;
  text-decoration: underline;
  text-decoration-color: #e55983;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const GuestsInput = styled.input`
  width: 20%;
  padding: 10px;
  font-size: 16px;
  border: 2px solid black;
  box-sizing: border-box;
  color: #e55983;
  background-color: transparent;

  &:focus {
    outline: none;
    border-color: #63f636;
  }

  @media (max-width: 768px) {
    width: 20%;
  }
`;
export const Info = styled.p`
  color: black;
`;
