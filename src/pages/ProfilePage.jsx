import React, { useState, useEffect } from "react";
import {
  Container,
  PageContainer,
  Title,
  Customer_BookinList,
  Manager_BookinList,
  AvatarSection,
  SeeAllButton,
  Info,
  UserTitle,
} from "../components/Profile/ProfileStyles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useVenue } from "../Context/VenueContext";

function Profile() {
  const navigate = useNavigate();
  const { authState, setAvatar } = useAuth();
  const { userVenues, userBookings, fetchUserInfo } = useVenue();

  const [viewMode, setViewMode] = useState("venues");

  useEffect(() => {
    fetchUserInfo();
  }, [authState]);

  const userBookingsParsed = userBookings
    .flatMap((item) => {
      const booking = item;
      const venue = booking.venue;

      if (booking.customer.email === authState.email) {
        const timeDiff = Math.abs(
          new Date(booking.dateTo) - new Date(booking.dateFrom)
        );
        const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        const price = days * booking.guests * venue.price;

        return {
          ...booking,
          venueId: venue.id,
          price,
          venueName: venue.name,
        };
      }
      return [];
    })
    .sort((a, b) => new Date(a.dateFrom) - new Date(b.dateFrom));

  const handleAvatarChange = async (e) => {
    e.preventDefault();
    const newAvatar = e.target.elements.avatarInput.value.trim();

    const isValidUrl =
      newAvatar.startsWith("http://") ||
      newAvatar.startsWith("https://") ||
      newAvatar.slice(-5).includes(".");

    if (!isValidUrl) {
      alert(
        "The URL must be valid, start with 'https://' or 'http://', and contain a '.{file_format}' in the last 5 characters."
      );
      return;
    }

    if (newAvatar) {
      try {
        await setAvatar(newAvatar);
        alert("Avatar updated successfully!");
      } catch (err) {
        alert(`Failed to update avatar: ${err.message}`);
      }
    }

    e.target.reset();
  };

  const renderManagerContent = () => {
    if (viewMode === "venues") {
      return userVenues.length > 0 ? (
        userVenues.map((venue) => (
          <Manager_BookinList key={venue.id}>
            <h3>{venue.name}</h3>
            <SeeAllButton onClick={() => navigate(`/RentOut/${venue.id}`)}>
              VIEW DETAILS
            </SeeAllButton>
          </Manager_BookinList>
        ))
      ) : (
        <Info>No venues found for this user 😞</Info>
      );
    }

    return userBookingsParsed.length > 0 ? (
      userBookingsParsed.map((booking, index) => (
        <Customer_BookinList key={booking.id}>
          <h3>BOOKING {index + 1}</h3>
          <p>VENUE: {booking.venueName}</p>
          <p>
            DATE: {new Date(booking.dateFrom).toLocaleDateString()} -{" "}
            {new Date(booking.dateTo).toLocaleDateString()}
          </p>
          <p>GUESTS: {booking.guests}</p>
          <p>PRICE: ${booking.price}</p>
          <h4>
            STATUS: <span>NOT PAID YET</span>
          </h4>{" "}
          <button onClick={() => navigate(`/SingleVenue/${booking.venueId}`)}>
            SEE VENUE
          </button>
        </Customer_BookinList>
      ))
    ) : (
      <Info>You have no bookings yet 😞</Info>
    );
  };

  const renderCustomerContent = () => {
    return userBookingsParsed.length > 0 ? (
      userBookingsParsed.map((booking, index) => (
        <Customer_BookinList key={booking.id}>
          <h3>BOOKING {index + 1}</h3>
          <p>VENUE: {booking.venueName}</p>
          <p>
            DATE: {new Date(booking.dateFrom).toLocaleDateString()} -{" "}
            {new Date(booking.dateTo).toLocaleDateString()}
          </p>
          <p>GUESTS: {booking.guests}</p>
          <p>TOTAL PRICE: ${booking.price}</p>
          <h4>
            STATUS: <span>NOT PAID YET</span>
          </h4>
          <button onClick={() => navigate(`/SingleVenue/${booking.venueId}`)}>
            SEE VENUE
          </button>
        </Customer_BookinList>
      ))
    ) : (
      <Info>You have no bookings yet 😞</Info>
    );
  };

  return (
    <>
      <Title>
        <h1>
          YOUR PROFILE {authState.venueManager === true ? "MANAGER" : "USER"}
        </h1>
      </Title>

      <Container>
        <AvatarSection>
          <img src={authState?.avatar?.url} alt="User Avatar" />
          <form onSubmit={handleAvatarChange}>
            <input
              type="text"
              name="avatarInput"
              placeholder="Paste image URL here"
            />
            <button type="submit">CHANGE AVATAR</button>
          </form>
          {!authState.venueManager && <UserTitle>YOUR BOOKINGS:</UserTitle>}
        </AvatarSection>

        <PageContainer>
          {authState.venueManager && (
            <SeeAllButton
              onClick={() =>
                setViewMode((prev) =>
                  prev === "venues" ? "bookings" : "venues"
                )
              }
            >
              {viewMode === "venues" ? "VIEW BOOKINGS" : "VIEW VENUES"}
            </SeeAllButton>
          )}

          {authState.venueManager
            ? renderManagerContent()
            : renderCustomerContent()}
        </PageContainer>
      </Container>
    </>
  );
}

export default Profile;
