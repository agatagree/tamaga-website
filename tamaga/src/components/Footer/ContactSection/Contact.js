import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <div className="contact-layout">
      <div className="contact-wrapper">
        <h4 className="H04--bold contact-title">Contact us</h4>
        <div className="contact-section">
          <div className="contact-info">
            <h6 className="H06 contact-text">
              We work locally and internationally.
            </h6>
            <h6 className="H06 contact-text">
              Get in touch and let’s build something together
              info@tamagastudio.pl
            </h6>
            <h6 className="H06 contact-text">
              Follow us on {" "}
              <a
                className="link24"
                href="https://www.instagram.com/tamagastudio/"
              >
                Instagram
              </a>
              , {" "}
              <a
                className="link24"
                href="https://www.facebook.com/tamagastudio/"
              >
                Facebook
              </a>
            </h6>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
