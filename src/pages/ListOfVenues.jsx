import React from "react";
import { useNavigate } from "react-router-dom";
import { useVenue } from "../Context/VenueContext";
import SearchForm from "../components/Forms/SearchForm";
import {
  Title,
  VenueContainer,
  VenueImage,
  VenueInfo,
  VenueHeader,
  VenueTitle,
  VenueLocation,
  VenueDescription,
  Rating,
  ShowPricesButton,
  Info,
} from "../components/Venues/ListOfVenuesStyles";
import replace from "../assets/PalmSprings1.jpeg";
import {
  Container,
  OuterTitleContainer,
  FormTitle,
} from "../components/Venues/ListOfVenuesStyles";

function ListOfVenues() {
  const { searchVenues, loading, error } = useVenue();
  const navigate = useNavigate();

  const handleShowPricesClick = (id) => {
    navigate(`/SingleVenue/${id}`);
  };

  if (loading) {
    return <p>Loading venues...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <OuterTitleContainer>
        <FormTitle>ANYWHERE YOU DREAM!</FormTitle>
      </OuterTitleContainer>
      <Container>
        <SearchForm />
      </Container>
      <Title>
        <h1>ALL THE VENUES</h1>
      </Title>
      {searchVenues.length > 0 ? (
        searchVenues.map((venue) => (
          <VenueContainer key={venue.id}>
            <VenueImage onClick={() => handleShowPricesClick(venue.id)}>
              <img
                src={
                  venue.media && venue.media.length > 0
                    ? venue.media[0].url
                    : replace
                }
                alt={
                  venue.media && venue.media.length > 0
                    ? venue.media[0].alt
                    : "Replace picture"
                }
              />
            </VenueImage>
            <VenueInfo>
              <VenueHeader>
                <VenueTitle>{venue.name}</VenueTitle>
                <Rating>{venue.rating ? venue.rating.toFixed(1) : "-"}</Rating>
              </VenueHeader>
              <VenueLocation
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${venue.location?.city}, ${venue.location?.country}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {venue.location?.city}, {venue.location?.country}
              </VenueLocation>
              <VenueDescription>{venue.description}</VenueDescription>
              <ShowPricesButton onClick={() => handleShowPricesClick(venue.id)}>
                SHOW PRICES
              </ShowPricesButton>
            </VenueInfo>
          </VenueContainer>
        ))
      ) : (
        <Info>No venues found.</Info>
      )}
    </div>
  );
}

export default ListOfVenues;
