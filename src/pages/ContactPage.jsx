import React from "react";
import ContactForm from "../components/Forms/ContactForm";
import { Title } from "../components/Forms/ContactFormStyles";

function ContactPage() {
  return (
    <div>
      <Title>
        <h1>CONTACT US</h1>
      </Title>
      <ContactForm />
    </div>
  );
}

export default ContactPage;
