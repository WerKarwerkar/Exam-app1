import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useVenue } from "../Context/VenueContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  Title,
  VenueContainer,
  LeftColumn,
  RightColumn,
  VenueImage,
  VenueDetails,
  VenueTitle,
  Rating,
  Location,
  DescriptionText,
  Description,
  Paragraph,
  Amenities,
  BookButton,
  AmenitiesItem,
  DatePickerContainer,
  DatePickerWrapper,
  GuestsContainer,
  GuestsInput,
  GuestsLabel,
  Info,
} from "../components/Venues/SingleVenueStyles";
import { useAuth } from "../Context/AuthContext";

function SingleVenue() {
  const { id } = useParams();
  const { fetchSingleVenue } = useVenue();
  const navigate = useNavigate();
  const { authState } = useAuth();

  const [venue, setVenue] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [calculatedPrice, setPrice] = useState(0);
  const [days, setDays] = useState(0);

  useEffect(() => {
    const loadVenue = async () => {
      try {
        const fetchedVenue = await fetchSingleVenue(id);
        if (!fetchedVenue) {
          throw new Error("Venue not found");
        }
        setVenue(fetchedVenue);
      } catch (error) {
        console.error("Error fetching venue:", error);
        navigate("/");
      }
    };

    loadVenue();
  }, [id, fetchSingleVenue, navigate]);

  useEffect(() => {
    if (startDate && endDate && venue) {
      const timeDiff = Math.abs(endDate - startDate);
      const calculatedDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      setDays(calculatedDays);
      setPrice(calculatedDays * venue.price * guests);
    } else {
      setDays(0);
      setPrice(0);
    }
  }, [startDate, endDate, venue, guests]);

  const mergedIntervals = () => {
    if (!venue || !venue.bookings || venue.bookings.length === 0) return [];

    const today = new Date();
    const intervals = venue.bookings
      .map((booking) => ({
        start: new Date(booking.dateFrom),
        end: new Date(booking.dateTo),
      }))
      .filter((interval) => interval.end >= today)
      .sort((a, b) => a.start - b.start);

    const merged = [];
    let current = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
      const next = intervals[i];
      if ((next.start - current.end) / (1000 * 60 * 60 * 24) <= 1) {
        current.end = next.end;
      } else {
        merged.push(current);
        current = next;
      }
    }
    merged.push(current);
    return merged;
  };

  const excludedIntervals = mergedIntervals();

  const getMaxEndDate = () => {
    if (!startDate) return null;

    for (let interval of excludedIntervals) {
      if (startDate < interval.start) {
        return new Date(interval.start.setDate(interval.start.getDate() - 1));
      }
    }
    return null;
  };

  const maxEndDate = getMaxEndDate();

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setEndDate(null);
  };

  const isDateExcluded = (date) => {
    if (!excludedIntervals || excludedIntervals.length === 0) return false;

    for (let i = 0; i < excludedIntervals.length; i++) {
      const interval = excludedIntervals[i];
      if (date >= interval.start && date <= interval.end) {
        return true;
      }

      if (
        i < excludedIntervals.length - 1 &&
        date >= interval.end &&
        date < excludedIntervals[i + 1].start
      ) {
        const daysToNextStart =
          (excludedIntervals[i + 1].start - date) / (1000 * 60 * 60 * 24);
        if (daysToNextStart < 2) {
          return true;
        }
      }
    }
    return false;
  };

  if (!venue) {
    return <Info>Unable to find venue data 😞</Info>;
  }

  return (
    <div>
      <Title>
        <h1>{venue.name}</h1>
      </Title>
      <VenueContainer>
        <LeftColumn>
          {venue.media.map((image, index) => (
            <VenueImage key={index}>
              <img src={image.url || ""} alt={image.alt || "Venue image"} />
              <img src={image.url || ""} alt={image.alt || "Venue image"} />
            </VenueImage>
          ))}
        </LeftColumn>

        <RightColumn>
          <VenueDetails>
            <VenueTitle>
              {venue.name}
              <Rating>{venue.rating ? venue.rating.toFixed(1) : "-"}</Rating>
            </VenueTitle>
            <Location>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  venue.location.city + ", " + venue.location.country
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {venue.location.city || ""} {venue.location.country || ""}
              </a>
            </Location>
            <DescriptionText>{venue.description || ""}</DescriptionText>
            <Description>
              Venue owner: {venue.owner.name + " - " + venue.owner.email}
            </Description>

            <Description>Maximum Guests: {venue.maxGuests}</Description>

            <GuestsContainer>
              <GuestsLabel htmlFor="guests">Number of Guests:</GuestsLabel>
              <GuestsInput
                type="number"
                id="guests"
                min="1"
                max={venue.maxGuests}
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
              />
            </GuestsContainer>

            <Description>
              Price: {calculatedPrice} for {days} days ({venue.price} per
              day/person)
            </Description>
            <DatePickerContainer>
              <DatePickerWrapper>
                <label>
                  <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                </label>

                <DatePicker
                  selected={startDate}
                  onChange={handleStartDateChange}
                  placeholderText="Check in"
                  minDate={new Date()}
                  filterDate={(date) => !isDateExcluded(date)}
                />
              </DatePickerWrapper>

              <DatePickerWrapper>
                <label>
                  <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                </label>

                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  placeholderText="Check out"
                  minDate={
                    startDate
                      ? new Date(
                          new Date(startDate).setDate(
                            new Date(startDate).getDate() + 1
                          )
                        )
                      : new Date()
                  }
                  maxDate={maxEndDate || null}
                />
              </DatePickerWrapper>
            </DatePickerContainer>
            <Amenities>
              {Object.entries(venue.meta).map(([key, value], index) =>
                value ? (
                  <AmenitiesItem key={index}>{key.toUpperCase()}</AmenitiesItem>
                ) : null
              )}
            </Amenities>
            <BookButton
              onClick={() => {
                if (
                  startDate &&
                  endDate &&
                  authState &&
                  authState.email !== " "
                ) {
                  navigate("/BookingPage", {
                    state: {
                      venue: venue,
                      details: {
                        dateFrom: startDate,
                        dateTo: endDate,
                        guests: guests,
                        time: days,
                        price: calculatedPrice,
                      },
                    },
                  });
                } else {
                  if (!authState || !authState.email) {
                    alert("Please log in to book a venue");
                    navigate("/LoginPage");
                  } else {
                    alert("Please select both a start and end date.");
                  }
                }
              }}
            >
              BOOK NOW
            </BookButton>
          </VenueDetails>
        </RightColumn>
      </VenueContainer>
    </div>
  );
}

export default SingleVenue;
