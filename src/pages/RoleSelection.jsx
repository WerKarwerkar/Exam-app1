import React from "react";
import {
  PageContainer,
  BackToHomepageLink,
  RoleSelectionContainer,
  RoleButton,
  SubmitButton,
  Title,
  Container,
} from "../components/RoleSelection/RoleSelectionStyles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function RoleSelection() {
  const navigate = useNavigate();
  const { selectedRole, setSelectedRole } = useAuth();

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleSubmit = () => {
    if (selectedRole) {
      alert(`You selected: ${selectedRole}`);
      navigate("/RegisterPage");
    } else {
      alert("Please select a role before continuing.");
    }
  };

  return (
    <>
      <Title>
        <h1>SELECT YOUR ROLE</h1>
      </Title>
      <Container>
        <PageContainer>
          <BackToHomepageLink>
            <button onClick={() => navigate("/")}>BACK TO THE HOMEPAGE</button>
          </BackToHomepageLink>
          <RoleSelectionContainer>
            <RoleButton
              selected={selectedRole === "CUSTOMER"}
              onClick={() => handleRoleSelect("CUSTOMER")}
            >
              CUSTOMER
            </RoleButton>
            <RoleButton
              selected={selectedRole === "VENUE MANAGER"}
              onClick={() => handleRoleSelect("VENUE MANAGER")}
            >
              MANAGER
            </RoleButton>
          </RoleSelectionContainer>
          <SubmitButton onClick={handleSubmit}>CONTINUE</SubmitButton>
        </PageContainer>
      </Container>
    </>
  );
}

export default RoleSelection;
