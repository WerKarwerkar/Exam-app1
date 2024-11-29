import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  FormContainer,
  Input,
  TextArea,
  SubmitButton,
  StyledLabel,
  ErrorText,
  PageContainer,
  BackToHomepageLink,
  Row,
} from "./ContactFormStyles";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    firstName: yup
      .string()
      .min(3, "First name must be at least 3 characters")
      .required("First name is required"),
    lastName: yup
      .string()
      .min(3, "Last name must be at least 3 characters")
      .required("Last name is required"),
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),
    phone: yup
      .string()
      .matches(/^[0-9]+$/, "Phone number must contain only numbers")
      .min(7, "Phone number must be at least 7 digits")
      .required("Phone number is required"),
    message: yup
      .string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  })
  .required();

function ContactForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    alert("Your message has been sent!");
  }

  return (
    <PageContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <BackToHomepageLink>
          <button onClick={() => navigate("/")}>BACK TO THE HOMEPAGE</button>
        </BackToHomepageLink>
        <Row>
          <div className="row-item">
            <StyledLabel htmlFor="firstName">FIRST NAME</StyledLabel>
            <Input
              {...register("firstName")}
              placeholder="Your first name"
              id="firstName"
            />
            <ErrorText>{errors.firstName?.message}</ErrorText>
          </div>
          <div className="row-item">
            <StyledLabel htmlFor="lastName">LAST NAME</StyledLabel>
            <Input
              {...register("lastName")}
              placeholder="Your last name"
              id="lastName"
            />
            <ErrorText>{errors.lastName?.message}</ErrorText>
          </div>
        </Row>
        <Row>
          <div className="row-item">
            <StyledLabel htmlFor="email">EMAIL</StyledLabel>
            <Input {...register("email")} placeholder="Your email" id="email" />
            <ErrorText>{errors.email?.message}</ErrorText>
          </div>
          <div className="row-item">
            <StyledLabel htmlFor="phone">PHONE NUMBER</StyledLabel>
            <Input
              {...register("phone")}
              placeholder="Your phone number"
              id="phone"
            />
            <ErrorText>{errors.phone?.message}</ErrorText>
          </div>
        </Row>
        <Row>
          <div className="row-item">
            <StyledLabel htmlFor="message">MESSAGE</StyledLabel>
            <TextArea
              {...register("message")}
              placeholder="Your message"
              id="message"
            />
            <ErrorText>{errors.message?.message}</ErrorText>
          </div>
        </Row>
        <SubmitButton type="submit">SEND</SubmitButton>
      </FormContainer>
    </PageContainer>
  );
}

export default ContactForm;
