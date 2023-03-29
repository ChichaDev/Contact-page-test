import "./ContactBlock.css";

import { ArrowSend } from "../arrowSend/ArrowSend";
import { ContactForm } from "../contactForm/ContatctForm";
import { ContactInfo } from "../contactInfo/ContactInfo";

// component declarative approach to further share responsibilities between components
export const ContactBlock = () => {
  return (
    <section className="container">
      <ContactInfo />
      <ContactForm />
      <ArrowSend />
    </section>
  );
};
