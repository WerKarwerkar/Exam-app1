import React from "react";
import {
  HeaderContainer,
  Logo,
  Navigation,
  NavWrapper,
  AuthLinks,
} from "./HeaderStyles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoImage from "../../assets/logo.png";
import { useAuth } from "../../Context/AuthContext";

function Header() {
  const { authState, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <HeaderContainer>
        <Logo>
          <Link to="/">
            <img src={logoImage} alt="Vista Venue Logo" />
          </Link>
        </Logo>

        <NavWrapper>
          <Navigation>
            <Link to="/" style={{ color: isHomePage ? "white" : "black" }}>
              HOME
            </Link>
            <Link
              to="/ListOfVenues"
              style={{ color: isHomePage ? "white" : "black" }}
            >
              VENUES
            </Link>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/RentOut/new");
              }}
              style={{ color: isHomePage ? "white" : "black" }}
            >
              RENT OUT
            </Link>
            <Link
              to="/ContactPage"
              style={{ color: isHomePage ? "white" : "black" }}
            >
              CONTACT
            </Link>
          </Navigation>
        </NavWrapper>
      </HeaderContainer>
      <AuthLinks>
        {authState?.email && authState?.email !== "" ? (
          <>
            <Link
              to="/ProfilePage"
              style={{ color: isHomePage ? "white" : "black" }}
            >
              PROFILE
            </Link>
            <Link
              to="#"
              style={{ color: isHomePage ? "white" : "black" }}
              onClick={(e) => {
                e.preventDefault();
                logout();
                alert("You are Logged Out");
                navigate("/");
              }}
            >
              LOGOUT
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/LoginPage"
              style={{ color: isHomePage ? "white" : "black" }}
            >
              LOGIN
            </Link>
            <Link
              to="/RoleSelection"
              style={{ color: isHomePage ? "white" : "black" }}
            >
              REGISTER
            </Link>
          </>
        )}
      </AuthLinks>
    </>
  );
}

export default Header;
