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
} from "../components/Login/LoginStyles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Enter a valid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  })
  .required();

function LoginPage() {
  const navigate = useNavigate();
  const { loginUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    try {
      await loginUser(data);
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      alert(`Login failed: ${error.message || "Please try again."}`);
    }
  }

  return (
    <>
      <Title>
        <h1>LOGIN FORM</h1>
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
            <SubmitButton type="submit">LOGIN</SubmitButton>
            <RegisterText>
              NOT REGISTERED? CREATE AN ACCOUNT <a href="/RegisterPage">HERE</a>
            </RegisterText>
          </FormContainer>
        </PageContainer>
      </Container>
    </>
  );
}

export default LoginPage;
