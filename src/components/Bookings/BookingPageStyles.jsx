import styled from "styled-components";

export const BookingContainer = styled.div`
  max-width: 100%;
  margin: 50px auto;
  padding: 20px;
  border: 2px solid black;
  background-color: transparent;

  @media (max-width: 768px) {
    margin: 30px auto;
    padding: 15px;
  }
`;

export const ResortDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const Title = styled.h2`
  color: black;
  border: 2px solid #63f636;
  padding: 10px 20px;
  font-size: 18px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 15px;
  }
`;

export const NameAndRating = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const ResortName = styled.h3`
  color: black;
  font-size: 20px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const RatingText = styled.div`
  color: black;
  font-size: 18px;
  background-color: #e55983;
  padding: 5px 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 4px 8px;
  }
`;

export const LocationText = styled.p`
  color: black;
  font-size: 16px;
  margin: 0;
  text-align: left;
  width: 60%;

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
`;

export const DateSection = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const DateColumn = styled.div`
  text-align: center;

  h4 {
    margin-bottom: 10px;
    color: black;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  p {
    color: black;
    font-size: 16px;
    border: 2px solid #63f636;
    padding: 5px 10px;
    text-align: center;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 14px;
      padding: 4px 8px;
    }
  }
`;

export const SummaryText = styled.p`
  color: black;
  font-size: 18px;
  text-align: center;
  border: 2px solid #63f636;
  padding: 5px 10px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 4px 8px;
  }
`;

export const TotalText = styled.p`
  color: black;
  font-size: 20px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const NoteText = styled.div`
  background-color: #e55983;
  color: black;
  font-size: 14px;
  text-align: center;
  padding: 10px;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px;
  }
`;

export const ConfirmButton = styled.button`
  display: block;
  margin: 0 auto;
  background-color: transparent;
  color: #e55983;
  font-size: 16px;
  padding: 10px 30px;
  border: 2px solid #e55983;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e55983;
    color: transparent;
    color: black;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 20px;
  }
`;
