import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer, Logo, FooterNavigation } from "./FooterStyles";
import logoImage from "../../assets/logo.png";
function Footer() {
  return (
    <FooterContainer>
      <Logo>
        <Link to="/">
          <img src={logoImage} alt="Vista Venue Logo" />
        </Link>
      </Logo>
      <FooterNavigation>
        <div>
          <a href="/">HOME</a>
          <a href="/ListOfVenues">VENUES</a>
        </div>
        <div>
          <a href="/RentOut/new">RENT OUT</a>
          <a href="/ContactPage">CONTACT</a>
        </div>
        <div>
          <p>FIND US HERE:</p>
          <a
            href="https://www.google.com/maps/place/456+Palm+Canyon,+CA+92262"
            target="_blank"
            rel="noopener noreferrer"
          >
            456 PALM CANYON, CA 92262
          </a>
        </div>
      </FooterNavigation>
    </FooterContainer>
  );
}

export default Footer;
