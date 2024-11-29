import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const API_KEY = import.meta.env.VITE_API_KEY;
export const VenueContext = createContext();

export const useVenue = () => {
  return useContext(VenueContext);
};

export const VenueProvider = ({ children }) => {
  const [venues, setVenues] = useState([]);
  const [searchVenues, setSearchVenues] = useState([]);
  const [userVenues, setUserVenues] = useState([]);
  const [userBookings, setUserBookings] = useState([]);
  const { authState } = useAuth();

  const getHeaders = () => ({
    Authorization: `Bearer ${authState?.accessToken}`,
    "Content-Type": "application/json",
    "X-Noroff-API-Key": API_KEY,
  });

  const fetchVenues = async () => {
    try {
      const response = await axios.get(
        "https://v2.api.noroff.dev/holidaze/venues?_bookings=true&_owner=true"
      );
      setVenues(response.data.data);
      setSearchVenues(response.data.data);
    } catch (error) {
      alert(error.message || "Something went wrong");
    }
  };

  useEffect(() => {
    fetchVenues();
  }, []);

  const fetchUserInfo = async () => {
    if (!authState?.name || !authState?.accessToken) return;

    try {
      const userVenuesResponse = await axios.get(
        `https://v2.api.noroff.dev/holidaze/profiles/${authState.name}/venues?_bookings=true&_owner=true`,
        { headers: getHeaders() }
      );
      setUserVenues(userVenuesResponse.data.data);

      const userBookingsResponse = await axios.get(
        `https://v2.api.noroff.dev/holidaze/profiles/${authState.name}/bookings?_customer=true&_venue=true`,
        { headers: getHeaders() }
      );
      setUserBookings(userBookingsResponse.data.data);
    } catch (error) {
      alert(error.message || "Failed to fetch user info");
    }
  };

  const fetchSingleVenue = async (id) => {
    if (!authState?.accessToken) return;

    try {
      const response = await axios.get(
        `https://v2.api.noroff.dev/holidaze/venues/${id}?_bookings=true&_owner=true`,
        { headers: getHeaders() }
      );
      return response.data.data;
    } catch (error) {
      alert(error.message || "Failed to fetch venue");
    }
  };

  const createVenue = async (venueData) => {
    try {
      const response = await axios.post(
        "https://v2.api.noroff.dev/holidaze/venues",
        venueData,
        { headers: getHeaders() }
      );
      fetchVenues();
      return response.data.data;
    } catch (error) {
      throw new Error(error.message || "Failed to create venue");
    }
  };

  const addBooking = async (bookingData) => {
    try {
      const response = await axios.post(
        "https://v2.api.noroff.dev/holidaze/bookings",
        bookingData,
        { headers: getHeaders() }
      );
      fetchVenues();
      return response.data.data;
    } catch (error) {
      throw new Error(error.message || "Failed to create booking");
    }
  };

  const editVenue = async (venueData, id) => {
    try {
      const response = await axios.put(
        `https://v2.api.noroff.dev/holidaze/venues/${id}`,
        venueData,
        { headers: getHeaders() }
      );
      return response.data.data;
    } catch (error) {
      throw new Error(error.message || "Failed to edit venue");
    }
  };

  const deleteVenue = async (id) => {
    try {
      const response = await axios.delete(
        `https://v2.api.noroff.dev/holidaze/venues/${id}`,
        { headers: getHeaders() }
      );
      fetchVenues();
      return response.data.data;
    } catch (error) {
      throw new Error(error.message || "Failed to delete venue");
    }
  };

  return (
    <VenueContext.Provider
      value={{
        venues,
        searchVenues,
        setSearchVenues,
        createVenue,
        addBooking,
        editVenue,
        fetchVenues,
        deleteVenue,
        userBookings,
        userVenues,
        fetchUserInfo,
        fetchSingleVenue,
      }}
    >
      {children}
    </VenueContext.Provider>
  );
};
