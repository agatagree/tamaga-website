import { Link } from "react-router-dom";
import { SocialIcon } from "./SocialIcon";

export const HomePage = () => {
  return (
    <>
      <div className="intro-wrapper">
        <div className="banner">
          <div className="intro-gallery"></div>
        </div>
        <div className="intro-content-wrapper">
          <div className="intro-content">
            <div className="intro-text">
              <h1 className="H01--regular">
                <span className="H01">tamaga</span> studio*
              </h1>
              <h2 className="H05">*design and architecture</h2>
            </div>
            <Link className="btn-primary-lg-default" to="/projects">Check our projects</Link>
          </div>
        </div>
        {/* 
        <StyledMain>
          <StyledContent>
            <StyledTitle>
              <BoldName>tamaga</BoldName> studio *
            </StyledTitle>
            <StyledText>
              *projektowanie architektury, wnętrz i w ogóle
            </StyledText>
            <StyledSocialSection>
              <SocialIcon
                link="https://www.facebook.com/tamagastudio/"
                element={<FaFacebook />}
              />

              <SocialIcon
                link="https://www.instagram.com/tamagastudio/"
                element={<FaInstagram />}
              />
            </StyledSocialSection>
            <StyledContact>info@tamagastudio.pl</StyledContact>
          </StyledContent>
        </StyledMain> */}
      </div>
    </>
  );
};
