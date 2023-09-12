import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-nav">
        <div>
          <h1>
            <i>booking-</i>
          </h1>
          <p>✉️ book@example.com</p>
        </div>
        <div>
          <h1>
            <i>General-</i>
          </h1>
          <p>✉️ info@example.com</p>
        </div>
        <div>
          <h1>
            <i>Technical-</i>
          </h1>
          <p>✉️ tech@example.com</p>
        </div>
      </div>
      <div className="contact-form">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
