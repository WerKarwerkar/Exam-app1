import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  SectionOne,
  Column,
  SectionTwo,
  SectionThree,
  TextWithImage,
  ImageWithText,
} from "../components/HomePageStyles";
import Image1 from "../assets/PalmSprings1.jpeg";
import Image2 from "../assets/PalmSprings2.jpeg";
import Image3 from "../assets/PalmSprings3.png";
import Image4 from "../assets/PalmSprings4.png";
import Image5 from "../assets/Chairpicture.png";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="BackGroundImage"
        style={{
          height: "100%",
          left: 0,
          top: 0,
          backgroundImage: `url(${Image5})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          width: "100%",
          zIndex: -1,
        }}
      ></div>
      <SectionOne>
        <Column>
          <h1>WE FIND YOU A PERFECT PLACE TO STAY</h1>
          <button onClick={() => navigate("/ListOfVenues")}>
            BOOK NOW
          </button>{" "}
        </Column>
      </SectionOne>

      <SectionTwo>
        <h2>WHERE WE'RE GOING NEXT?</h2>

        <div className="carousel">
          <div className="carousel-track">
            <img src={Image1} alt="Venue 1" className="carousel-image" />
            <img src={Image2} alt="Venue 2" className="carousel-image" />
            <img src={Image3} alt="Venue 3" className="carousel-image" />
            <img src={Image4} alt="Venue 4" className="carousel-image" />
          </div>
        </div>

        <Link to="/ListOfVenues" className="view-venues">
          SEE ALL THE VENUES...
        </Link>
      </SectionTwo>

      <SectionThree>
        <TextWithImage>
          <div className="text">
            <h3>stay with us.</h3>
            <p>
              Book a venue with us and discover the perfect space for your next
              getaway. Whether you're looking for a cozy retreat or a grand
              venue, we offer a wide selection to suit your travel needs. Enjoy
              a seamless booking experience and find your ideal destination.
            </p>
            <Link to="/RoleSelection">Register here</Link>
          </div>
          <div className="image">
            <img src={Image1} alt="Venue" />
          </div>
        </TextWithImage>

        <ImageWithText>
          <div className="image">
            <img src={Image2} alt="Venue" />
          </div>
          <div className="text">
            <h3>rent with us.</h3>
            <p>
              Rent with us and transform your venue into a steady source of
              income. List your property, reach a global audience, and start
              earning by hosting travelers seeking unique stays. Enjoy a
              seamless hosting experience and maximize your property's
              potential.
            </p>
            <Link to="/RoleSelection">Register here</Link>
          </div>
        </ImageWithText>
      </SectionThree>
    </>
  );
}

export default HomePage;
