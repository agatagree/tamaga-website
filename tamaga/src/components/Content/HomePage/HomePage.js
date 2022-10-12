import {
  StyledMain,
  StyledBanner,
  StyledContent,
  StyledTitle,
  StyledText,
  SocialIcons,
  StyledContact,
  StyledLayout,
  StyledGallery,
  BoldName,
  StyledSocialSection,
} from "./HomePage.styled";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SocialIcon } from "./SocialIcon";

export const HomePage = () => {
  return (
    <>
      <StyledLayout>
        <StyledBanner>
          <StyledGallery />
        </StyledBanner>
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
        </StyledMain>
      </StyledLayout>
    </>
  );
};
