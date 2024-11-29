import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Container,
  PageContainer,
  FormContainer,
  Row,
  StyledLabel,
  Input,
  SubmitButton,
  ErrorText,
  BackToHomepageLink,
  Title,
  RegisterText,
} from "../components/Register/RegisterStyles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const schema = yup
  .object({
    name: yup
      .string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  })
  .required();

function RegisterPage() {
  const navigate = useNavigate();
  const { registerUser, selectedRole } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    try {
      await registerUser(data);
      alert("Registration successful!");
      navigate("/");
    } catch (error) {
      alert(`Registration failed: ${error.message || "Please try again."}`);
    }
  }

  return (
    <>
      <Title>
        <h1>REGISTRATION FORM AS A {selectedRole}</h1>
      </Title>
      <Container>
        <PageContainer>
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <BackToHomepageLink>
              <button onClick={() => navigate("/")}>
                BACK TO THE HOMEPAGE
              </button>
            </BackToHomepageLink>

            <Row>
              <div>
                <StyledLabel htmlFor="name">NAME</StyledLabel>
                <Input
                  {...register("name")}
                  placeholder="Enter your name"
                  id="name"
                />
                <ErrorText>{errors.name?.message}</ErrorText>
              </div>
            </Row>
            <Row>
              <div>
                <StyledLabel htmlFor="email">EMAIL</StyledLabel>
                <Input
                  {...register("email")}
                  placeholder="Enter your email"
                  id="email"
                />
                <ErrorText>{errors.email?.message}</ErrorText>
              </div>
            </Row>
            <Row>
              <div>
                <StyledLabel htmlFor="password">PASSWORD</StyledLabel>
                <Input
                  {...register("password")}
                  placeholder="Enter your password"
                  type="password"
                  id="password"
                />
                <ErrorText>{errors.password?.message}</ErrorText>
              </div>
            </Row>

            <SubmitButton type="submit">CONTINUE</SubmitButton>
            <RegisterText>
              ALREADY REGISTERED? LOGIN <a href="/LoginPage">HERE</a>
            </RegisterText>
          </FormContainer>
        </PageContainer>
      </Container>
    </>
  );
}

export default RegisterPage;
