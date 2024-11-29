import styled from "styled-components";

export const OuterTitleContainer = styled.div`
  text-align: center;
  border: 2px solid black;
  margin-top: 50px;
`;

export const FormTitle = styled.h1`
  font-size: 24px;
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Container = styled.div`
  width: 100%;
  border-right: 2px solid black;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  box-sizing: border-box;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
  padding: 20px;
  margin-top: 100px;
  border: 2px solid black;
  background-color: transparent;
  text-align: center;
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

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const VenueContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 40px;
  max-width: 100%;
  border: 2px solid black;
  background-color: #transparent;
  margin-bottom: 70px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    padding: 20px;
  }
`;

export const VenueImage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 20px);

  img {
    cursor: pointer;
    border: 4px solid #63f636;

    object-fit: cover;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
  }

  @media (max-width: 768px) {
    order: 1;
    width: 100%;
  }
`;

export const VenueInfo = styled.div`
  flex: 1;
  padding: 20px;
  border: 2px solid black;
  color: black;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    order: 2;
  }
`;

export const VenueHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
`;

export const VenueTitle = styled.h3`
  font-size: 20px;
  color: black;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Rating = styled.div`
  font-size: 18px;
  color: black;
  background-color: #e55983;
  padding: 8px 12px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 10px;
  }
`;

export const VenueLocation = styled.a`
  font-size: 16px;
  color: black;
  text-decoration: underline;
  cursor: pointer;
  text-align: left;

  &:hover {
    color: #e55983;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const VenueDescription = styled.p`
  font-size: 16px;
  color: black;
  line-height: 2;
  text-align: justify;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const ShowPricesButton = styled.button`
  background-color: #e55983;
  color: black;
  font-size: 16px;
  padding: 10px 20px;
  border: 2px solid transparent;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
    color: #e55983;
    border: 2px solid #e55983;
  }

  @media (max-width: 768px) {
    align-self: center;
    font-size: 12px;
    padding: 8px 16px;
  }
`;

export const Info = styled.p`
  color: black;
`;
