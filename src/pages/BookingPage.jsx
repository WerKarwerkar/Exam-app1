import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  BookingContainer,
  ResortDetails,
  Title,
  NameAndRating,
  ResortName,
  RatingText,
  LocationText,
  DateSection,
  DateColumn,
  SummaryText,
  TotalText,
  NoteText,
  ConfirmButton,
} from "../components/Bookings/BookingPageStyles";
import { useVenue } from "../Context/VenueContext";

function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addBooking } = useVenue();

  const { venue, details } = location.state || {};
  const { location: venueLocation, rating, meta, name } = venue || {};
  const { city, country } = venueLocation || {};

  const checkinDate = new Date(details.dateFrom).toLocaleDateString();
  const checkoutDate = new Date(details.dateTo).toLocaleDateString();
  const totalPrice = `$${details.price}`;
  const totalNights = details.time;

  const handleConfirm = () => {
    addBooking({
      dateFrom: details.dateFrom,
      dateTo: details.dateTo,
      guests: details.guests,
      venueId: venue.id,
    });
    navigate("/BookingConfirmation", { state: { venue, details } });
  };

  return (
    <BookingContainer>
      <ResortDetails>
        <Title>YOUR RESORT DETAILS</Title>

        <NameAndRating>
          <ResortName>HOTEL: {name}</ResortName>
          <RatingText>{rating ? rating.toFixed(1) : "-"}</RatingText>
        </NameAndRating>

        <LocationText>
          {city && city}
          {city && country && ", "}
          {country && country}
        </LocationText>

        <DateSection>
          <DateColumn>
            <h4>Check-In</h4>
            <p>{checkinDate}</p>
          </DateColumn>
          <DateColumn>
            <h4>Check-Out</h4>
            <p>{checkoutDate}</p>
          </DateColumn>
        </DateSection>

        <SummaryText>
          {totalNights} Nights / {details.guests} Guests
        </SummaryText>
        <TotalText>TOTAL: {totalPrice}</TotalText>
        <NoteText>No payment today. Free cancellation.</NoteText>
        <ConfirmButton type="button" onClick={handleConfirm}>
          CONFIRM
        </ConfirmButton>
      </ResortDetails>
    </BookingContainer>
  );
}

export default BookingPage;
