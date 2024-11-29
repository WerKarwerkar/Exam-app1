import React, { useState } from "react";
import { useVenue } from "../../Context/VenueContext";
import {
  SearchFormContainer,
  SearchSubtitle,
  InputField,
} from "./SearchFormStyles";

const SearchForm = () => {
  const { venues, setSearchVenues } = useVenue();
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const filteredVenues = venues.filter((venue) =>
      venue.name.toLowerCase().includes(value)
    );
    setSearchVenues(filteredVenues);
  };

  return (
    <>
      <SearchFormContainer>
        <SearchSubtitle>SEARCH A VENUE</SearchSubtitle>
        <InputField
          placeholder="NAME OF THE VENUE"
          value={query}
          onChange={handleInputChange}
        />
      </SearchFormContainer>
    </>
  );
};

export default SearchForm;
