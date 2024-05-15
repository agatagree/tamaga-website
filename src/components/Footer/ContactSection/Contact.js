import { ContactForm } from "./ContactForm";

export const Contact = () => {
  return (
    <div className="contact-layout">
      <div className="contact-section">
        <div className="content-half-right-small content-margin-180">
          <h4 className="H04--bold content-half-title">Contact us</h4>
          <div className="contact-spacing">
            <h6 className="H06">We work locally and internationally.</h6>
            <h6 className="H06">
              Get in touch and let’s build something together{" "}
              <a className="link24" href="mailto:ag.tamagastudio@gmail.coml">
                info@tamagastudio.pl
              </a>
            </h6>
            <h6 className="H06">
              Follow us on{" "}
              <a
                className="link24"
                href="https://www.instagram.com/tamagastudio/"
              >
                Instagram
              </a>
              ,{" "}
              <a
                className="link24"
                href="https://www.facebook.com/tamagastudio/"
              >
                Facebook
              </a>
            </h6>
          </div>
        </div>
        <div className="content-half-left-big content-margin-180 content-margin-120-40-lg">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
