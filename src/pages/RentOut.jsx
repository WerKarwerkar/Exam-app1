import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  PageContainer,
  FormContainer,
  StyledLabel,
  Input,
  TextArea,
  SubmitButton,
  Row,
  ErrorText,
  BackToHomepageLink,
  Title,
  Container,
  VenueBookingsList,
} from "../components/Venues/RentOutStyles";
import { useVenue } from "../Context/VenueContext";
import { useAuth } from "../Context/AuthContext";

const schema = yup
  .object({
    name: yup
      .string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    location: yup
      .string()
      .min(3, "Location must be at least 3 characters")
      .required("Location is required"),
    description: yup
      .string()
      .min(10, "Description must be at least 10 characters")
      .required("Description is required"),
    image: yup
      .string()
      .url("Must be a valid URL")
      .required("Image URL is required"),
    price: yup
      .number()
      .min(1, "Price must be at least 1 USD")
      .required("Price is required"),
    maxGuests: yup
      .number()
      .min(1, "At least 1 guest is required")
      .max(6, "Max 6 guests")
      .required("Maximum number of guests is required"),
  })
  .required();

function RentAVenuePage() {
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { createVenue, editVenue, deleteVenue, fetchVenues, fetchSingleVenue } =
    useVenue();
  const { id: venueId } = useParams();
  const [initialValues, setInitialValues] = useState({});
  const [isEdited, setIsEdited] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      location: "",
      description: "",
      image: "",
      price: 0,
      maxGuests: 0,
    },
  });
  const [existingVenue, setExistingVenue] = useState();

  const watchedFields = watch();
  useEffect(() => {
    const loadVenue = async () => {
      if (!venueId) return;
      try {
        const fetchedVenue = await fetchSingleVenue(venueId);
        if (!fetchedVenue) {
          throw new Error("Venue not found");
        }
        setExistingVenue(fetchedVenue);
      } catch (error) {
        console.error("Error fetching venue:", error);
      }
    };
    if (venueId && venueId !== "new") {
      loadVenue();
    }
  }, [venueId, fetchSingleVenue, navigate]);

  useEffect(() => {
    const isChanged =
      JSON.stringify(watchedFields) !== JSON.stringify(initialValues);
    setIsEdited(isChanged);
  }, [watchedFields, initialValues]);

  useEffect(() => {
    if (venueId && venueId != "new") {
      if (existingVenue && existingVenue.owner.email === authState.email) {
        const initialData = {
          name: existingVenue.name,
          location: existingVenue.location.city,
          description: existingVenue.description,
          image: existingVenue.media[0]?.url || "",
          price: existingVenue.price,
          maxGuests: existingVenue.maxGuests,
        };

        setInitialValues(initialData);
        Object.entries(initialData).forEach(([key, value]) =>
          setValue(key, value)
        );
      } else if (existingVenue) {
        alert("You are not authorized to edit this venue.");
        navigate("/");
      }
    } else if (venueId === "new" && !authState.email) {
      alert("Please log in to continue!");
      navigate("/");
    }
  }, [authState, venueId, navigate, setValue, existingVenue]);

  const onSubmit = async (inputData) => {
    if (existingVenue && existingVenue.owner.email != authState.email) {
      alert("Please log in as a Manager to Rent Out!");
      navigate("/");
      return;
    }
    const transformData = (data) => {
      return {
        name: data.name,
        description: data.description,
        media: [
          {
            url: data.image,
            alt: "Venue Image",
          },
        ],
        price: data.price,
        maxGuests: data.maxGuests,
        rating: 0,
        location: {
          city: data.location,
        },
      };
    };

    const transformedData = transformData(inputData);

    try {
      if (venueId && venueId !== "new") {
        if (isEdited === false)
          return alert("You need to make some changes before submitting.");
        await editVenue(transformedData, venueId);
        const CanMoveOut = await fetchVenues();
        alert("Venue updated successfully!");
        if (CanMoveOut == "Done") navigate(`/SingleVenue/${venueId}`);
      } else {
        const response = await createVenue(transformedData);
        const CanMoveOut = await fetchVenues();
        alert("Venue created successfully!");
        if (CanMoveOut == "Done") navigate(`/SingleVenue/${response.id}`);
      }
    } catch (error) {
      alert(`Operation failed: ${error.message || "Please try again."}`);
      console.error("Error details:", error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this venue?")) {
      try {
        await deleteVenue(venueId);
        alert("Venue deleted successfully!");
        navigate("/ProfilePage");
      } catch (error) {
        alert(`Failed to delete venue: ${error.message}`);
        console.error("Delete error:", error);
      }
    }
  };

  return (
    <>
      <Title>
        <h1>RENT A VENUE WITH US!</h1>
      </Title>
      <Container>
        <PageContainer>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <BackToHomepageLink>
              <button onClick={() => navigate("/ProfilePage")}>
                BACK TO THE PROFILE
              </button>
            </BackToHomepageLink>
            <Row>
              <div className="row-item">
                <StyledLabel htmlFor="name">NAME</StyledLabel>
                <Input {...register("name")} placeholder="Name" id="name" />
                <ErrorText>{errors.name?.message}</ErrorText>
              </div>
            </Row>
            <Row>
              <div className="row-item">
                <StyledLabel htmlFor="location">LOCATION</StyledLabel>
                <Input
                  {...register("location")}
                  placeholder="Location"
                  id="location"
                />
                <ErrorText>{errors.location?.message}</ErrorText>
              </div>
            </Row>
            <Row>
              <div className="row-item">
                <StyledLabel htmlFor="description">DESCRIPTION</StyledLabel>
                <TextArea
                  {...register("description")}
                  placeholder="Description"
                  id="description"
                />
                <ErrorText>{errors.description?.message}</ErrorText>
              </div>
            </Row>
            <Row>
              <div className="row-item">
                <StyledLabel htmlFor="image">IMAGE</StyledLabel>
                <Input
                  {...register("image")}
                  placeholder="Image URL"
                  id="image"
                />
                <ErrorText>{errors.image?.message}</ErrorText>
              </div>
            </Row>
            <Row>
              <div className="row-item">
                <StyledLabel htmlFor="price">
                  PRICE PER NIGHT IN USD
                </StyledLabel>
                <Input
                  {...register("price")}
                  type="number"
                  placeholder="Price per night"
                  id="price"
                />
                <ErrorText>{errors.price?.message}</ErrorText>
              </div>
            </Row>
            <Row>
              <div className="row-item">
                <StyledLabel htmlFor="maxGuests">
                  MAX NUMBER OF GUESTS
                </StyledLabel>
                <Input
                  {...register("maxGuests")}
                  type="number"
                  placeholder="Max guests"
                  id="maxGuests"
                  max={6}
                />
                <ErrorText>{errors.maxGuests?.message}</ErrorText>
              </div>
            </Row>
            <SubmitButton type="submit">
              {venueId && venueId !== "new" ? "EDIT" : "CREATE"} A VENUE
            </SubmitButton>
            {venueId && venueId !== "new" && (
              <>
                <SubmitButton type="button" onClick={handleDelete}>
                  DELETE VENUE
                </SubmitButton>
                <SubmitButton
                  type="button"
                  onClick={() => navigate(`/SingleVenue/${venueId}`)}
                >
                  VIEW VENUE PAGE
                </SubmitButton>
              </>
            )}
          </FormContainer>
          {existingVenue && existingVenue.bookings && (
            <VenueBookingsList>
              <h2>BOOKINGS FOR THIS VENUE</h2>
              {existingVenue.bookings.map((booking) => (
                <div key={booking.id}>
                  <p>
                    <strong>CUSTOMER:</strong> {booking.customer.name} (
                    {booking.customer.email})
                  </p>
                  <p>
                    <strong>FROM:</strong>
                    {new Date(booking.dateFrom).toLocaleDateString()}{" "}
                    <strong>TO:</strong>
                    {new Date(booking.dateTo).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>GUESTS:</strong> {booking.guests}
                  </p>
                  <hr />
                </div>
              ))}
            </VenueBookingsList>
          )}
        </PageContainer>
      </Container>
    </>
  );
}

export default RentAVenuePage;
