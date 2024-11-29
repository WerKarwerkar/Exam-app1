import React from "react";
import {
  Title,
  MessageContainer,
  StyledLink,
} from "../components/Bookings/BookingConfirmationStyles";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function BookingConfirmation() {
  const { authState } = useAuth();
  const userEmail = authState.email;

  return (
    <div>
      <Title>
        <h1>BOOKING CONFIRMATION</h1>
      </Title>
      <MessageContainer>
        Thank you for booking with us. Within 24h, you will receive a
        confirmation on your email <span>{userEmail}</span> with all the
        details. If not please {""}{" "}
        <StyledLink to="/ContactPage">CONTACT US</StyledLink>.
      </MessageContainer>
    </div>
  );
}

export default BookingConfirmation;
